import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../components/context/Theme/ThemeContext'
import { LanguageProvider } from '../components/context/Language/LanguageContext'

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <ThemeProvider>
      <LanguageProvider>
      <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  )
}
