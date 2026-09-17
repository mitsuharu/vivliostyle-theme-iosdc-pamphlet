module.exports = {
  language: 'ja',
  theme: [
    '.',
    // ビルド環境に日本語フォントがなくても文字化けしないように、
    // example のビルドではフォント設定用のテーマを併用する。
    // このテーマ自体の依存ではないので devDependencies に入れている。
    '@mitsuharu/vivliostyle-theme-noto-sans-jp',
  ],
  entry: ['example/default.md'],
  workspaceDir: '.vivliostyle',
  output: ['dist/book.pdf'],
}
