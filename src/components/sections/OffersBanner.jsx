import React from 'react'
import offer from '../../assets/offer.jpg'

const OffersBanner = ({ t, lang }) => {
  return (
    <section
      id="offers"
      className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-500 py-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center text-white sm:flex-row sm:justify-between sm:text-start">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-fuchsia-100">
            {lang === 'ar' ? 'عروض خاصة' : 'Special Offers'}
          </p>
          <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
            {t.sections.offersTitle}
          </h2>
          <p className="mt-2 max-w-md text-sm text-fuchsia-50">
            {t.sections.offersSubtitle}
          </p>
          <button
            type="button"
            className="mt-4 rounded-full bg-white px-6 py-2.5 text-xs font-semibold text-fuchsia-700 shadow-md shadow-fuchsia-500/30 transition hover:translate-y-0.5"
          >
            {t.common.bookNow}
          </button>
        </div>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-end">
          <img src={offer} alt="" className='max-w-[300px] object-cover aspect-video rounded-3xl' />
        </div>
      </div>
    </section>
  )
}

export default OffersBanner

