import React, { useState, useMemo } from 'react'
import { NAV_HEIGHT, translations } from './config/siteContent'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import DentalServicesSection from './components/sections/DentalServicesSection'
import MedicalServicesSection from './components/sections/MedicalServicesSection'
import GeneralServicesSection from './components/sections/GeneralServicesSection'
import OffersBanner from './components/sections/OffersBanner'
import ContactSection from './components/sections/ContactSection'

const App = () => {
  const [lang, setLang] = useState('ar')

  const t = useMemo(() => translations[lang], [lang])

  const handleToggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'))
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div
        className="min-h-screen font-sans"
        dir={t.dir}
        lang={t.locale}
      >
        <Header lang={lang} t={t} onToggleLanguage={handleToggleLanguage} />

        <main className="pt-[132px]">
          <HeroSection t={t} lang={lang} />
          <DentalServicesSection t={t} lang={lang} />
          <MedicalServicesSection t={t} lang={lang} />
          <GeneralServicesSection t={t} lang={lang} />
          <OffersBanner t={t} lang={lang} />
          <ContactSection t={t} lang={lang} />
        </main>

        <Footer t={t} lang={lang} />
      </div>
    </div>
  )
}

export default App