# AGENTS.md

このリポジトリで作業する AI エージェント向けの案内です。人間が読んでも構いません。

## このリポジトリについて

`@mitsuharu/vivliostyle-theme-iosdc-pamphlet` は、iOSDC Japan に投稿するパンフレット記事を
[Vivliostyle](https://vivliostyle.org/) で組版するためのテーマ（CSS パッケージ）です。
npm に公開しており、原稿側のリポジトリから `vivliostyle.config.js` の `theme` で参照されます。

Vivliostyle Themes **v3**（`@vivliostyle/theme-base` 3.x）系のテーマです。
`@vivliostyle/theme-techbook` を土台にして、その上へパンフレット向けの調整を重ねています。

## ファイル構成

```text
.
├── theme.css              # テーマ本体。ここがこのリポジトリの主役
├── vivliostyle.config.js  # example をビルドするための設定
├── example/
│   └── default.md         # 見た目を確認するためのサンプル原稿
├── package.json
└── .github/workflows/     # CI
```

## 開発の進め方

### コマンド

```bash
yarn install            # 依存パッケージのインストール
yarn preview            # ブラウザで example をプレビューする（変更を監視する）
yarn pdf                # example から dist/book.pdf を作る
yarn open               # 作成した PDF を開く
yarn check              # biome による整形・リントのチェック
yarn check-write        # biome で自動修正する
yarn validate           # Vivliostyle のテーマパッケージとして正しいか検証する
```

### theme.css を編集するときの方針

- **素の CSS プロパティを再宣言せず、`--vs-*` 変数を設定する**。
  theme-base v3 の規則は論理プロパティで書かれているため、物理的な `margin` / `padding`
  ショートハンドでは確実に打ち消せません。
- 変数の一覧は `node_modules/@vivliostyle/theme-base/dist/css-variables.json` にあります。
  各モジュールの説明は [theme-base の src](https://github.com/vivliostyle/themes/tree/main/packages/%40vivliostyle/theme-base/src) にあります。
- `@vivliostyle/theme-base` / `@vivliostyle/theme-techbook` の
  バージョンは `package.json` で**固定**します（`^` や `>=` を使わない）。
  テーマの見た目が意図せず変わるのを防ぐためです。
- 長さの値には単位が必要です。`0` は `<number>` なので、長さが要求される場所では無効になります。

### 見た目を確認する

このリポジトリの変更はほぼすべて見た目に出ます。**必ず PDF を作って確認してください。**

```bash
yarn pdf && yarn open
```

変更前後で比較したいときは、変更前の PDF を退避してから作り直して見比べます。
PR を作ると CI が「このPRの PDF」と「変更前（base ブランチ）の PDF」の両方を
アーティファクトとして添付するので、そちらでも比較できます。

## コミットと PR

- **機能や目的ごとにコミットを分ける**。1つのコミットに複数の目的を混ぜない。
- コミットメッセージは日本語。1行目は要約、空行を挟んで本文に「何を」「なぜ」を書く。
- 変更は直接 `main` に push せず、ブランチを切って PR で入れる。
- ブランチ名は `feature/...` や `fix/...` の形式にする。
- PR の本文には、変更内容に加えて**見た目にどう影響するか**を書く。

## CI

| ワークフロー | 実行タイミング | 内容 |
| :--- | :--- | :--- |
| `Build and Attach PDF on Pull-Request` | PR | example から PDF を作り、変更前の PDF と一緒に PR へ添付する |
| `Check` | `main` への push / PR | `yarn check`、`yarn validate`、`npm pack --dry-run` |
| `Check npm packages by AikidoSec Safe Chain` | 依存関係を変える PR | 悪意ある npm パッケージが混ざっていないか検査する |
| `Publish to npm and Release` | タグ push / 手動実行 | npm への公開と GitHub Release の作成 |

GitHub Actions はサプライチェーン対策のためコミット SHA で固定し、
`# vX.Y.Z` のコメントを添えます。更新は Dependabot に任せます。

`.yarnrc.yml` の `npmMinimalAgeGate` は `3d` です。
公開から 3 日経っていない npm パッケージはインストールされません。

## リリース手順

1. `package.json` の `version` を上げる PR を作ってマージする。
   - テーマの見た目が変わる変更はマイナーバージョンを上げる。
   - `@vivliostyle/cli` の必要バージョンが上がるなど、利用側の対応が必要な変更もマイナーを上げる。
2. `main` に対して `Publish to npm and Release` ワークフローを手動実行し、
   `package.json` と同じバージョンを入力する。
   （または同じバージョンのタグを push する）
3. ワークフローがタグの作成、npm への公開、GitHub Release の作成まで行う。

npm への公開は OIDC による Trusted Publishing を使うため、トークンの設定は不要です。

## 関連リポジトリ

- [vivliostyle-theme-noto-sans-jp](https://github.com/mitsuharu/vivliostyle-theme-noto-sans-jp) — フォント設定用テーマ。併用する
- [iosdc-pamphlet-template](https://github.com/mitsuharu/iosdc-pamphlet-template) — このテーマを使う原稿のテンプレート
