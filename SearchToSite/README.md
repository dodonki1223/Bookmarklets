# SearchToSite

## サイト内（現在のURL配下）から特定のキーワードで検索する

### 解説
- 現在開いているURL配下のページから特定のキーワードで検索する
- APIについて
    - URL：https://www.google.co.jp/search?q=site:〇〇〇
    - URLパラメーター
        - q=site:〇〇〇
            - 〇〇〇の部分には現在開いているURLが入ります
    - 「site:」キーワードを使用すると特定のURL内で検索することができます
- ※Chromeでしか動作確認していません
