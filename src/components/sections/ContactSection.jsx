import React from 'react'

const ContactSection = ({ t, lang }) => {
  const isAr = lang === 'ar'

  return (
    <section
      id="contact"
      className="bg-white py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">


          {/* Form (right) */}
          <div className="flex flex-col gap-4 text-start">
            <p className="text-[12px] font-semibold text-green-500">
              {isAr ? 'معكم في كل وقت' : 'We are with you always'}
            </p>
            <h2 className="text-3xl font-extrabold text-fuchsia-600 sm:text-4xl">
              {t.sections.contactTitle}
            </h2>

            <form className="mt-2 space-y-3">
              {/* First row: name, phone, email */}
              <div className="grid gap-3 sm:grid-cols-3">
                <input
                  type="text"
                  placeholder={isAr ? 'الاسم' : 'Name'}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                />
                <input
                  type="tel"
                  placeholder={isAr ? 'رقم الجوال' : 'Mobile number'}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                />
                <input
                  type="email"
                  placeholder={isAr ? 'البريد الإلكتروني' : 'Email'}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                placeholder={isAr ? 'عنوان الرسالة' : 'Subject'}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
              />

              {/* Message */}
              <textarea
                rows={5}
                placeholder={isAr ? 'الرسالة' : 'Message'}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
              />

              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-fuchsia-500 px-10 py-2.5 text-xs font-semibold text-white shadow-md transition hover:translate-y-0.5 hover:brightness-105"
              >
                {t.common.send}
              </button>
            </form>
          </div>

          {/* Map (left) */}
          <div className="space-y-3">
            <div className="h-56 w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-200/70 sm:h-72">
              <iframe
                title={isAr ? 'موقع مجمع إفاء الطبي' : 'Affa Medical Center location'}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29693.362325312388!2d39.25162024066291!3d21.520630736267478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3ce04753fe74b%3A0x97e75a632bce7825!2z2KfZhNmG2LPZitmF2Iwg2KzYr9ipINin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2sus!4v1773783988662!5m2!1sar!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

