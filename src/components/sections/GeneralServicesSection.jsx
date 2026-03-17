import React from 'react'
import service1 from '../../assets/service-4.jpg'
import service2 from '../../assets/service-5.jpg'
import service3 from '../../assets/service-6.jpg'
import service4 from '../../assets/service-7.jpg'

const images = [service1, service2, service3, service4]

const GeneralServicesSection = ({ t, lang }) => {
  const isAr = lang === 'ar'
  const titles = isAr
    ? ['طب الباطنة', 'طب الأطفال', 'الطب العام', 'قسم النساء والولادة']
    : ['Internal medicine', 'Pediatrics', 'General medicine', 'Gynecology & obstetrics']

  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-1 text-start mb-6">
          <div>
            <p className="text-[12px] font-semibold text-fuchsia-500">
              {isAr ? 'الخدمات العامة' : 'General services'}
            </p>
            <h2 className="text-2xl font-extrabold text-teal-700 sm:text-3xl">
              {t.sections.medicalTitle}
            </h2>
            <p className="mt-1 max-w-xl text-sm text-slate-700">
              {t.sections.medicalSubtitle}
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {titles.map((title, index) => (
            <article
              key={title}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
            >
              <img
                src={images[index % images.length]}
                alt={title}
                className="h-28 w-full object-cover"
              />
              <div className="px-4 pb-3 pt-3 text-start">
                <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                  {isAr
                    ? 'نص تعريفي مختصر عن هذه الخدمة سيتم استبداله لاحقًا.'
                    : 'Short descriptive text about this service to be replaced later.'}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GeneralServicesSection

