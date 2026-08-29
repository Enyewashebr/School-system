function PortalNews() {
  const news = [
    {
      id: 1,
      title: 'Student Registration Is Now Open',
      category: 'Registration',
      date: 'August 20, 2026',
      description:
        'Registration for the new academic year is now open for students applying to Grades 9 through 12.',
    },
    {
      id: 2,
      title: 'Welcome to the New Academic Year',
      category: 'School News',
      date: 'August 15, 2026',
      description:
        'We welcome students and parents to a new academic year of learning and achievement.',
    },
    {
      id: 3,
      title: 'School Orientation Program',
      category: 'Events',
      date: 'August 10, 2026',
      description:
        'New students and parents will receive important information about school programs and services.',
    },
  ]

  return (
    <div className="p-6 md:p-8">

      {/* Header */}
      <div>
        <p className="text-sm font-medium text-blue-700">
          Student Portal
        </p>

        <h1 className="mt-1 text-2xl font-bold text-gray-900">
          School News
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Stay updated with important information from the school.
        </p>
      </div>

      {/* News */}
      <div className="mt-8 space-y-4">

        {news.map((item) => (
          <article
            key={item.id}
            className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
          >

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

              <div className="min-w-0">

                {/* Category */}
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {item.category}
                </span>

                {/* Title */}
                <h2 className="mt-4 text-lg font-bold text-gray-900">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
                  {item.description}
                </p>

              </div>

              {/* Date */}
              <p className="shrink-0 text-xs font-medium text-gray-400">
                {item.date}
              </p>

            </div>

          </article>
        ))}

      </div>

    </div>
  )
}

export default PortalNews
