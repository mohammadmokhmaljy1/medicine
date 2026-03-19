import React from 'react'

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29693.362325312388!2d39.25162024066291!3d21.520630736267478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3ce04753fe74b%3A0x97e75a632bce7825!2z2KfZhNmG2LPZitmF2Iwg2KzYr9ipINin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2sus!4v1773783988662!5m2!1sar!2sus'

const MapSection = ({ lang }) => {
  const isAr = lang === 'ar'

  return (
    <section id="map" className="bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-64 overflow-hidden rounded-3xl border border-slate-200 bg-slate-200/70 sm:h-72">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d953.7239076289111!2d43.03758872723114!3d17.028788760645362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15fd7b0014ba9553%3A0xc2a86e8a07040b11!2z2YXYrNmF2Lkg2KXZgdin2KEg2KfZhNi32KjZig!5e0!3m2!1sar!2s!4v1773873974444!5m2!1sar!2s" className='w-full h-full' style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  )
}

export default MapSection
