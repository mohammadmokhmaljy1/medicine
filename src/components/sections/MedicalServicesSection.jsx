import React from 'react'
import service1 from '../../assets/service-1.jpg';
import service2 from '../../assets/service-2.jpg';
import service3 from '../../assets/service-3.jpg';
import service4 from '../../assets/service-1.jpg';
import service5 from '../../assets/service-2.jpg';
import service6 from '../../assets/service-3.jpg';

const imageByKey = {
  crowns: service1,
  veneers: service2,
  fillings: service3,
  extraction: service4,
  gumLaser: service5,
  root: service6,
}

const MedicalServicesSection = ({ t, lang }) => {
  const isAr = lang === 'ar'
  const services = (t.dentalServices || []).map((service) => ({
    ...service,
    image: service.image || imageByKey[service.key] || service1,
  }))

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-1 text-start">
          <div>
            <p className="text-[12px] font-semibold text-fuchsia-500">
              {isAr ? 'خدماتنا' : 'Our services'}
            </p>
            <h2 className="text-2xl font-extrabold text-teal-700 sm:text-3xl">
              {t.sections.dentalTitle}
            </h2>
            <p className="mt-1 max-w-xl text-sm text-slate-700">
              {t.sections.dentalSubtitle}
            </p>
          </div>
          <div className="order-2 mt-2 lg:order-1 lg:mt-8">
            <button
              type="button"
              className="rounded-md border border-teal-500 bg-white px-6 py-2 text-sm font-semibold text-teal-600 transition hover:bg-teal-50"
            >
              {t.common.learnMore}
            </button>
          </div>
        </div>

        {/* Cards grid + more button */}
        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

          {/* Service cards: 2 rows x 3 columns */}
          <div className="order-1 grid flex-1 gap-3 sm:grid-cols-3 lg:order-2">
            {services.map((service) => (
              <article
                key={service.key}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
              >
                <img src={service.image} alt="" className='w-full h-full object-cover aspect-video' />
                <div className="px-4 pb-3 pt-3 text-start">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                    {service.description}
                  </p>
                  <button
                    type="button"
                    className="mt-2 text-[11px] font-semibold text-teal-600"
                  >
                    {isAr ? '.. المزيد' : 'More ..'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MedicalServicesSection

