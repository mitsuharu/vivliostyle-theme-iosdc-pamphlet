module.exports = {
  language: 'ja',
  theme: [
    'node_modules/@vivliostyle/theme-base',
    'node_modules/@vivliostyle/theme-techbook',
    'node_modules/@mitsuharu/vivliostyle-theme-noto-sans-jp',
    '.',
  ],
  entry: ['example/default.md'],
  workspaceDir: '.vivliostyle',
  output: ['output/book.pdf'],
}
