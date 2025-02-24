'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function Menu() {
  const pathName = usePathname()
  return (
    <>
      <div className="absolute top-2 left-2 z-10">
        <div className="flex gap-2 flex-row rounded-full bg-slate-50/70 py-8 px-10">
          <Link
            children={<>Issue</>}
            href={'/issue'}
            className={clsx(
              {
                'rounded-full bg-slate-600 w-[100] p-2 text-white font-extrabold text-xs border-2 text-center':
                  pathName.includes('issue'),
              },
              {
                'rounded-full bg-slate-600 w-[100] p-2 text-white font-extrabold text-xs border-2 text-center':
                  pathName === '/',
              },
              {
                'rounded-full bg-white w-[100] p-2 text-black hover:bg-slate-200 hover:text-black font-extrabold text-xs border-2  text-center':
                  pathName !== '/issue' && pathName !== '/',
              }
            )}
          ></Link>
          <Link
            children={<>Explanation</>}
            href={'/explanation'}
            className={clsx(
              {
                'rounded-full bg-slate-600 w-[100] p-2 text-white font-extrabold text-xs border-2 text-center':
                  pathName.includes('explanation'),
              },
              {
                'rounded-full bg-white w-[100] p-2 text-black hover:bg-slate-200 hover:text-black font-extrabold text-xs border-2  text-center':
                  pathName !== '/explanation',
              }
            )}
          ></Link>
          <Link
            children={<>Fix</>}
            href={'/fix'}
            className={clsx(
              {
                'rounded-full bg-slate-600 w-[100] p-2 text-white font-extrabold text-xs border-2 text-center':
                  pathName.includes('fix'),
              },
              {
                'rounded-full bg-white w-[100] p-2 text-black hover:bg-slate-200 hover:text-black font-extrabold text-xs border-2  text-center':
                  pathName !== '/fix',
              }
            )}
          ></Link>
        </div>
      </div>
    </>
  )
}
