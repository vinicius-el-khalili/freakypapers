import type { Metadata } from 'next'
import '@/sass/base/globals.scss'
import style from "@/sass/layout.module.scss"
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body>
        {children}
        <footer className={style.footer}>
          <Link href={"https://github.com/vinicius-el-khalili/freakypapers"} target='_blank'>
            <div>Github<FaGithub/></div>
          </Link>
        </footer>
      </body>
    </html>
  )
}
