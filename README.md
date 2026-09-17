# @mitsuharu/vivliostyle-theme-iosdc-pamphlet

iOSDC Japan に投稿するパンフレット記事の Vivliostyle のテーマです。作者が iOSDC Japan 2023 および 2024 で投稿したものを元に作成しました。

This is a Vivliostyle theme for techbook of iOSDC Japan pamphlet.

## Required

- @vivliostyle/cli >= 11.3.1

Vivliostyle Themes v3（`@vivliostyle/theme-base` 3.x）系のテーマです。
v2 系の CLI（`@vivliostyle/cli` 10 以下）では利用できません。

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
  language: 'ja',
  theme: ['.'],
  entry: [
      'example/default.md',
      // and more...
  ],
}
```

Run `vivliostyle theme validate` before publishing your package.

```bash
npm run validate
# or
yarn validate
```
