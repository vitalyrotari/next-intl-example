
import dynamic from 'next/dynamic'
import Head from 'next/head'
import {Fragment} from 'react'
import {useRouter} from 'next/router'
import {useIntl} from 'react-intl'
import {LocaleSwitcher} from '../../components/Locales'
import {Menu} from '../../components/Menu'
import styles from '../../styles/Home.module.css'

const content = {
  en: dynamic(() => import('./_en')),
  de: dynamic(() => import('./_de')),
  fr: dynamic(() => import('./_fr')),
}

export default function About() {
  const {locale} = useRouter()
  const {formatMessage} = useIntl()
  const title = formatMessage({ id: 'title' })

  const ContentLocalized = content[locale] ?? Fragment;

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <LocaleSwitcher/>
        </section>

        <h1 className={styles.title}>
          {title}
        </h1>

        <Menu/>

        <section>
          <ContentLocalized/>
        </section>
      </main>
    </div>
  )
}