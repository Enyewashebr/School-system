import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

function Students() {
  const [search, setSearch] = useState('')
  const [gradeFilter, setGradeFilter] = useState('All')

  const students = [
    {
      id: 'STU-2026-001',
      name: 'John Doe',
      grade: '10',
      gender: 'Male',
      phone: '+000 000 000',
      status: 'Active',
    },
    {
      id: 'STU-2026-002',
      name: 'Jane Smith',
      grade: '11',
      gender: 'Female',
      phone: '+000 000 001',
      status: 'Active',
    },
    {
      id: 'STU-2026-003',
      name: 'Michael Brown',
      grade: '9',
      gender: 'Male',
      phone: '+000 000 002',
      status: 'Active',
    },
    {
      id: 'STU-2026-004',
      name: 'Sarah Johnson',
      grade: '12',
      gender: 'Female',
      phone: '+000 000 003',
      status: 'Active',
    },
    {
      id: 'STU-2026-005',
      name: 'David Wilson',
      grade: '10',
      gender: 'Male',
      phone: '+000 000 004',
      status: 'Active',
    },
  ]

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch =
        student.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        student.id
          .toLowerCase()
          .includes(search.toLowerCase())

      const matchesGrade =
        gradeFilter === 'All' ||
        student.grade === gradeFilter

      return matchesSearch && matchesGrade
    })
  }, [search, gradeFilter])

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

        {/* Heading */}
        <div>

          <p className="text-sm font-medium text-blue-700">
            School Records
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Students
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            View registered students in the school.
          </p>

        </div>

        {/* Filters */}
        <section className="mt-8 rounded-xl bg-white p-5 shadow-sm">

          <div className="grid gap-4 md:grid-cols-2">

            {/* Search */}
            <div>

              <label
                htmlFor="student-search"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Search
              </label>

              <input
                id="student-search"
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Student name or ID"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

            </div>

            {/* Grade */}
            <div>

              <label
                htmlFor="student-grade"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Grade
              </label>

              <select
                id="student-grade"
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

        {/* Student Table */}
        <section className="mt-6 overflow-hidden rounded-xl bg-white shadow-sm">

          <div className="border-b border-gray-100 px-6 py-5">

            <h2 className="font-semibold text-gray-900">
              Registered Students
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              {filteredStudents.length} student(s) found
            </p>

          </div>

          {/* Desktop */}
          <div className="hidden overflow-x-auto md:block">

            <table className="w-full">

              <thead className="bg-gray-50">

                <tr>

                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Student ID
                  </th>

                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Student
                  </th>

                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Grade
                  </th>

                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Gender
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

                {filteredStudents.map((student) => (

                  <tr
                    key={student.id}
                    className="hover:bg-gray-50"
                  >

                    <td className="px-6 py-4">

                      <Link
                        to={`/admin/students/${student.id}`}
                        className="text-sm font-semibold text-blue-700 hover:text-blue-900"
                      >
                        {student.id}
                      </Link>

                    </td>

                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {student.name}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      Grade {student.grade}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {student.gender}
                    </td>

                    <td className="px-6 py-4">

                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                        {student.status}
                      </span>

                    </td>

                    <td className="px-6 py-4 text-right">

                      <Link
                        to={`/admin/students/${student.id}`}
                        className="text-sm font-semibold text-blue-700 hover:text-blue-900"
                      >
                        View
                      </Link>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* Mobile */}
          <div className="divide-y divide-gray-100 md:hidden">

            {filteredStudents.map((student) => (

              <div
                key={student.id}
                className="p-5"
              >

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <Link
                      to={`/admin/students/${student.id}`}
                      className="text-sm font-semibold text-blue-700"
                    >
                      {student.id}
                    </Link>

                    <p className="mt-2 font-semibold text-gray-900">
                      {student.name}
                    </p>

                  </div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    {student.status}
                  </span>

                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">

                  <div>

                    <p className="text-xs text-gray-400">
                      Grade
                    </p>

                    <p className="mt-1 text-sm text-gray-700">
                      Grade {student.grade}
                    </p>

                  </div>

                  <div>

                    <p className="text-xs text-gray-400">
                      Gender
                    </p>

                    <p className="mt-1 text-sm text-gray-700">
                      {student.gender}
                    </p>

                  </div>

                </div>

                <Link
                  to={`/admin/students/${student.id}`}
                  className="mt-4 inline-block text-sm font-semibold text-blue-700"
                >
                  View Student →
                </Link>

              </div>

            ))}

          </div>

          {/* Empty */}
          {filteredStudents.length === 0 && (
            <div className="px-6 py-16 text-center">

              <p className="font-semibold text-gray-900">
                No students found
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Try changing your search or grade filter.
              </p>

            </div>
          )}

        </section>

      </main>

    </div>
  )
}

export default Students
