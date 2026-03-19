import React from 'react';

const DentalServicesSection = ({ t, lang }) => {
  return (
    <section
      id="services"
      className="bg-white py-16"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
        {/* Right text area */}
        <div className="w-full lg:w-1/2">
          <p className="text-[12px] font-semibold text-fuchsia-500 mb-1">
            {lang === 'ar' ? 'من نحن' : 'About us'}
          </p>
          <h2 className="text-2xl font-extrabold text-teal-700 sm:text-3xl">
            {lang === 'ar' ? 'مجمع إفاء الطبي' : 'Affa Medical Complex'}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-700">
            {lang === 'ar'
              ? 'نعمل على رفع مستوى التحدي لتحسين خدمات طب الأسنان والحدّاية والتجميل. نسعى لتحقيق الكمال وتخطي التميز من خلال الالتزام بمعايير الجودة في الخدمة والرعاية للحفاظ على بيئة مثالية بالصحة السليمة والجمال.'
              : 'We strive to elevate the standards of dental and cosmetic care, aiming for excellence through quality service and a healthy, beautiful environment.'}
          </p>
          <button
            type="button"
            className="mt-6 inline-flex items-center justify-center rounded-md border border-teal-500 bg-white px-8 py-2.5 text-sm font-semibold text-teal-600 transition hover:bg-teal-50"
          >
            {lang === 'ar' ? 'المزيد' : 'More'}
          </button>
        </div>


        {/* Left image collage */}
        <div className="w-full max-w-xl lg:w-1/2">
          <div className="">
              <img src="https://res.cloudinary.com/dblwpkohn/image/upload/v1773956038/grid_h1n99e.jpg" alt="" className='max-w-[440px]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DentalServicesSection

