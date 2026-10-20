// 九連 運営ボードの設定ファイル
// この値は公開されても問題ありません（守りは firestore.rules で行います）。
window.CHUREN_CONFIG = {
  firebase: {
    apiKey: "AIzaSyBRkPRZv1IzNDSjc_WQyzU4d4oNXSNvyAo",
    authDomain: "churen-system.firebaseapp.com",
    projectId: "churen-system",
    storageBucket: "churen-system.firebasestorage.app",
    messagingSenderId: "561249959731",
    appId: "1:561249959731:web:440b167300a93e0983c846"
  },
  // スタッフのアカウントはここには書かず、Firebaseコンソールのルールだけで管理します
  // （公開リポジトリにメールアドレスを載せないため）
  staffEmails: []
};
