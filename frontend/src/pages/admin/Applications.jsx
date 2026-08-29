import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

function Applications() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [gradeFilter, setGradeFilter] = useState('All')

  const applications = [
    {
      id: 'APP-2026-123456',
      studentName: 'John Doe',
      grade: '10',
      date: 'August 20, 2026',
      status: 'Under Review',
    },
    {
      id: 'APP-2026-654321',
      studentName: 'Jane Smith',
      grade: '11',
      date: 'August 15, 2026',
      status: 'Accepted',
    },
    {
      id: 'APP-2026-111111',
      studentName: 'Michael Brown',
      grade: '9',
      date: 'August 10, 2026',
      status: 'Rejected',
    },
    {
      id: 'APP-2026-222222',
      studentName: 'Sarah Johnson',
      grade: '12',
      date: 'August 22, 2026',
      status: 'Submitted',
    },
    {
      id: 'APP-2026-333333',
      studentName: 'David Wilson',
      grade: '10',
      date: 'August 23, 2026',
      status: 'Under Review',
    },
  ]

  const filteredApplications = useMemo(() => {
    return applications.filter((application) => {

      const matchesSearch =
        application.studentName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        application.id
          .toLowerCase()
          .includes(search.toLowerCase())

      const matchesStatus =
        statusFilter === 'All' ||
        application.status === statusFilter

      const matchesGrade =
        gradeFilter === 'All' ||
        application.grade === gradeFilter

      return (
        matchesSearch &&
        matchesStatus &&
        matchesGrade
      )
    })
  }, [
    search,
    statusFilter,
    gradeFilter,
  ])

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

          <Link
            to="/admin"
            className="text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            ← Dashboard
          </Link>

        </div>

      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">

        {/* Page Header */}
        <div>

          <p className="text-sm font-medium text-blue-700">
            Admissions
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Applications
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Review and manage student admission applications.
          </p>

        </div>

        {/* Filters */}
        <section className="mt-8 rounded-xl bg-white p-5 shadow-sm">

          <div className="grid gap-4 md:grid-cols-3">

            {/* Search */}
            <div className="md:col-span-1">

              <label
                htmlFor="search"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Search
              </label>

              <input
                id="search"
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Name or application number"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

            </div>

            {/* Status */}
            <div>

              <label
                htmlFor="status"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Status
              </label>

              <select
                id="status"
                value={statusFilter}
                onChange={(event) =>
                  setStatusFilter(event.target.value)
                }
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              >

                <option value="All">
                  All Statuses
                </option>

                <option value="Submitted">
                  Submitted
                </option>

                <option value="Under Review">
                  Under Review
                </option>

                <option value="Accepted">
                  Accepted
                </option>

                <option value="Rejected">
                  Rejected
                </option>

              </select>

            </div>

            {/* Grade */}
            <div>

              <label
                htmlFor="grade"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Grade
              </label>

              <select
                id="grade"
                value={gradeFilter}
                onChange={(event) =>
                  setGradeFilter(event.target.value)
                }
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              >

                <option value="All">
                  All Grades
                </option>

                <option value="9">
                  Grade 9
                </option>

                <option value="10">
                  Grade 10
                </option>

                <option value="11">
                  Grade 11
                </option>

                <option value="12">
                  Grade 12
                </option>

              </select>

            </div>

          </div>

        </section>

        {/* Results */}
        <section className="mt-6 overflow-hidden rounded-xl bg-white shadow-sm">

          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">

            <div>

              <h2 className="font-semibold text-gray-900">
                Admission Applications
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                {filteredApplications.length} application(s) found
              </p>

            </div>

          </div>

          {/* Desktop Table */}
          <div className="hidden overflow-x-auto md:block">

            <table className="w-full">

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
                    Submitted
                  </th>

                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Status
                  </th>

                  <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody className="divide-y divide-gray-100">

                {filteredApplications.map((application) => (

                  <tr
                    key={application.id}
                    className="hover:bg-gray-50"
                  >

                    <td className="px-6 py-4">

                      <Link
                        to={`/admin/applications/${application.id}`}
                        className="text-sm font-semibold text-blue-700 hover:text-blue-900"
                      >
                        {application.id}
                      </Link>

                    </td>

                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {application.studentName}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      Grade {application.grade}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {application.date}
                    </td>

                    <td className="px-6 py-4">

                      <StatusBadge
                        status={application.status}
                      />

                    </td>

                    <td className="px-6 py-4 text-right">

                      <Link
                        to={`/admin/applications/${application.id}`}
                        className="text-sm font-semibold text-blue-700 hover:text-blue-900"
                      >
                        Review
                      </Link>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* Mobile Cards */}
          <div className="divide-y divide-gray-100 md:hidden">

            {filteredApplications.map((application) => (

              <div
                key={application.id}
                className="p-5"
              >

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <Link
                      to={`/admin/applications/${application.id}`}
                      className="text-sm font-semibold text-blue-700"
                    >
                      {application.id}
                    </Link>

                    <p className="mt-2 font-semibold text-gray-900">
                      {application.studentName}
                    </p>

                  </div>

                  <StatusBadge
                    status={application.status}
                  />

                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">

                  <div>

                    <p className="text-xs text-gray-400">
                      Grade
                    </p>

                    <p className="mt-1 text-sm text-gray-700">
                      Grade {application.grade}
                    </p>

                  </div>

                  <div>

                    <p className="text-xs text-gray-400">
                      Submitted
                    </p>

                    <p className="mt-1 text-sm text-gray-700">
                      {application.date}
                    </p>

                  </div>

                </div>

                <Link
                  to={`/admin/applications/${application.id}`}
                  className="mt-4 inline-block text-sm font-semibold text-blue-700"
                >
                  Review Application →
                </Link>

              </div>

            ))}

          </div>

          {/* Empty State */}
          {filteredApplications.length === 0 && (
            <div className="px-6 py-16 text-center">

              <p className="font-semibold text-gray-900">
                No applications found
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Try changing your search or filters.
              </p>

            </div>
          )}

        </section>

      </main>

    </div>
  )
}

function StatusBadge({ status }) {
  const styles = {
    Submitted: 'bg-blue-100 text-blue-700',
    'Under Review': 'bg-yellow-100 text-yellow-700',
    Accepted: 'bg-green-100 text-green-700',
    Rejected: 'bg-red-100 text-red-700',
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

export default Applications
