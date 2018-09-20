# CreateQRCodeForCurrentURL

## 現在開いているURLからQRコードを作成する

### 解説
- 「Google Charts」を使用してQRコードを作成しています
- 実行すると画面の４分の１のサイズでQRコードだけ表示されている新しいウィンドウを開く
- 「Google Chart」について
    - [Googleのグラフツール](https://developers.google.com/chart/?hl=ja)
    - URL：http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=〇〇〇
    - URLパラメーター
        - cht=qr
            - Google Chart API　でQRコードを作成するための指定
        - chs=300x300
            - 作成されるQRコードのサイズ
        - chl=〇〇〇
            - QRコードを作成するURL
- ※Chromeでしか動作確認していません
