import React from 'react';
import { NAV_HEIGHT } from '../../config/siteContent';
import logo from '../../assets/logo.png';
import { FaSearch, FaPhone, FaMapMarkerAlt, FaGlobe, FaWhatsapp, FaEnvelope, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Header = ({ lang, t, onToggleLanguage }) => {
  return (
    <header
      className="fixed inset-x-0 top-0 z-40 bg-white shadow-md"
      style={{ height: NAV_HEIGHT }}
    >
      {/* White utility bar */}
      <div className="border-b border-slate-200/70 bg-white/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-2 py-1 text-[11px] text-slate-600 sm:px-6 lg:px-8">
          {/* Social + language (top) */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-16" />
          </div>

          {/* Center search */}
          <div className="hidden flex-1 items-center justify-center sm:flex">
            <div className="flex w-full max-w-md items-center rounded-lg bg-slate-100 px-4 py-1.5 text-[11px] text-slate-500">

              <input
                type="text"
                placeholder={t.nav.searchTopPlaceholder}
                className="px-2 py-1 w-full bg-transparent text-[14px] text-slate-600 outline-none placeholder:text-slate-400"
              />
              <FaSearch className="w-4 h-4 text-slate-300" />
            </div>
          </div>

          {/* Phone / location / book button */}
          <div className="flex items-center gap-3 text-[11px]">
            <div className="hidden items-center gap-1 text-fuchsia-600 sm:flex">
              <FaPhone className="w-4 h-4 text-fuchsia-600" />
              <a href={`tel:${t.nav.phone}`} className="font-semibold">{t.nav.phone}</a>
            </div>
            <div className="hidden items-center gap-1 text-slate-600 sm:flex">
              <FaMapMarkerAlt className="w-4 h-4 text-fuchsia-600" />
              <span className='text-fuchsia-600'>{t.nav.cityLocation}</span>
            </div>
            <button
              type="button"
              className="rounded-lg border border-fuchsia-400 bg-white px-4 py-1.5 text-[11px] font-semibold text-fuchsia-600 shadow-sm transition hover:bg-fuchsia-50"
            >
              {t.nav.bookNowTop}
            </button>
          </div>
        </div>
      </div>

      {/* Teal navigation bar */}
      <div className="bg-teal-700">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 text-xs font-medium text-teal-50 sm:px-6 lg:px-8">
          {/* Links */}
          <div className="flex justify-center">
            <ul className="flex flex-wrap items-center gap-4 sm:gap-6 mx-3">
              {[
                { href: '#hero', label: t.nav.home, active: true },
                { href: '#about', label: lang === 'ar' ? 'من نحن' : 'About us' },
                { href: '#services', label: t.nav.services },
                { href: '#doctors', label: lang === 'ar' ? 'أطباؤنا' : 'Our doctors' },
                { href: '#offers', label: lang === 'ar' ? 'عروضنا' : 'Offers' },
                { href: '#blog', label: lang === 'ar' ? 'أخبارنا' : 'News' },
                { href: '#contact', label: t.nav.contact },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`relative p-1 text-[14px] transition hover:text-white ${
                      item.active
                        ? 'font-semibold text-white after:absolute after:bottom-[-3px] after:start-0 after:h-[2px] after:w-full after:bg-white'
                        : 'text-gray-400'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

          {/* Compact language toggle on the right */}
          <button
            type="button"
            onClick={onToggleLanguage}
            className="inline-flex cursor-pointer p-1 rounded-sm mx-4 items-center justify-center text-[11px] font-semibold text-white/90 transition hover:bg-white/10"
          >
            {lang === 'ar' ? 'EN' : 'AR'}

            <FaGlobe className='w-4 h-4 mx-2' />
          </button>
          </div>

          <div className="flex items-center gap-2">
            <a href="#">
            <FaWhatsapp className='w-4 h-4 text-slate-300 mx-2' />
            </a>
            <a href="mailto:info@ifapolyclinic.com">
            <FaEnvelope className='w-4 h-4 text-slate-300 mx-2' />
            </a>
            <a href="#">
            <FaLinkedin className='w-4 h-4 text-slate-300 mx-2' />
            </a>
            <a href="#">
            <FaInstagram className='w-4 h-4 text-slate-300 mx-2' />
            </a>
            <a href="#">
            <FaTwitter className='w-4 h-4 text-slate-300 mx-2' />
            </a>
            <a href="#">
            <FaFacebook className='w-4 h-4 text-slate-300 mx-2' />
            </a>
          </div>

        </nav>
      </div>
    </header>
  )
}

export default Header

