import React from 'react'
import logo from '../../assets/logo_transparent.png'
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa'

const Footer = ({ t, lang }) => {
  const isAr = lang === 'ar'

  return (
    <footer className="bg-slate-900 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        {/* Left: contact details */}
        <div className="w-full text-start lg:w-1/3">
          <h3 className="mb-4 text-sm font-semibold">
            {isAr ? 'نحن قريبون منك' : 'We are close to you'}
          </h3>
          <ul className="space-y-2 text-xs leading-relaxed">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="h-3 w-3" />
              <span>
                {isAr
                  ? 'شارع النسيم، النسيم، جدة 2593 23323'
                  : 'Al Naseem Street, Al Naseem, Jeddah 2593 23323'}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="h-3 w-3" />
              <a href={`tel:${t.nav.phone}`} className="hover:underline">
                {t.nav.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="h-3 w-3" />
              <a
                href="mailto:info@ifapolyclinic.com"
                className="hover:underline"
              >
                info@ifapolyclinic.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaClock className="h-3 w-3" />
              <span>
                {isAr ? 'السبت وحتى الخميس 10:00 - 02:00' : 'Sat to Thu 10:00 - 02:00'}
              </span>
            </li>
          </ul>
        </div>

        {/* Middle: quick links - same items as nav */}
        <div className="w-full text-center text-xs lg:w-1/3">
          <h3 className="mb-4 text-sm font-semibold">
            {isAr ? 'وصول سريع' : 'Quick access'}
          </h3>
          <ul className="space-y-1 text-[14px] text-base/7">
            <li>
              <a href="#hero" className="hover:underline">
                {isAr ? 'الرئيسية' : 'Home'}
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                {isAr ? 'من نحن' : 'About us'}
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                {t.nav.services}
              </a>
            </li>
            <li>
              <a href="#doctors" className="hover:underline">
                {isAr ? 'أطباؤنا' : 'Our doctors'}
              </a>
            </li>
            <li>
              <a href="#offers" className="hover:underline">
                {isAr ? 'عروضنا' : 'Offers'}
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:underline">
                {isAr ? 'أخبارنا' : 'News'}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                {t.nav.contact}
              </a>
            </li>
          </ul>
        </div>

        {/* Right: logo and name */}
        <div className="w-full text-center lg:w-1/3 lg:text-center">
          <div className="inline-flex flex-col items-center gap-2 lg:items-center">
            <img src={logo} alt="Affa Medical logo" className="max-w-[300px] object-cover aspect-video" />
            <div className="text-sm font-semibold text-center">
              {isAr ? 'مجمع إفاء الطبي' : 'Affa Medical Complex'}
            </div>
            <div className="text-[11px] tracking-wide text-sky-100 text-center">
              {isAr ? 'أسنان · داخلية · أطفال' : 'Dental · Internal Medicine · Pediatrics'}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

