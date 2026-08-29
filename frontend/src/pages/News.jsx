import { Link } from 'react-router-dom'

function News() {
  const news = [
    {
      id: 1,
      title: '2026/2027 Student Registration Open',
      category: 'Registration',
      date: 'August 20, 2026',
      summary:
        'Student registration for the 2026/2027 academic year is now open for eligible students.',
    },
    {
      id: 2,
      title: 'Welcome to the New Academic Year',
      category: 'School News',
      date: 'August 18, 2026',
      summary:
        'We welcome all students, parents, and staff to a new academic year of learning and growth.',
    },
    {
      id: 3,
      title: 'Orientation Program for New Students',
      category: 'Event',
      date: 'August 15, 2026',
      summary:
        'New students are invited to attend the upcoming orientation program.',
    },
  ]

  return (
    <div className="bg-gray-50">

      {/* Page Header */}
      <section className="bg-blue-800 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
            School Updates
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Latest News
          </h1>

          <p className="mt-4 max-w-2xl text-blue-100">
            Stay informed about the latest activities, registration
            information, events, and updates from our school.
          </p>

        </div>
      </section>

      {/* News */}
      <section className="px-6 py-12">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {news.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >

                {/* Image Placeholder */}
                <div className="flex h-48 items-center justify-center bg-gray-200">

                  <span className="text-sm font-medium text-gray-500">
                    School News
                  </span>

                </div>

                <div className="p-6">

                  <div className="flex items-center justify-between gap-3">

                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                      {item.category}
                    </span>

                    <span className="text-xs text-gray-400">
                      {item.date}
                    </span>

                  </div>

                  <h2 className="mt-4 text-xl font-bold text-gray-900">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.summary}
                  </p>

                  <Link
                    to={`/news/${item.id}`}
                    className="mt-5 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-900"
                  >
                    Read More →
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

    </div>
  )
}

export default News
