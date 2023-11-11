'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
// import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Logo from '@/data/logo.png'
import DarkModeLogo from '@/data/logo-dark.png'

const Header = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              {theme === 'dark' || resolvedTheme === 'dark' ? (
                <Image src={DarkModeLogo} alt="Logo" width={40} height={40} />
              ) : (
                <Image src={Logo} alt="Logo" width={40} height={40} />
              )}
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden sm:block font-medium text-gray-900 dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
        {/* <LanguageSwitcher /> */}
        {/* <select
          onChange={(e) => {
            const value = e.target.value
            const correctPathname = pathname.replace(`/${lang}`, `/${value}`)
            router.push(correctPathname)
          }}
          defaultValue={lang}
        >
          {i18n.locales
            .filter((x) => x !== 'default')
            .map((res) => (
              <option key={res} value={res}>
                {res}
              </option>
            ))}
        </select> */}
      </div>
    </header>
  )
}

export default Header
