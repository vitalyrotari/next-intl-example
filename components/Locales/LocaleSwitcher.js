import Link from 'next/link'
import { memo } from 'react'
import { useRouter } from 'next/router'
import styles from './LocaleSwitcher.module.css'

export const LocaleSwitcher = memo(() => {
  const { locales, locale: currentLocale, defaultLocale, pathname } = useRouter()

  return (
    <ul className={styles.root}>
      {locales.map((locale) => (
        <li
          className={[
            styles.item, 
            locale === currentLocale ? styles.active : ''
          ].join(' ')}
          key={`lang:${locale}`}
        >
          <Link href={pathname} locale={locale !== defaultLocale && locale}>
            {locale.toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
  )
})
