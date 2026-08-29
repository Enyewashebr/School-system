import { Link } from 'react-router-dom'

function StudentProfile() {
  const student = {
    firstName: 'John',
    middleName: 'Michael',
    lastName: 'Doe',
    dateOfBirth: 'March 12, 2010',
    gender: 'Male',
    phone: '+000 000 000',
    email: 'john@example.com',

    grade: 'Grade 10',

    guardianName: 'Robert Doe',
    guardianRelationship: 'Parent',
    guardianPhone: '+000 000 001',
    guardianEmail: 'robert@example.com',
    guardianAddress: 'School District',
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
              Student Portal
            </p>

          </div>

          <Link
            to="/student"
            className="text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            ← Dashboard
          </Link>

        </div>

      </header>

      <main className="mx-auto max-w-5xl px-6 py-8">

        <div>

          <p className="text-sm font-medium text-blue-700">
            Student Portal
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            My Profile
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            View your registered student information.
          </p>

        </div>

        {/* Student Information */}
        <ProfileSection title="Student Information">

          <ProfileItem
            label="First Name"
            value={student.firstName}
          />

          <ProfileItem
            label="Middle Name"
            value={student.middleName}
          />

          <ProfileItem
            label="Last Name"
            value={student.lastName}
          />

          <ProfileItem
            label="Date of Birth"
            value={student.dateOfBirth}
          />

          <ProfileItem
            label="Gender"
            value={student.gender}
          />

          <ProfileItem
            label="Grade"
            value={student.grade}
          />

          <ProfileItem
            label="Phone"
            value={student.phone}
          />

          <ProfileItem
            label="Email"
            value={student.email}
          />

        </ProfileSection>

        {/* Guardian Information */}
        <ProfileSection title="Parent / Guardian Information">

          <ProfileItem
            label="Name"
            value={student.guardianName}
          />

          <ProfileItem
            label="Relationship"
            value={student.guardianRelationship}
          />

          <ProfileItem
            label="Phone"
            value={student.guardianPhone}
          />

          <ProfileItem
            label="Email"
            value={student.guardianEmail}
          />

          <div className="sm:col-span-2">

            <ProfileItem
              label="Address"
              value={student.guardianAddress}
            />

          </div>

        </ProfileSection>

        {/* Notice */}
        <div className="mt-6 rounded-xl border border-yellow-100 bg-yellow-50 p-5">

          <p className="text-sm font-semibold text-yellow-900">
            Need to change your information?
          </p>

          <p className="mt-1 text-sm leading-6 text-yellow-800">
            Some student information may require approval from
            the school administration before it can be changed.
          </p>

        </div>

      </main>

    </div>
  )
}

function ProfileSection({
  title,
  children,
}) {
  return (
    <section className="mt-8 rounded-xl bg-white shadow-sm">

      <div className="border-b border-gray-100 px-6 py-5">

        <h2 className="font-semibold text-gray-900">
          {title}
        </h2>

      </div>

      <div className="grid gap-6 p-6 sm:grid-cols-2">
        {children}
      </div>

    </section>
  )
}

function ProfileItem({
  label,
  value,
}) {
  return (
    <div>

      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-gray-900">
        {value || 'Not provided'}
      </p>

    </div>
  )
}

export default StudentProfile
