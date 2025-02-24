import localFont from 'next/font/local'

import './globals.css'
import Menu from './ui/menu'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="flex-grow bg-linear-to-t from-[rgb(167,218,59)] from-51% via-[rgb(205,235,86)] via-53% to-[rgb(102,220,231)] to-70%]">
            <div className="max-w-[2100px] mx-auto">
              <div className="sticky">
                <Menu />
                <div>{children}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  )
}
