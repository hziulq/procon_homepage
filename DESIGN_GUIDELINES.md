# Procon Site - Design Guidelines

本ドキュメントは、本プロジェクト（競技プログラミング部・サークル向けWebサイト）のフロントエンドにおけるデザインの方向性と、具体的なスタイリングのルールを定めたものです。
今後の開発や、他のエージェント・開発者がUIを拡張・改修する際は、必ずこのガイドラインに従って実装を行い、サイト全体の統一感（プレミアム感とモダンなサイバーテイスト）を維持してください。

## 1. コアコンセプト: グラスモーフィズム (Glassmorphism)
サイト全体を通じて、背景画像の上に「すりガラス調の半透明パネル」を配置するデザインを採用しています。
フラットな単色ベタ塗り（例: `bg-black` や `bg-white`）は極力避け、以下のTailwind CSSクラスを組み合わせて透明感と奥行きを表現してください。

- **基本パネル**: `backdrop-blur-md bg-slate-900/40 border border-white/10`
- **浮遊感（ドロップシャドウ）**: `shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]`
- **角丸**: `rounded-2xl` または `rounded-3xl`（大きめの角丸でモダンさを強調）

## 2. カラーパレット (Color Palette)
全体は「ダークモード寄りのSlate（スレート）」を基調とし、アクセントカラーとして「Blue / Indigo」を使用します。
過度に派手な色や、強い原色のグラデーションは避けてください。

- **ベーステキスト**: `text-slate-100` または `text-slate-200`
- **サブテキスト**: `text-slate-400`
- **アクセントカラー（メイン）**: `text-blue-400`, `bg-blue-500`
- **グラデーション（見出し用）**: `bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-400`
- **ハイライト・バッジ**: `bg-blue-500/20 text-blue-300`

## 3. タイポグラフィ (Typography)
- フォントは `next/font/google` を用いた `Geist` を基本とします。
- ページやセクションの主要な見出し（`<h1>`, `<h2>`）には、太めのウェイト（`font-extrabold`）とトラッキング（`tracking-tight`）を適用し、前述の**グラデーションテキスト**を組み合わせてリッチに表現します。
- 必要に応じてアクセントとなるアイコン（例: カレンダー絵文字や `▸` 記号）を添えることで、視認性を高めます。

## 4. アニメーションとインタラクション (Micro-animations)
ユーザーの操作（ホバーなど）に対して、なめらかで心地よい反応（マイクロアニメーション）を返すことを重視します。
`transition-all duration-300` 等を用いて、以下のエフェクトを適宜実装してください。

- **Glow（発光）エフェクト**: カードやボタンにホバーした際、ボーダーやシャドウがブルーに光る演出。
  - 例: `hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:border-blue-500/30`
- **Translate（移動）とScale（拡大）**:
  - カードへのホバー時: `hover:-translate-y-1`
  - 画像へのホバー時: `hover:scale-105` や `hover:scale-110` (durationは長めに `duration-700` など)
- **テキストスライド**: リストアイテムにホバーした際、矢印アイコンが現れ、テキストが少し右へスライドする演出（`group-hover:translate-x-1` など）。

## 5. UIコンポーネント実装例

### カードコンポーネント (例: NewsItem)
```tsx
<div className="flex flex-col bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-white/5 shadow-inner transition-all duration-300 group-hover:bg-slate-800/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:-translate-y-1 group-hover:border-blue-500/30">
    {/* Content */}
</div>
```

### 見出し (例: Page Header)
```tsx
<h2 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300 border-b border-white/10 pb-4">
    見出しテキスト
</h2>
```

### ナビゲーションメニュー (Glass Pill)
```tsx
<nav className="backdrop-blur-md bg-slate-900/40 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] rounded-2xl">
    {/* Nav Items */}
</nav>
```

---
**※注意**
新しいページを作成する際は、親の `layout.tsx` がすでに `<main>` タグを含むグラスモーフィズムコンテナを提供しているか確認し、二重に背景スタイルを適用しないよう注意してください。
