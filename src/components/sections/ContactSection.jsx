import React from 'react'

const ContactSection = ({ t, lang }) => {
  const isAr = lang === 'ar'

  return (
    <section
      id="contact"
      className="bg-white py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">


          {/* Form (right) */}
          <div className="w-full max-w-2xl flex flex-col gap-4 items-center text-center">
            <h2 className="text-3xl font-extrabold text-teal-700 sm:text-4xl">
              {t.sections.contactTitle}
            </h2>

            <form className="mt-2 space-y-3">
              {/* First row: name, phone, email */}
              <div className="grid gap-3 sm:grid-cols-3">
                <input
                  type="text"
                  placeholder={isAr ? 'الاسم' : 'Name'}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
                />
                <input
                  type="tel"
                  placeholder={isAr ? 'رقم الجوال' : 'Mobile number'}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
                />
                <input
                  type="email"
                  placeholder={isAr ? 'البريد الإلكتروني' : 'Email'}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                placeholder={isAr ? 'عنوان الرسالة' : 'Subject'}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
              />

              {/* Message */}
              <textarea
                rows={5}
                placeholder={isAr ? 'الرسالة' : 'Message'}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
              />

              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center rounded-2xl bg-teal-600 px-10 py-2.5 text-xs font-semibold text-white shadow-md transition hover:translate-y-0.5 hover:brightness-105"
              >
                {t.common.send}
              </button>
            </form>
          </div>

          {/* Map removed from this section */}
        </div>
      </div>
    </section>
  )
}

export default ContactSection

