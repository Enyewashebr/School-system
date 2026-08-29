import { Link } from 'react-router-dom'

function ParentStudent() {
  const student = {
    firstName: 'John',
    middleName: 'Michael',
    lastName: 'Doe',
    dateOfBirth: 'March 12, 2010',
    gender: 'Male',
    grade: 'Grade 10',
    phone: '+000 000 000',
    email: 'john@example.com',

    applicationNumber: 'APP-2026-123456',
    applicationStatus: 'Under Review',
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
            to="/parent"
            className="text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            ← Dashboard
          </Link>

        </div>

      </header>

      <main className="mx-auto max-w-5xl px-6 py-8">

        <div>

          <p className="text-sm font-medium text-blue-700">
            Student Information
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            {student.firstName} {student.lastName}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Registered student information
          </p>

        </div>

        {/* Application */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Application Number
              </p>

              <p className="mt-1 font-bold text-gray-900">
                {student.applicationNumber}
              </p>

            </div>

            <span className="w-fit rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
              {student.applicationStatus}
            </span>

          </div>

          <Link
            to="/application-status"
            className="mt-5 inline-block text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            View Full Application Status →
          </Link>

        </section>

        {/* Student Information */}
        <section className="mt-8 rounded-xl bg-white shadow-sm">

          <div className="border-b border-gray-100 px-6 py-5">

            <h2 className="font-semibold text-gray-900">
              Student Information
            </h2>

          </div>

          <div className="grid gap-6 p-6 sm:grid-cols-2">

            <Info
              label="First Name"
              value={student.firstName}
            />

            <Info
              label="Middle Name"
              value={student.middleName}
            />

            <Info
              label="Last Name"
              value={student.lastName}
            />

            <Info
              label="Date of Birth"
              value={student.dateOfBirth}
            />

            <Info
              label="Gender"
              value={student.gender}
            />

            <Info
              label="Grade"
              value={student.grade}
            />

            <Info
              label="Phone"
              value={student.phone}
            />

            <Info
              label="Email"
              value={student.email}
            />

          </div>

        </section>

        {/* Notice */}
        <div className="mt-6 rounded-xl border border-yellow-100 bg-yellow-50 p-5">

          <p className="text-sm font-semibold text-yellow-900">
            Information changes
          </p>

          <p className="mt-1 text-sm leading-6 text-yellow-800">
            If any student information needs to be corrected,
            please contact the school administration.
          </p>

        </div>

      </main>

    </div>
  )
}

function Info({ label, value }) {
  return (
    <div>

      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-gray-900">
        {value}
      </p>

    </div>
  )
}

export default ParentStudent
