import Link from 'next/link'
import {useIntl} from 'react-intl'
import {memo} from 'react'
import {useRouter} from 'next/router'
import styles from './Menu.module.css'

export const Menu = memo(() => {
  const {formatMessage} = useIntl()
  const {locale, defaultLocale, pathname} = useRouter()
  const items = [
    {href: '/', label: 'menu.home'},
    {href: '/about', label: 'menu.about'},
  ];

  return (
    <ul className={styles.root}>
      {items.map(({href, label}) => (
        <li
          className={[
            styles.item, 
            href === pathname ? styles.active : ''
          ].join(' ')}
          key={`lang:${label}`}
        >
          <Link href={href} locale={locale !== defaultLocale && locale}>
            {formatMessage({ id: label })}
          </Link>
        </li>
      ))}
    </ul>
  );
});