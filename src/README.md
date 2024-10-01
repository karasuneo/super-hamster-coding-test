# `src`

`src` 配下は次のような構成になっています。

```
.
├── components
│   └── XXX
│       ├── const
│       │   └── index.ts
│       ├── index.tsx
│       └── styles.module.scss
├── const
├── features
│   └── XXX
│       ├── components
│       │   └── XXX
│       │       ├── index.tsx
│       │       └── styles.module.scss
│       └── hooks
├── hooks
├── layouts
├── pages
├── stores
├── styles
├── types
└── utils
```

### `components`

- 複数`features`を跨いで使われる可能性があるコンポーネントを管理

- `const`

  - そこコンポーネント固有のフォントサイズなどの定数マップが入るディレクトリ

### `const`

- 複数`features`を跨いで使われる可能性がある定数を管理

### `hooks`

- 複数`features`を跨いで使われる可能性があるカスタムフックを管理

### `layouts`

- 複数`features`を跨いで使われる可能性があるレイアウトを管理

### `pages`

- `features`コンポーネントを組み合わせた画面単位でのコンポーネントを管理

### `stores`

- グローバルステイトを管理

### `styles`

- グローバルスタイルを管理

### `types`

- 複数`features`を跨いで使われる可能性がある型を管理

### `utils`

- ユーティリティ関数を管理
