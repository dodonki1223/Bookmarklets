# SearchYahooRouteInfo

## Yahoo路線情報検索

### 解説
Yahooの路線情報検索を使用し入力された時刻から３本、終電から前３本の情報を表示するブックマークレット

- 乗り物関連パラメータ
    - &al=1：空路
    - &shin=1：新幹線
    - &ex=1：有料特急
    - &hb=1：高速バス
    - &lb=1：路線/連絡バス
    - &sr=1：フェリー

- 時間関係パラメータ
    - &y=year：年
    - &m=month：月
    - &d=day：日
    - &hh=hour：時間
    - &m2=time2：分２桁
    - &m1=time1：分１桁
    - &type=1：現在時刻から
    - &type=2：終電から

**URL例**
```
http://transit.yahoo.co.jp/search/result?flatlon=&from=出発地点&tlatlon=&to=到着地点&via=&via=&via=&y=2016&m=06&d=15&hh=09&m2=5&m1=5&type=1&ticket=ic&shin=1&ex=1&s=0&expkind=1&ws=2
```
- ※Chromeでしか動作確認していません
