import React from 'react';
import { NAV_HEIGHT } from '../../config/siteContent';
import { FaPhone, FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaInstagram, FaTwitter, FaTiktok, FaSnapchat } from 'react-icons/fa';

const Header = ({ lang, t, onToggleLanguage }) => {
  return (
    <header
      className="fixed inset-x-0 top-0 z-40 bg-white shadow-md"
    >
      {/* White utility bar */}
      <div className="border-b border-slate-200/70 bg-white/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-2 py-1 text-[11px] text-slate-600 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
              <a href="https://wa.me/966920017765?text=السلام عليكم ورحمة الله وبركاته، أنا أريد حجز موعد لخدمة طبية" target="_blank">
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
          <div className="flex items-center gap-3 text-[11px]">
            <div className="hidden items-center gap-1 text-teal-600 sm:flex">
              <FaPhone className="w-4 h-4 text-teal-600" />
              <a href={`tel:${t.nav.phone}`} className="font-semibold">{t.nav.phone}</a>
            </div>
            <div className="hidden items-center gap-1 text-slate-600 sm:flex">
              <FaMapMarkerAlt className="w-4 h-4 text-teal-600" />
              <a href='https://maps.app.goo.gl/17N1oeSNyEFBCSfm8?g_st=iw' className='text-teal-600'>{t.nav.cityLocation}</a> 
            </div>
            <button
              type="button"
              className="rounded-lg border border-teal-400 bg-white px-4 py-1.5 text-[11px] font-semibold text-teal-600 shadow-sm transition hover:bg-teal-50"
              onClick={() => window.location.href = 'https://wa.me/966920017765?text=السلام عليكم ورحمة الله وبركاته، أنا أريد حجز موعد لخدمة طبية'}
            >
              {t.nav.bookNowTop}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;