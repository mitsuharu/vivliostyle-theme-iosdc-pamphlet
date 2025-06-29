# @mitsuharu/vivliostyle-theme-iosdc-pamphlet

iOSDC Japan に投稿するパンフレット記事の Vivliostyle のテーマです。作者が iOSDC Japan 2023 および 2024 で投稿したものを元に作成しました。

This is a Vivliostyle theme for techbook of iOSDC Japan pamphlet.

## Required

- @vivliostyle/cli >= 9.3.2

## Use

In `vivliostyle.config.js`:

```js
module.exports = {
    theme: [
    '@mitsuharu/vivliostyle-theme-iosdc-pamphlet',
    '@mitsuharu/vivliostyle-theme-noto-sans-jp', // use Noto Sans JP font (optional)
  ],
};
```

## Develop

### Files

```text
vivliostyle-theme-iosdc-pamphlet
├── LICENSE
├── README.md
├── example
│   ├── assets                            // auto generated
│   │   └── Logo (Mark + Type).png        // auto generated
│   └── default.md                        // 🖋
├── package.json
├── theme.css                             // 🖋
└── vivliostyle.config.js
```

**example**: Contain sample manuscripts using your theme.

### Commands

Run `vivliostyle preview` to preview your `theme.css`.

To watch file changes, use `preview` script.

```bash
npm run preview
# or
yarn preview
```

You can specify your CSS file and manuscript file for preview in vivliostyle.config.js:

```js
module.exports = {
  language: 'en',
  theme: ['node_modules/@vivliostyle/theme-base', '.'],
  entry: [
      'example/default.md',
      // and more...
  ],
}
```

Run `vivliostyle-theme-scripts validate` before publishing your package.

```bash
npm run validate
# or
yarn validate
```
