import { Link } from 'react-router-dom'

function AdminDashboard() {
  const statistics = {
    totalStudents: 486,
    totalApplications: 42,
    pendingApplications: 18,
    acceptedApplications: 20,
    rejectedApplications: 4,
  }

  const recentApplications = [
    {
      id: 'APP-2026-123456',
      name: 'John Doe',
      grade: 'Grade 10',
      date: 'August 20, 2026',
      status: 'Under Review',
    },
    {
      id: 'APP-2026-654321',
      name: 'Jane Smith',
      grade: 'Grade 11',
      date: 'August 15, 2026',
      status: 'Accepted',
    },
    {
      id: 'APP-2026-111111',
      name: 'Michael Brown',
      grade: 'Grade 9',
      date: 'August 10, 2026',
      status: 'Rejected',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div>
            <p className="text-lg font-bold text-gray-900">
              School Administration
            </p>

            <p className="text-xs text-gray-500">
              Principal Portal
            </p>
          </div>

          {/* <Link
            to="/"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Logout
          </Link> */}

        </div>

      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">

        {/* Welcome */}
        <div>

          <p className="text-sm font-medium text-blue-700">
            Administration
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Principal Dashboard
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Overview of school admissions and student information.
          </p>

        </div>

        {/* Statistics */}
        <section className="mt-8">

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <StatCard
              title="Total Students"
              value={statistics.totalStudents}
            />

            <StatCard
              title="Applications"
              value={statistics.totalApplications}
            />

            <StatCard
              title="Pending Review"
              value={statistics.pendingApplications}
            />

            <StatCard
              title="Accepted"
              value={statistics.acceptedApplications}
            />

          </div>

        </section>

        {/* Main Grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-3">

          {/* Recent Applications */}
          <section className="overflow-hidden rounded-xl bg-white shadow-sm lg:col-span-2">

            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">

              <div>

                <h2 className="font-semibold text-gray-900">
                  Recent Applications
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  Latest student admission applications
                </p>

              </div>

              <Link
                to="/admin/applications"
                className="text-sm font-semibold text-blue-700 hover:text-blue-900"
              >
                View All
              </Link>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full min-w-[650px]">

                <thead className="bg-gray-50">

                  <tr>

                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Application
                    </th>

                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Student
                    </th>

                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Grade
                    </th>

                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Status
                    </th>

                  </tr>

                </thead>

                <tbody className="divide-y divide-gray-100">

                  {recentApplications.map((application) => (

                    <tr key={application.id}>

                      <td className="px-6 py-4">

                        <Link
                          to={`/admin/applications/${application.id}`}
                          className="text-sm font-semibold text-blue-700 hover:text-blue-900"
                        >
                          {application.id}
                        </Link>

                        <p className="mt-1 text-xs text-gray-400">
                          {application.date}
                        </p>

                      </td>

                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {application.name}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {application.grade}
                      </td>

                      <td className="px-6 py-4">
                        <StatusBadge status={application.status} />
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </section>

          {/* Quick Actions */}
          <section className="rounded-xl bg-white p-6 shadow-sm">

            <h2 className="font-semibold text-gray-900">
              Quick Actions
            </h2>

            <div className="mt-5 space-y-3">

              <QuickAction
                title="Review Applications"
                description="Review pending admission applications."
                link="/admin/applications"
              />

              <QuickAction
                title="Manage Students"
                description="View registered students."
                link="/admin/students"
              />

              <QuickAction
                title="Manage News"
                description="Create and update school news."
                link="/admin/news"
              />

            </div>

          </section>

        </div>

        {/* Application Summary */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">

          <h2 className="font-semibold text-gray-900">
            Application Summary
          </h2>

          <div className="mt-5 grid gap-5 sm:grid-cols-3">

            <SummaryCard
              title="Under Review"
              value={statistics.pendingApplications}
              description="Applications waiting for review"
            />

            <SummaryCard
              title="Accepted"
              value={statistics.acceptedApplications}
              description="Applications approved"
            />

            <SummaryCard
              title="Rejected"
              value={statistics.rejectedApplications}
              description="Applications rejected"
            />

          </div>

        </section>

      </main>

    </div>
  )
}

function StatCard({
  title,
  value,
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">

      <p className="text-sm font-medium text-gray-500">
        {title}
      </p>

      <p className="mt-2 text-3xl font-bold text-gray-900">
        {value}
      </p>

    </div>
  )
}

function SummaryCard({
  title,
  value,
  description,
}) {
  return (
    <div className="rounded-lg border border-gray-100 p-5">

      <p className="text-sm font-semibold text-gray-900">
        {title}
      </p>

      <p className="mt-2 text-2xl font-bold text-gray-900">
        {value}
      </p>

      <p className="mt-1 text-xs text-gray-500">
        {description}
      </p>

    </div>
  )
}

function QuickAction({
  title,
  description,
  link,
}) {
  return (
    <Link
      to={link}
      className="block rounded-lg border border-gray-200 p-4 transition hover:border-blue-200 hover:bg-blue-50"
    >

      <p className="text-sm font-semibold text-gray-900">
        {title}
      </p>

      <p className="mt-1 text-xs leading-5 text-gray-500">
        {description}
      </p>

    </Link>
  )
}

function StatusBadge({ status }) {
  const styles = {
    'Under Review': 'bg-yellow-100 text-yellow-700',
    Accepted: 'bg-green-100 text-green-700',
    Rejected: 'bg-red-100 text-red-700',
    Submitted: 'bg-blue-100 text-blue-700',
  }

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] || 'bg-gray-100 text-gray-600'
      }`}
    >
      {status}
    </span>
  )
}

export default AdminDashboard
