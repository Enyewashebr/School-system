import { Link, useParams } from 'react-router-dom'

function NewsDetails() {
  const { id } = useParams()

  const news = {
    1: {
      title: '2026/2027 Student Registration Open',
      category: 'Registration',
      date: 'August 20, 2026',
      summary:
        'Student registration for the 2026/2027 academic year is now open for eligible students.',
      content: `
        The school is pleased to announce that student registration
        for the 2026/2027 academic year is now open.

        Students and parents are encouraged to complete the registration
        process as early as possible.

        Please make sure that all required information is accurate
        before submitting the registration application.

        For additional information, please contact the school
        administration.
      `,
    },

    2: {
      title: 'Welcome to the New Academic Year',
      category: 'School News',
      date: 'August 18, 2026',
      summary:
        'We welcome all students, parents, and staff to a new academic year.',
      content: `
        We are pleased to welcome our students, parents, teachers,
        and school community to the new academic year.

        We look forward to another successful year of learning,
        cooperation, and personal development.
      `,
    },

    3: {
      title: 'Orientation Program for New Students',
      category: 'Event',
      date: 'August 15, 2026',
      summary:
        'New students are invited to attend the upcoming orientation program.',
      content: `
        The school will organize an orientation program for new students.

        The program will introduce students to the school environment,
        academic expectations, rules, facilities, and available services.
      `,
    },
  }

  const article = news[id]

  if (!article) {
    return (
      <div className="px-6 py-20 text-center">

        <h1 className="text-2xl font-bold text-gray-900">
          News Not Found
        </h1>

        <p className="mt-2 text-gray-500">
          The news article you are looking for does not exist.
        </p>

        <Link
          to="/news"
          className="mt-6 inline-block font-semibold text-blue-700"
        >
          ← Back to News
        </Link>

      </div>
    )
  }

  return (
    <div className="bg-gray-50">

      {/* Header */}
      <section className="bg-blue-800 px-6 py-12 text-white">

        <div className="mx-auto max-w-4xl">

          <Link
            to="/news"
            className="text-sm font-medium text-blue-200 hover:text-white"
          >
            ← Back to News
          </Link>

          <div className="mt-8">

            <span className="rounded-full bg-blue-700 px-3 py-1 text-xs font-semibold">
              {article.category}
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
              {article.title}
            </h1>

            <p className="mt-4 text-sm text-blue-200">
              {article.date}
            </p>

          </div>

        </div>

      </section>

      {/* Article */}
      <article className="px-6 py-12">

        <div className="mx-auto max-w-4xl">

          {/* Image Placeholder */}
          <div className="flex h-64 items-center justify-center rounded-xl bg-gray-200 md:h-96">

            <span className="text-sm font-medium text-gray-500">
              School News Image
            </span>

          </div>

          {/* Content */}
          <div className="mt-8 rounded-xl bg-white p-6 shadow-sm md:p-10">

            <p className="text-lg font-medium leading-8 text-gray-700">
              {article.summary}
            </p>

            <div className="my-8 h-px bg-gray-100" />

            <div className="whitespace-pre-line text-base leading-8 text-gray-700">
              {article.content}
            </div>

          </div>

          {/* Back */}
          <div className="mt-8">

            <Link
              to="/news"
              className="inline-flex rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              ← Back to All News
            </Link>

          </div>

        </div>

      </article>

    </div>
  )
}

export default NewsDetails
