# 九連 運営ボード（GitHub Pages ＋ Firebase）

第27回碧風祭「雀荘 九連（SUAC League）」の当日運営システムです。

| ファイル | 中身 |
| --- | --- |
| `index.html` | スタッフ用画面（受付PCで使う）。受付・待ち列、卓とタイマー、シフト、成績、QRコード |
| `view.html` | お客さん用ページ。待ち組数・待ち時間、卓の残り時間、ランキング（名前の呼び出しや区分は出ない） |
| `firebase-config.js` | Firebaseの設定とスタッフのアカウント |
| `firestore.rules` | データベースのアクセスルール |
| `logo.png` | 九連ロゴ |

## 1. Firebaseの準備（最初の1回だけ）

1. https://console.firebase.google.com/ を開き、Googleアカウントでログインする
2. 「プロジェクトを作成」→ 名前は `churen-board` など → Googleアナリティクスはオフでよい
3. 左メニュー「構築 → Firestore Database」→「データベースの作成」→ ロケーションは `asia-northeast1（東京）` → 「本番環境モード」で作成
4. Firestoreの「ルール」タブを開き、`firestore.rules` の中身を貼り付けて「公開」
   - `staff@example.com` を、受付PCでログインするGoogleアカウントに書き換える（このリポジトリには実際のアドレスを書かない）
5. 左メニュー「構築 → Authentication」→「始める」→「Google」を有効にする
6. 「プロジェクトの設定（歯車）」→「マイアプリ」→ ウェブ（`</>`）を追加 → 表示された `firebaseConfig` の値を `firebase-config.js` に貼る

## 2. GitHub Pagesで公開

1. このフォルダの中身を、GitHubのリポジトリ（公開）に置く
2. リポジトリの「Settings → Pages」→「Branch: main / (root)」で保存
3. 数分後に `https://<ユーザー名>.github.io/<リポジトリ名>/` が開ける
4. Firebaseの「Authentication → 設定 → 承認済みドメイン」に `<ユーザー名>.github.io` を追加する（これがないとログインできない）

## 3. 使い始める

1. 受付PCで `index.html` のURLを開き、Googleでログイン
2. 「卓の状況」で「1卓・2卓・予備卓を作る」を押す
3. 「掲示」タブにお客さん用ページのQRコードが出るので、印刷して入口に貼る
4. リハーサルで受付→着席→終局を1回通し、記録は「成績」タブで削除する

## メモ

- `firebase-config.js` の値は公開されても問題ありません。データの守りは `firestore.rules` が担当します
- 受付の名前・区分・シフトはスタッフだけが読めます。お客さん用ページが読むのは `public/state` だけです
- 電波が途切れても、受付PCではそのまま操作でき、つながったときに自動で保存されます
- Firebaseの設定前に `index.html` を開くと、そのPCの中だけで動く練習モードになります
