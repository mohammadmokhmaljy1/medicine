import React from 'react'
import dermatologyImg from '../../assets/dermatology_service.jpg'
import dentistryImg from '../../assets/dentistry_service.jpg'
import internalMedicineImg from '../../assets/Internal_medicine_service.jpg'
import pediatricsImg from '../../assets/babies_service.jpg'
import generalMedicineImg from '../../assets/general_service.jpg'
import gynecologyImg from '../../assets/pregnant_service.jpg'

// Order matches the services array order: dermatology, dentistry, internal medicine, pediatrics, general medicine, gynecology
const images = [
  dermatologyImg,
  dentistryImg,
  internalMedicineImg,
  pediatricsImg,
  generalMedicineImg,
  gynecologyImg,
]

const GeneralServicesSection = ({ t, lang }) => {
  const isAr = lang === 'ar'
  const services = isAr 
    ? [
        {
          key: 'dermatology',
          title: 'جلدية',
          desc: 'خدمات جلدية شاملة تشمل تقييم الحالة وخطة علاج دقيقة باستخدام أحدث التقنيات.'
        },
        {
          key: 'dentistry',
          title: 'الأسنان',
          desc: 'متابعة دورية وعلاجات متقدمة لصحة الفم واللثة وتحسين المظهر بجودة عالية.'
        },
        {
          key: 'internal-medicine',
          title: 'طب البطانة',
          desc: 'تشخيص وعلاج أمراض الجهاز الهضمي والباطنية بخيارات علاجية مناسبة لكل حالة.'
        },
        {
          key: 'pediatrics',
          title: 'طب الأطفال',
          desc: 'رعاية أطفال متكاملة مع متابعة نمو صحّي وتقديم نصائح وقائية للأهل.'
        },
        {
          key: 'general-medicine',
          title: 'طب عام',
          desc: 'استشارات طبية شاملة وخدمات فحص وتشخيص أولي لحالات مختلفة.'
        },
        {
          key: 'gynecology',
          title: 'طب النساء والولادة',
          desc: 'متابعة نسائية شاملة وخدمات ولادة ورعاية ما قبل وبعد الولادة بأمان وراحة.'
        },
      ]
    : [
        {
          key: 'dermatology',
          title: 'Dermatology',
          desc: 'Comprehensive skin care with precise assessment and treatment plans using modern methods.'
        },
        {
          key: 'dentistry',
          title: 'Dentistry',
          desc: 'Follow‑up and advanced treatments for oral health, gums, and a confident smile.'
        },
        {
          key: 'internal-medicine',
          title: 'Internal medicine',
          desc: 'Diagnosis and treatment for internal and digestive conditions with tailored options.'
        },
        {
          key: 'pediatrics',
          title: 'Pediatrics',
          desc: 'Whole‑child care with growth monitoring and preventive guidance for parents.'
        },
        {
          key: 'general-medicine',
          title: 'General medicine',
          desc: 'Full medical consultations with screening and first‑line diagnosis.'
        },
        {
          key: 'gynecology',
          title: 'Gynecology & Obstetrics',
          desc: 'Comprehensive women’s health follow‑ups and safe maternity care.'
        },
      ]

  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-1 text-start mb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-teal-700 sm:text-3xl">
              {t.sections.medicalTitle}
            </h2>
            <p className="mt-1 max-w-xl text-sm text-slate-700">
              {t.sections.medicalSubtitle}
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.key}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
            >
              <img
                src={images[index % images.length]}
                alt={service.title}
                className="object-cover aspect-video"
              />
              <div className="px-4 pb-3 pt-3 text-start">
                <h3 className="text-sm font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                  {service.desc}
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

