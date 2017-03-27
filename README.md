# これはテストを書くための鋳型です

- テストコードを書くための鋳型であり、正しいテストコードを書くためのツールではありません
- ツッコミ・改良、自由にどうぞ

## Quick Start

厳密に Node.js バージョン見てます。>=4.0.0でしか動きません

### Installation

```bash
$ yarn
```

yarn 入れてない人は適宜 `npm i -g yarn` などしてください。  
※ `npm i` でも入ります。`shrinkwrap` 入れてないけど動くっちゃ動くと思う

### Testing

#### Single Run

```bash
$ yarn test
```

テストファイルを対象にして Chrome が起動してテストが走る。終わると閉じる  
`app/coverage/report` 配下にカバレッジ計測後のhtmlとか残る

#### Watching files

```bash
$ yarn test:watch
```

テストファイルを監視しながらテストが走る。書き換えと同時にテストが走る

-----

## Stack

### JavaScript

- JavaScript bundler : webpack
  - babel-loader
  - eslint-loader 参照：`.eslintrc`
- Babel :
  - es2015
  - plugins
    - babel-plugin-espower : power-assert のメッセージをログに掲出できる
    - babel-plugin-istanbul : カバレッジ計測のための記述をファイルに残せる
    - ※ いずれも `process.env.NODE_ENV=test` でのみ使う。参照：`.babelrc`

dep: jQuery 1.12 ※ 用途に合わせてください

### Testing Tools

- Karma : テストランナー
  - karma-plugins : 
    - chrome-launcher
    - coverage
    - mocha
    - mocha-reporter
    - power-aseert
    - sinon
    - webpack
- mocha : テストフレームワーク
- sinon : テストダブルツール / APIに依存する部分を補填するため、stub, spy, fakeServer など提供
- power-assert : アサーション ※ Node.js の assert API が貧相なため

設定： `karma.conf.js` 参照。  
なぜChromeが起動するのか。PhantomJS でも良かったが JavaScriptエンジンを疑問視。  
そもそもテストのためのJavaScriptが動かないを避けるため＝いちいちテストのために babel 周り肥えさせたくない。  

-----

## CI

`.travis.yml`

- distribution : trusty を指定（じゃないとChrome入れられない）
- sudo で Chrome 安定版を apt-get
- yarn install 前にCIコンテナにない仮想ディスプレイ起動とChromeのパス通す
  - Travis に yarn がデフォルトで入ったので yarn.lock あればインストール自動はスクリプトに要らない
- yarn test 走る
- 成功すれば、node-coveralls でカバレッジをCoverallsに投げつける
  - .coveralls.yml にリポジトリtokenが必要です


-----

## Structure

主要なファイルとか。

```bash
├── .babelrc # babel 設定ファイル
├── .eslintrc # eslint 設定ファイル
├── .travis.yml # travis
├── .coveralls.yml # Coveralls tokenのためのファイル
├── app
|  └── index.html
├── gulp # gulp ファイル＝タスク
├── gulpfile.js # gulp エントリーだけのファイル
├── karma.conf.js # karma 設定ファイル
├── package.json
├── src
|  ├── js # JavaScript ソースファイル
|  └── scss # Scss ソースファイル
├── test # テスト用 JavaScript ファイル
├── webpack.config.js # webpack設定ファイル
├── webpack.entries.js # webpackエントリーファイル外出し
└── yarn.lock
```

-----

## Question

- なぜテストコードを書くのか
  - そもそもテストは実際に使われるコードではなく、正しく機能するかのためのコードです
  - 機能（クラス・メソッド）単体で正しくコードが機能する担保をするために行います
  - 問題が出たから書くものでは決してなく、エンジニアがプログラムを設計するにあたり整理しながら、書かれるべきものです
    - 書くことで受ける恩恵の方がエンジニアにとっては大きい
    - 設計の良し悪しがわかる、クラスやメソッドの責務について熟考するようになる

- よいテストコードとはなんですか
  - よいテストコード＝読みやすいコード＝良い設計（順序としては逆です、右からが正しい）
  - [事例をもとにした具体例](https://codeiq.jp/magazine/2013/11/1475/)

-----

## テストと関係ないもの

- StaticServe : BrowserSync
- Scss compile : gulp-sass (= node-sass)

### Serve

```bash
$ yarn start
```

`app` を起点にして静的サーバ起動。  
`src/js` 配下を監視、`src/scss` 配下を監視。  
`process.env.NODE_ENV=development`


### build

```bash
$ yarn build
```

`app` 配下に生成物をビルド。  
`process.env.NODE_ENV=production`
