# OpenAI

OpenAI API を試してみた（UI はチャット風）

[React.js](https://ja.reactjs.org/) + [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/ja/) + [Tailwind CSS](https://tailwindcss.com/)

## API

[OpenAI API](https://openai.com/api/)

## 開発環境での 環境変数への API SECRET KEY 設定方法

1. OpenAI のアカウントを作成してログイン

2. [API keys](https://platform.openai.com/account/api-keys)で API シークレットキーを作成

3. `.env.local`ファイルをプロジェクトルートに追加し、以下のように設定

```
NEXT_PUBLIC_OPENAI_API_KEY='xxxxx'
```

## Vercel デプロイ時の 環境変数への API SECRET KEY を設定方法

https://www.snorerelax.com/posts/tech-vercel-environment/

## Mock References

[Chat](https://tailwindcomponents.com/component/chat)

[tailwind css 製 loading animation samples](https://zenn.dev/tacrew/articles/ddf073e841165f)

## References

https://zenn.dev/mast1ff/articles/5b48a87242f9f0

https://reffect.co.jp/react/next-js-13-app#i

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
