import './globals.scss'
import { Noto_Sans_JP } from '@next/font/google'

const notoSans = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', // <-- here
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={notoSans.className}>{children}</body>
    </html>
  )
}
