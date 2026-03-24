import React, { useState } from 'react';
import { NAV_HEIGHT } from '../../config/siteContent';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaSnapchat,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Header = ({ lang, t, onToggleLanguage }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const isAr = lang === 'ar'

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 bg-white shadow-md"
      style={{ minHeight: NAV_HEIGHT }}
    >
      {/* White utility bar */}
      <div className=" bg-white/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-2 py-1 text-[11px] text-slate-600 sm:px-6 lg:px-8">
          <div className="hidden items-center gap-2 md:flex">
              <a href="https://wa.me/920017765?text=السلام عليكم ورحمة الله وبركاته، أنا أريد حجز موعد لخدمة طبية" target="_blank">
                <FaWhatsapp className='w-4 h-4 text-teal-600 mx-2' />
              </a>
              <a href="mailto:info@ifapolyclinic.com" target="_blank">
                <FaEnvelope className='w-4 h-4 text-teal-600 mx-2' />
              </a>
              <a href="https://www.snapchat.com/add/ifa_polyclinic" target="_blank">
                <FaSnapchat className='w-4 h-4 text-teal-600 mx-2' />
              </a>
              <a href="https://www.instagram.com/ifa_polyclinic?igsh=dm1zbHVjOHloOGZk" target="_blank">
                <FaInstagram className='w-4 h-4 text-teal-600 mx-2' />
              </a>
              <a href="https://www.tiktok.com/@ifa_polyclinic?_r=1&_t=ZS-94noJE0BAgK" target="_blank">
                <FaTiktok className='w-4 h-4 text-teal-600 mx-2' />
              </a>
              <a href="https://x.com/ifa_polyclinic?s=11&t=3feaLhvdsJkGP19CcYD41Q" target="_blank">
                <FaTwitter className='w-4 h-4 text-teal-600 mx-2' />
              </a>
          </div>
          
          {/* Social + language (top) */}
          <div className="flex items-center gap-3">
            <img src="https://res.cloudinary.com/dblwpkohn/image/upload/v1773956032/logo_ruikl6.png" alt="logo" className="h-25" />
          </div>

          {/* Phone / location / book button */}
          <div className="hidden items-center gap-3 text-[11px] md:flex">
            <div className="hidden items-center gap-1 text-teal-600 lg:flex">
              <FaPhone className="w-4 h-4 text-teal-600" />
              <a href={`tel:${t.nav.phone}`} className="font-semibold">{t.nav.phone}</a>
            </div>
            <div className="hidden items-center gap-1 text-slate-600 lg:flex">
              <FaMapMarkerAlt className="w-4 h-4 text-teal-600" />
              <a href='https://maps.app.goo.gl/17N1oeSNyEFBCSfm8?g_st=iw' className='text-teal-600'>{t.nav.cityLocation}</a> 
            </div>
            <button
              type="button"
              className="rounded-lg border border-teal-400 bg-white px-4 py-1.5 text-[11px] font-semibold text-teal-600 shadow-sm transition hover:bg-teal-50"
              onClick={() => window.location.href = 'https://wa.me/920017765?text=السلام عليكم ورحمة الله وبركاته، أنا أريد حجز موعد لخدمة طبية'}
            >
              {t.nav.bookNowTop}
            </button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 md:hidden"
            aria-label={isAr ? 'فتح القائمة الجانبية' : 'Open sidebar'}
            onClick={() => setIsSidebarOpen(true)}
          >
            <FaBars className="h-4 w-4" />
          </button>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          <aside
            className={`absolute top-0 h-full w-[84%] max-w-xs bg-white p-4 shadow-xl ${isAr ? 'right-0' : 'left-0'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <img src="https://res.cloudinary.com/dblwpkohn/image/upload/v1773956032/logo_ruikl6.png" alt="logo" className="h-25" />
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-700"
                aria-label={isAr ? 'إغلاق القائمة الجانبية' : 'Close sidebar'}
                onClick={() => setIsSidebarOpen(false)}
              >
                <FaTimes className="h-4 w-4" />
              </button>
            </div>

            <div className="mb-4 flex items-center justify-center gap-2">
              <a href="https://wa.me/920017765?text=السلام عليكم ورحمة الله وبركاته، أنا أريد حجز موعد لخدمة طبية" target="_blank" rel="noreferrer">
                <FaWhatsapp className="h-5 w-5 text-teal-600" />
              </a>
              <a href="mailto:info@ifapolyclinic.com" target="_blank" rel="noreferrer">
                <FaEnvelope className="h-5 w-5 text-teal-600" />
              </a>
              <a href="https://www.snapchat.com/add/ifa_polyclinic" target="_blank" rel="noreferrer">
                <FaSnapchat className="h-5 w-5 text-teal-600" />
              </a>
              <a href="https://www.instagram.com/ifa_polyclinic?igsh=dm1zbHVjOHloOGZk" target="_blank" rel="noreferrer">
                <FaInstagram className="h-5 w-5 text-teal-600" />
              </a>
              <a href="https://www.tiktok.com/@ifa_polyclinic?_r=1&_t=ZS-94noJE0BAgK" target="_blank" rel="noreferrer">
                <FaTiktok className="h-5 w-5 text-teal-600" />
              </a>
              <a href="https://x.com/ifa_polyclinic?s=11&t=3feaLhvdsJkGP19CcYD41Q" target="_blank" rel="noreferrer">
                <FaTwitter className="h-5 w-5 text-teal-600" />
              </a>
            </div>

            <div className="mb-3 flex items-center gap-2 text-teal-600">
              <FaPhone className="h-4 w-4" />
              <a href={`tel:${t.nav.phone}`} className="font-semibold">{t.nav.phone}</a>
            </div>
            <div className="mb-4 flex items-center gap-2 text-slate-600">
              <FaMapMarkerAlt className="h-4 w-4 text-teal-600" />
              <a href="https://maps.app.goo.gl/17N1oeSNyEFBCSfm8?g_st=iw" className="text-teal-600">{t.nav.cityLocation}</a>
            </div>

            <button
              type="button"
              className="mb-2 w-full rounded-lg border border-teal-400 bg-white px-4 py-2 text-[12px] font-semibold text-teal-600 shadow-sm transition hover:bg-teal-50"
              onClick={() => {
                window.location.href = 'https://wa.me/920017765?text=السلام عليكم ورحمة الله وبركاته، أنا أريد حجز موعد لخدمة طبية'
                setIsSidebarOpen(false)
              }}
            >
              {t.nav.bookNowTop}
            </button>
            <button
              type="button"
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-[12px] font-semibold text-slate-700 transition hover:bg-slate-50"
              onClick={() => {
                onToggleLanguage?.()
                setIsSidebarOpen(false)
              }}
            >
              {t.nav.language}
            </button>
          </aside>
        </div>
      )}
    </header>
  )
}

export default Header;