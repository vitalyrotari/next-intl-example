import {IntlProvider} from 'react-intl'
import {useRouter} from 'next/router'
import * as locales from '../content/locale'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const {locale, defaultLocale, pathname} = useRouter()
  const localeMessages = locales?.[locale] ?? {};

  const messages = {
    ...localeMessages.global,
    ...(localeMessages?.[pathname] ?? {}),
  };

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default MyApp
