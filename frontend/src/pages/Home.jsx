import { Link } from 'react-router-dom'


function Home() {
  const news = [
    {
      title: 'Student Registration Is Now Open',
      date: 'August 20, 2026',
      description:
        'Registration for Grades 9–12 is now open for the new academic year.',
    },
    {
      title: 'Welcome to the New Academic Year',
      date: 'August 15, 2026',
      description:
        'We welcome all students and parents to a new year of learning.',
    },
    {
      title: 'School Orientation Program',
      date: 'August 10, 2026',
      description:
        'Important information for new students and parents will be provided during orientation.',
    },
  ]

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">

          <div className="max-w-3xl">

            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700">
              Government / Public School
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Quality education for every student.
            </h1>

            <p className="mt-6 text-base leading-7 text-gray-600 md:text-lg">
              Welcome to our government school. We provide
              accessible secondary education for students in
              Grades 9 through 12.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/register/student"
                className="rounded-lg bg-blue-700 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-blue-800"
              >
                Register a Student
              </Link>

              <Link
                to="/about"
                className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-center text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Learn More
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* Quick Services */}
      <section className="border-b border-gray-100 py-12">
        <div className="mx-auto max-w-6xl px-6">

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <ServiceCard
              title="Student Registration"
              description="Submit a new student registration application."
              link="/register/student"
              action="Register"
            />

            <ServiceCard
              title="Check Application"
              description="Check the status of a submitted application."
              link="/check-application"
              action="Check Status"
            />

            <ServiceCard
              title="School News"
              description="Read the latest information and announcements."
              link="/news"
              action="View News"
            />

            <ServiceCard
              title="Student / Parent Login"
              description="Access your student or parent portal."
              link="/login"
              action="Login"
            />

          </div>

        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                About Our School
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                A supportive environment for learning and growth.
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Our school is committed to providing students with
                a safe, respectful, and supportive environment where
                they can develop academically and personally.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                We serve students from Grades 9 through 12 as part
                of the public education system.
              </p>

              <Link
                to="/about"
                className="mt-6 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Learn more about our school →
              </Link>

            </div>

            <div className="rounded-2xl bg-gray-50 p-8">

              <h3 className="text-lg font-bold text-gray-900">
                School at a glance
              </h3>

              <div className="mt-6 grid grid-cols-2 gap-4">

                <Stat
                  number="9"
                  label="Starting Grade"
                />

                <Stat
                  number="12"
                  label="Highest Grade"
                />

                <Stat
                  number="4"
                  label="Grade Levels"
                />

                <Stat
                  number="0"
                  label="Tuition Fee"
                />

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Latest News */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="flex items-center justify-between">

  <div>
    <p className="text-sm font-semibold text-blue-700">
      School Updates
    </p>

    <h2 className="mt-1 text-2xl font-bold text-gray-900">
      Latest News
    </h2>
  </div>

  <Link
    to="/news"
    className="text-sm font-semibold text-blue-700 hover:text-blue-900"
  >
    View All News →
  </Link>

</div>
      </section>

      {/* Registration Information */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">

          <div className="rounded-2xl bg-gray-900 p-8 text-white md:p-12">

            <div className="grid gap-8 md:grid-cols-2 md:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                  Student Registration
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  Ready to register a student?
                </h2>

                <p className="mt-4 leading-7 text-gray-300">
                  Submit your registration application online.
                  The school administration will review the
                  application before making a decision.
                </p>

              </div>

              <div className="md:text-right">

                <Link
                  to="/register/student"
                  className="inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                >
                  Start Registration
                </Link>

                <p className="mt-4 text-xs text-gray-400">
                  Registration is subject to school requirements
                  and available places.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  )
}

function ServiceCard({
  title,
  description,
  link,
  action,
}) {
  return (
    <Link
      to={link}
      className="group rounded-xl border border-gray-100 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-sm"
    >
      <h3 className="font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {description}
      </p>

      <p className="mt-4 text-xs font-semibold text-blue-700 group-hover:text-blue-800">
        {action} →
      </p>
    </Link>
  )
}

function Stat({ number, label }) {
  return (
    <div className="rounded-xl bg-white p-5">
      <p className="text-2xl font-bold text-gray-900">
        {number}
      </p>

      <p className="mt-1 text-xs text-gray-500">
        {label}
      </p>
    </div>
  )
}

function NewsCard({ news }) {
  return (
    <article className="rounded-xl bg-white p-6 shadow-sm">

      <p className="text-xs font-medium text-gray-400">
        {news.date}
      </p>

      <h3 className="mt-3 text-lg font-bold text-gray-900">
        {news.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">
        {news.description}
      </p>

      <Link
        to="/news"
        className="mt-5 inline-flex text-sm font-semibold text-blue-700"
      >
        Read more →
      </Link>

    </article>
  )
}

export default Home
