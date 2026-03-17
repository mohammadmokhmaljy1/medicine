import React, { useRef } from 'react'
import heroImage from '../../assets/hero-bg.png'
import { NAV_HEIGHT } from '../../config/siteContent'
import { FaClock, FaRegCalendarAlt } from 'react-icons/fa'

const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

const HeroSection = ({ t, lang }) => {
  const formRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { default: emailjs } = await import('@emailjs/browser')

    try {
      await emailjs.sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, formRef.current, {
        publicKey: EMAIL_PUBLIC_KEY,
      })
      alert(lang === 'ar' ? 'تم إرسال طلب الحجز بنجاح.' : 'Booking request sent successfully.')
      formRef.current?.reset()
    } catch (error) {
      console.error(error)
      alert(lang === 'ar' ? 'حدث خطأ، حاول مرة أخرى.' : 'Something went wrong, please try again.')
    }
  }
  return (
    // <section
    //   id="hero"
    //   className="relative overflow-hidden bg-sky-100"
    //   style={{ scrollMarginTop: NAV_HEIGHT + 16 }}
    // >
    <>
      <div
        className="relative px-4 pt-10 pb-24 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* overlay to soften image on the right */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-l from-white/85 via-white/40 to-sky-200/20" />

        {/* Live Chat badge on left */}
        <div className="absolute bottom-28 end-6">
          <div className="rounded-2xl bg-white px-3 py-2 shadow-xl shadow-sky-200/80 ring-1 ring-sky-100">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-teal-500" />
              <span className="text-[11px] font-semibold text-fuchsia-600">
                {lang === 'ar' ? 'Live Chat' : 'Live Chat'}
              </span>
            </div>
          </div>
        </div>

        {/* Right side text content */}
        <div className="relative flex h-[360px] items-center justify-start sm:h-[420px] lg:h-[460px]">
          <div className="max-w-[500px] pe-6 ps-6 text-start sm:ps-16 lg:ps-24">
            <p className="text-[14px] font-semibold text-fuchsia-500 mb-2 after:content-[''] after:block after:w-[90px] after:h-[2px] after:bg-fuchsia-500 after:rounded-full">
              {lang === 'ar' ? 'غيّر حياتك الآن' : 'Change your life now'}
            </p>
            <h1 className="text-3xl font-extrabold leading-snug text-teal-700 sm:text-4xl lg:text-5xl">
              {t.hero.titleLine1}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              {t.hero.subtitle}
            </p>
            <div className="mt-5 flex justify-start">
              <a href={`tel:${t.nav.phone}`} className='w-full'>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border border-teal-500 bg-white px-10 cursor-pointer py-2.5 text-sm font-semibold text-teal-600 transition hover:bg-teal-50"
                >
                  {t.hero.primaryCta}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Booking card under hero */}

      <div className="relative -mt-10">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-sky-200/80 ring-1 ring-slate-100"
        >
          {/* Left teal column */}
          <button type="submit" className="text-xs font-semibold cursor-pointer">
            <div className="flex w-40 flex-col items-center justify-center gap-3 bg-teal-600 px-4 py-6 text-center text-white sm:w-48 rounded-2xl mx-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40">
                <FaClock className='w-4 h-4 text-white' />
              </div>
              {lang === 'ar' ? 'تأكيد الحجز' : 'Confirm booking'}
            </div>
          </button>

          {/* Right booking form */}
          <div className="flex-1 px-4 py-4 sm:px-6 sm:py-5">
            <div className="mb-3 flex justify-between text-[11px] font-semibold text-fuchsia-600">
              <span>
                {lang === 'ar' ? 'تفضل بحجز موعدك الآن' : 'Book your appointment now'}
              </span>
            </div>
            <div className="space-y-3 text-[11px]">
              {/* first row */}
              <div className="grid gap-3 sm:grid-cols-3">
                <input
                  type="text"
                  placeholder={lang === 'ar' ? 'الاسم' : 'Name'}
                  name="user_name"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] text-slate-500 outline-none transition focus:border-teal-400 focus:bg-white focus:text-slate-700 focus:ring-2 focus:ring-teal-100"
                />
                <input
                  type="email"
                  placeholder={lang === 'ar' ? 'البريد الإلكتروني (اختياري)' : 'Email (optional)'}
                  name="user_email"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] text-slate-500 outline-none transition focus:border-teal-400 focus:bg-white focus:text-slate-700 focus:ring-2 focus:ring-teal-100"
                />
                <input
                  type="tel"
                  placeholder={lang === 'ar' ? 'رقم الجوال' : 'Mobile number'}
                  name="user_phone"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] text-slate-500 outline-none transition focus:border-teal-400 focus:bg-white focus:text-slate-700 focus:ring-2 focus:ring-teal-100"
                />
              </div>

              {/* second row */}
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="relative">
                  <select
                    name="department"
                    className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] text-slate-500 outline-none transition focus:border-teal-400 focus:bg-white focus:text-slate-700 focus:ring-2 focus:ring-teal-100"
                  >
                    <option>
                      {lang === 'ar' ? 'قسم الحجز' : 'Department'}
                    </option>
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 start-2 flex items-center text-slate-300">
                    ▾
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="time"
                    name="booking_time"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] text-slate-500 outline-none transition focus:border-teal-400 focus:bg-white focus:text-slate-700 focus:ring-2 focus:ring-teal-100"
                  />
                  {/* <FaClock className="pointer-events-none absolute inset-y-0 end-2 my-auto h-4 w-4 text-slate-300" /> */}
                </div>
                <div className="relative">
                  <input
                    type="date"
                    placeholder=""
                    name="booking_date"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] text-slate-500 outline-none transition focus:border-teal-400 focus:bg-white focus:text-slate-700 focus:ring-2 focus:ring-teal-100"
                  />
                  {/* <FaRegCalendarAlt className="pointer-events-none absolute inset-y-0 end-2 my-auto h-4 w-4 text-slate-300" /> */}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* // </section> */}
    </>
  )
}

export default HeroSection