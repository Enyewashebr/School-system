import { Link, useParams } from 'react-router-dom'

function StudentDetails() {
  const { id } = useParams()

  // Temporary frontend data.
  // Later this will come from the Node.js API.
  const student = {
    id,
    studentNumber: 'STU-2026-000001',
    status: 'Active',

    personal: {
      firstName: 'Abebe',
      middleName: 'Example',
      lastName: 'Student',
      dateOfBirth: 'January 15, 2010',
      gender: 'Male',
      phone: '+000 000 0000',
      email: 'abebe@example.com',
      address: 'School District / City',
    },

    guardian: {
      name: 'Example Parent',
      relationship: 'Father',
      phone: '+000 000 0000',
      email: 'parent@example.com',
    },

    academic: {
      grade: 'Grade 9',
      academicYear: '2026/2027',
      admissionDate: 'August 28, 2026',
      previousSchool: 'Previous Government School',
    },

    account: {
      username: 'STU-2026-000001',
      accountStatus: 'Active',
      role: 'Student',
    },
  }

  return (
    <div className="p-6 md:p-8">

      {/* Back */}
      <Link
        to="/admin/students"
        className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-900"
      >
        ← Back to Students
      </Link>

      {/* Header */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700">
            AS
          </div>

          <div>
            <p className="text-sm font-medium text-blue-700">
              Student
            </p>

            <h1 className="mt-1 text-2xl font-bold text-gray-900">
              {student.personal.firstName}{' '}
              {student.personal.middleName}{' '}
              {student.personal.lastName}
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              {student.studentNumber}
            </p>
          </div>

        </div>

        <span className="w-fit rounded-full bg-green-100 px-4 py-2 text-xs font-semibold text-green-700">
          {student.status}
        </span>

      </div>

      {/* Personal Information */}
      <section className="mt-8 rounded-xl bg-white shadow-sm">

        <SectionHeader title="Personal Information" />

        <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">

          <InfoItem
            label="First Name"
            value={student.personal.firstName}
          />

          <InfoItem
            label="Middle Name"
            value={student.personal.middleName}
          />

          <InfoItem
            label="Last Name"
            value={student.personal.lastName}
          />

          <InfoItem
            label="Date of Birth"
            value={student.personal.dateOfBirth}
          />

          <InfoItem
            label="Gender"
            value={student.personal.gender}
          />

          <InfoItem
            label="Phone"
            value={student.personal.phone}
          />

          <InfoItem
            label="Email"
            value={student.personal.email}
          />

          <div className="sm:col-span-2 lg:col-span-3">
            <InfoItem
              label="Address"
              value={student.personal.address}
            />
          </div>

        </div>

      </section>

      {/* Guardian Information */}
      <section className="mt-6 rounded-xl bg-white shadow-sm">

        <SectionHeader title="Guardian Information" />

        <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">

          <InfoItem
            label="Guardian Name"
            value={student.guardian.name}
          />

          <InfoItem
            label="Relationship"
            value={student.guardian.relationship}
          />

          <InfoItem
            label="Phone"
            value={student.guardian.phone}
          />

          <InfoItem
            label="Email"
            value={student.guardian.email}
          />

        </div>

      </section>

      {/* Academic Information */}
      <section className="mt-6 rounded-xl bg-white shadow-sm">

        <SectionHeader title="Academic Information" />

        <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">

          <InfoItem
            label="Grade"
            value={student.academic.grade}
          />

          <InfoItem
            label="Academic Year"
            value={student.academic.academicYear}
          />

          <InfoItem
            label="Admission Date"
            value={student.academic.admissionDate}
          />

          <InfoItem
            label="Previous School"
            value={student.academic.previousSchool}
          />

        </div>

      </section>

      {/* Account Information */}
      <section className="mt-6 rounded-xl bg-white shadow-sm">

        <SectionHeader title="Account Information" />

        <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">

          <InfoItem
            label="Username"
            value={student.account.username}
          />

          <InfoItem
            label="Role"
            value={student.account.role}
          />

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Account Status
            </p>

            <p className="mt-2">
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                {student.account.accountStatus}
              </span>
            </p>
          </div>

        </div>

      </section>

      {/* Actions */}
      <section className="mt-6 flex flex-col gap-3 sm:flex-row">

        <button
          type="button"
          className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
        >
          Edit Student
        </button>

        <button
          type="button"
          className="rounded-lg border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-red-600 hover:bg-red-50"
        >
          Deactivate Account
        </button>

      </section>

      {/* Temporary Notice */}
      <div className="mt-6 rounded-xl border border-yellow-200 bg-yellow-50 p-5">

        <p className="text-sm leading-6 text-yellow-800">
          Student editing and account deactivation will be connected
          to the backend later.
        </p>

      </div>

    </div>
  )
}

function SectionHeader({ title }) {
  return (
    <div className="border-b border-gray-100 px-6 py-5">
      <h2 className="font-semibold text-gray-900">
        {title}
      </h2>
    </div>
  )
}

function InfoItem({ label, value }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold text-gray-900">
        {value || 'Not provided'}
      </p>
    </div>
  )
}

export default StudentDetails
