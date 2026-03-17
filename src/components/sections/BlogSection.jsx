import React from 'react'

const BlogSection = ({ t, lang }) => {
  return (
    <section
      id="blog"
      className="bg-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="mb-3 h-1.5 w-16 rounded-full bg-gradient-to-r from-teal-500 to-sky-500" />
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              {t.sections.blogTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {t.sections.blogSubtitle}
            </p>
          </div>
          <button
            type="button"
            className="hidden rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 sm:inline-flex"
          >
            {t.common.viewAll}
          </button>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <article
              key={i}
              className="flex flex-col overflow-hidden rounded-2xl bg-slate-50 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-24 bg-slate-200/90" />
              <div className="flex flex-1 flex-col px-3 pb-3 pt-2">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-teal-600">
                  {lang === 'ar' ? 'نصائح طبية' : 'Medical Tips'}
                </p>
                <h3 className="mt-1 text-xs font-semibold text-slate-900">
                  {lang === 'ar'
                    ? ['كيف تحافظ على صحة لثتك', 'أفضل روتين للعناية بالأسنان', 'متى تحتاج لزيارة طبيب الأسنان؟'][i - 1]
                    : ['How to keep your gums healthy', 'Best daily dental care routine', 'When should you visit the dentist?'][i - 1]}
                </h3>
                <p className="mt-1 text-[11px] text-slate-500">
                  {lang === 'ar'
                    ? 'محتوى تمهيدي لمقالة طبية سيتم استبداله لاحقًا.'
                    : 'Intro snippet for a medical article to be replaced later.'}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection

