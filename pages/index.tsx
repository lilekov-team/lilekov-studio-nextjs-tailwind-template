import type { NextPage } from 'next'
import { useLanguage } from '../components/LanguageProvider/language-provider'
import { LanguageTypes } from '../components/LanguageProvider/languages'
import { useTheme } from '../components/ThemeProvider/themeProvider'

const Home: NextPage = () => {

  const { theme, toggleTheme } = useTheme()
  const { currentLanguage, changeLanguage, language } = useLanguage()


  const toggleLanguage = () => {
    const newLang = currentLanguage === LanguageTypes.EN ? LanguageTypes.RU : LanguageTypes.EN



    changeLanguage(newLang)
  }

  return (
    <div >
      <button className='bg-main-red p4 h10 text-main-blue' onClick={toggleTheme}>
        {'TOGGLE THEME' + 'current Theme: ' + theme}
      </button>
      <button className='bg-main-red p4 h10 text-main-blue' onClick={toggleLanguage}>
        {language.onClick}
      </button>
    </div>
  )
}

export default Home
