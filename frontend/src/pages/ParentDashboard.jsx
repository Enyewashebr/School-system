import { Link } from 'react-router-dom'

function ParentDashboard() {
  const parent = {
    name: 'Robert Doe',
  }

  const student = {
    name: 'John Doe',
    grade: 'Grade 10',
    applicationNumber: 'APP-2026-123456',
    status: 'Under Review',
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div>
            <p className="text-lg font-bold text-gray-900">
              School Portal
            </p>

            <p className="text-xs text-gray-500">
              Parent / Guardian Portal
            </p>
          </div>

          <Link
            to="/"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Logout
          </Link>

        </div>

      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">

        {/* Welcome */}
        <div>

          <p className="text-sm font-medium text-blue-700">
            Parent / Guardian Dashboard
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Welcome, {parent.name}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage and view information about your student.
          </p>

        </div>

        {/* Student Card */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Student
              </p>

              <h2 className="mt-1 text-xl font-bold text-gray-900">
                {student.name}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {student.grade}
              </p>

            </div>

            <div className="text-left md:text-right">

              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Application
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-900">
                {student.applicationNumber}
              </p>

              <span className="mt-2 inline-block rounded-full bg-yellow-100 px-4 py-2 text-xs font-semibold text-yellow-700">
                {student.status}
              </span>

            </div>

          </div>

          <div className="mt-5 border-t border-gray-100 pt-5">

            <Link
              to="/application-status"
              className="text-sm font-semibold text-blue-700 hover:text-blue-900"
            >
              View Application Status →
            </Link>

          </div>

        </section>

        {/* Quick Access */}
        <section className="mt-8">

          <h2 className="text-lg font-bold text-gray-900">
            Quick Access
          </h2>

          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <DashboardCard
              title="Student Profile"
              description="View your student's registered information."
              link="/parent/student"
            />

            <DashboardCard
              title="Application Status"
              description="Check the latest admission application status."
              link="/application-status"
            />

            <DashboardCard
              title="School News"
              description="Read the latest school news and announcements."
              link="/news"
            />

          </div>

        </section>

        {/* Notice */}
        <section className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-6">

          <h2 className="font-semibold text-blue-900">
            Parent Information
          </h2>

          <p className="mt-2 text-sm leading-6 text-blue-800">
            Please make sure your contact information is kept up to date.
            The school may use the registered contact details when
            communicating important information.
          </p>

        </section>

      </main>

    </div>
  )
}

function DashboardCard({
  title,
  description,
  link,
}) {
  return (
    <Link
      to={link}
      className="group rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >

      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
        →
      </div>

      <h3 className="mt-5 font-semibold text-gray-900 group-hover:text-blue-700">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {description}
      </p>

    </Link>
  )
}

export default ParentDashboard
