# Hatena Syntax Highlighting CSS Generator

はてなブログで使用されている はてなスーパpre記法 のシンタックスハイライトの色を変更する CSS を作成するための Web ツールです。

[こちら](https://kawmra.github.io/hatena-syntax-highlight-css-generator/) で使用するか、ダウンロードしてオフラインで使用できます。

# Install

```
$ git clone https://github.com/kawmra/hatena-syntax-highlight-css-generator.git
$ cd hatena-syntax-highlight-css-generator
$ npm install
```

`index.html` を Web ブラウザで開くと使用できます。

# NPM Scripts

- `watch`    
    Webpack でファイルの変更を監視し、変更があれば開発モードでビルドします。
- `build`    
    Webpack でプロダクションモードでビルドします。
- `deploy`    
    `build` してから `gh-pages` ブランチに必要なファイルをデプロイします。    
    デプロイするには、このレポジトリを fork した自分のレポジトリを clone している必要があります。

# License
 
 MIT
 