# Xvatar 🎨 ![](https://xvatar.vercel.app/api/avatar/anish?size=20) ![](https://xvatar.vercel.app/api/avatar/hahaha?size=20) ![](https://xvatar.vercel.app/api/avatar/awesome?size=20) ![](https://xvatar.vercel.app/api/avatar/nextjs?size=20)

Generate stunning gradient avatars with unique patterns for your applications! ✨

## Features 🚀

- 🌈 Unique gradient combinations based on username
- 🎭 Multiple color schemes (Complementary, Triad, Analogous)
- 📐 Adjustable roundness (0-120px)
- 📏 Custom size support (20-240px)
- 💫 Both radial and linear gradients
- 🎯 SVG format support with text/initials
- 🖼️ PNG format support
- 🔄 Consistent results for same usernames

## Usage 📖

### Basic Usage 🌱

```
https://xvatar.vercel.app/api/avatar/username
```

![Basic Avatar](https://xvatar.vercel.app/api/avatar/demo)

### SVG with Initials ✍️

Add `.svg` extension and use the `text` parameter:

```
https://xvatar.vercel.app/api/avatar/username.svg?text=XA
```

![Avatar with Initials](https://xvatar.vercel.app/api/avatar/anotherDemo.svg?text=XA)

### Custom Shape 🔷

Adjust the roundness (0-120):

```
https://xvatar.vercel.app/api/avatar/username?rounded=20
```

![Square Avatar](https://xvatar.vercel.app/api/avatar/damndemo?rounded=20)

### Custom Size 📐

Change dimensions (20-240px):

```
https://xvatar.vercel.app/api/avatar/username?size=120
```

![Large Avatar](https://xvatar.vercel.app/api/avatar/huge?size=120)

## API Parameters 🛠️

| Parameter | Description             | Default | Range     |
| --------- | ----------------------- | ------- | --------- |
| `rounded` | Corner radius in pixels | 120     | 0-120     |
| `size`    | Image dimensions        | 120     | 20-240    |
| `text`    | Initials (SVG only)     | -       | 1-4 chars |

## Try It Out 🎮

Visit [xvatar.vercel.app](https://xvatar.vercel.app) to try the generator live!

## Built With 💪

- Next.js 14
- TypeScript
- Tailwind CSS
- shadcn/ui

Made by [Anish Biswas](https://anish7.me) with ❤️
