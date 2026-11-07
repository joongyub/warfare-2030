package io.github.joongyub.warfare2030;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.core.content.ContextCompat;
import androidx.credentials.Credential;
import androidx.credentials.CredentialManager;
import androidx.credentials.CredentialManagerCallback;
import androidx.credentials.CustomCredential;
import androidx.credentials.GetCredentialRequest;
import androidx.credentials.GetCredentialResponse;
import androidx.credentials.exceptions.GetCredentialCancellationException;
import androidx.credentials.exceptions.GetCredentialException;
import com.google.android.libraries.identity.googleid.GetSignInWithGoogleOption;
import com.google.android.libraries.identity.googleid.GoogleIdTokenCredential;
import org.json.JSONObject;

// 공개 사이트를 주소창 없이 꽉 찬 화면(몰입 모드)으로 여는 화면 하나
// 게임 파일은 사이트에서 받으므로 사이트 배포 = 앱 업데이트 (sw.js 버전이 바뀌면 새 버전으로 바뀜)
public class MainActivity extends Activity {
    static final String SITE = "https://joongyub.github.io/warfare-2030/";
    WebView web;

    @Override protected void onCreate(Bundle b) {
        super.onCreate(b);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON | WindowManager.LayoutParams.FLAG_FULLSCREEN);
        if (Build.VERSION.SDK_INT >= 28) getWindow().getAttributes().layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
        web = new WebView(this);
        web.setBackgroundColor(Color.BLACK);
        // 사이트가 다 뜰 때까지 웹 화면을 숨겨 시작 화면(2030 엠블럼, themes.xml launch_bg)이 보이게 함
        web.setVisibility(View.INVISIBLE);
        web.postDelayed(this::reveal, 8000);   // 느린 네트워크에서도 8초 뒤엔 보여 줌
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setCacheMode(WebSettings.LOAD_DEFAULT);
        s.setUserAgentString(s.getUserAgentString() + " W2030App");
        // 게임(src/cloud.js)이 W2030.googleSignIn(웹 클라이언트 ID) 를 부르면 안드로이드 구글 로그인 창을 띄움
        web.addJavascriptInterface(new Bridge(), "W2030");
        web.setWebViewClient(new WebViewClient() {
            @Override public void onPageFinished(WebView v, String url) { v.postDelayed(MainActivity.this::reveal, 300); }
            // 게임 사이트 안은 앱에서, 다른 주소(구글 로그인 등)는 기기 브라우저로
            @Override public boolean shouldOverrideUrlLoading(WebView v, WebResourceRequest r) {
                Uri u = r.getUrl();
                String h = u.getHost() == null ? "" : u.getHost();
                if (h.equals("joongyub.github.io") || h.endsWith("firebaseapp.com") || h.endsWith("gstatic.com") || h.endsWith("googleapis.com")) return false;
                try { startActivity(new Intent(Intent.ACTION_VIEW, u)); } catch (Exception e) { }
                return true;
            }
        });
        setContentView(web);
        immersive();
        if (b != null) web.restoreState(b); else web.loadUrl(SITE);
    }
    // ---- 앱 안 구글 로그인 ----
    // 웹뷰 안에서는 구글이 로그인 페이지를 막기 때문에, 안드로이드 기본 '구글로 로그인' 창(Credential Manager)으로 로그인하고
    // 받은 ID 토큰을 웹 게임에 넘김 → 게임이 Firebase signInWithCredential 로 같은 계정에 로그인 (웹과 같은 저장 칸)
    class Bridge {
        @JavascriptInterface public void googleSignIn(String clientId) { runOnUiThread(() -> signIn(clientId)); }
        @JavascriptInterface public int version() { return 2; }
    }
    void signIn(String clientId) {
        GetSignInWithGoogleOption opt = new GetSignInWithGoogleOption.Builder(clientId).build();
        GetCredentialRequest req = new GetCredentialRequest.Builder().addCredentialOption(opt).build();
        CredentialManager.create(this).getCredentialAsync(this, req, null, ContextCompat.getMainExecutor(this),
            new CredentialManagerCallback<GetCredentialResponse, GetCredentialException>() {
                @Override public void onResult(GetCredentialResponse r) {
                    Credential c = r.getCredential();
                    if (c instanceof CustomCredential && GoogleIdTokenCredential.TYPE_GOOGLE_ID_TOKEN_CREDENTIAL.equals(c.getType())) {
                        try { authResult("ok", GoogleIdTokenCredential.createFrom(c.getData()).getIdToken()); }
                        catch (Exception e) { authResult("error", "토큰 읽기 실패: " + e.getMessage()); }
                    } else authResult("error", "알 수 없는 로그인 응답");
                }
                @Override public void onError(GetCredentialException e) {
                    authResult(e instanceof GetCredentialCancellationException ? "cancel" : "error", e.getClass().getSimpleName() + ": " + e.getMessage());
                }
            });
    }
    void authResult(String kind, String value) {
        String js = "window.__w2030Auth && window.__w2030Auth(" + JSONObject.quote(kind) + "," + JSONObject.quote(String.valueOf(value)) + ")";
        runOnUiThread(() -> web.evaluateJavascript(js, null));
    }
    void reveal() { if (web.getVisibility() != View.VISIBLE) web.setVisibility(View.VISIBLE); }
    void immersive() {
        web.setSystemUiVisibility(View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY | View.SYSTEM_UI_FLAG_FULLSCREEN | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION | View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
    }
    @Override public void onWindowFocusChanged(boolean f) { super.onWindowFocusChanged(f); if (f) immersive(); }
    @Override protected void onSaveInstanceState(Bundle o) { super.onSaveInstanceState(o); web.saveState(o); }
    @Override protected void onPause() { super.onPause(); web.onPause(); }
    @Override protected void onResume() { super.onResume(); web.onResume(); immersive(); }
    // 뒤로 가기: 게임 안의 Esc 와 같게 (창 닫기). 게임이 처리 못하면 그대로 둠
    @Override public void onBackPressed() {
        web.evaluateJavascript("document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape'}));", null);
    }
}
