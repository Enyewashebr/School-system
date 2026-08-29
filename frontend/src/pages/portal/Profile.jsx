function Profile() {
  // Temporary frontend data.
  // This will come from the backend later.
  const student = {
    firstName: 'Abebe',
    middleName: 'Kebede',
    lastName: 'Example',
    dateOfBirth: 'January 15, 2010',
    gender: 'Male',
    phone: '+000 000 0000',
    email: 'abebe@example.com',
    address: 'School District / City',

    guardianName: 'Kebede Example',
    guardianRelationship: 'Father',
    guardianPhone: '+000 000 0000',
    guardianEmail: 'guardian@example.com',

    grade: 'Grade 9',
    studentNumber: 'STU-2026-000001',
    academicYear: '2026/2027',
  }

  return (
    <div className="p-6 md:p-8">

      {/* Header */}
      <div>
        <p className="text-sm font-medium text-blue-700">
          Student Portal
        </p>

        <h1 className="mt-1 text-2xl font-bold text-gray-900">
          My Profile
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          View your personal, guardian, and academic information.
        </p>
      </div>

      {/* Student Information */}
      <section className="mt-8 rounded-xl bg-white shadow-sm">

        <div className="border-b border-gray-100 px-6 py-5">
          <h2 className="font-semibold text-gray-900">
            Personal Information
          </h2>
        </div>

        <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">

          <InfoItem
            label="First Name"
            value={student.firstName}
          />

          <InfoItem
            label="Middle Name"
            value={student.middleName}
          />

          <InfoItem
            label="Last Name"
            value={student.lastName}
          />

          <InfoItem
            label="Date of Birth"
            value={student.dateOfBirth}
          />

          <InfoItem
            label="Gender"
            value={student.gender}
          />

          <InfoItem
            label="Phone"
            value={student.phone}
          />

          <InfoItem
            label="Email"
            value={student.email}
          />

          <div className="sm:col-span-2 lg:col-span-3">
            <InfoItem
              label="Address"
              value={student.address}
            />
          </div>

        </div>

      </section>

      {/* Guardian Information */}
      <section className="mt-6 rounded-xl bg-white shadow-sm">

        <div className="border-b border-gray-100 px-6 py-5">
          <h2 className="font-semibold text-gray-900">
            Guardian Information
          </h2>
        </div>

        <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">

          <InfoItem
            label="Guardian Name"
            value={student.guardianName}
          />

          <InfoItem
            label="Relationship"
            value={student.guardianRelationship}
          />

          <InfoItem
            label="Phone"
            value={student.guardianPhone}
          />

          <InfoItem
            label="Email"
            value={student.guardianEmail}
          />

        </div>

      </section>

      {/* Academic Information */}
      <section className="mt-6 rounded-xl bg-white shadow-sm">

        <div className="border-b border-gray-100 px-6 py-5">
          <h2 className="font-semibold text-gray-900">
            Academic Information
          </h2>
        </div>

        <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">

          <InfoItem
            label="Current Grade"
            value={student.grade}
          />

          <InfoItem
            label="Student Number"
            value={student.studentNumber}
          />

          <InfoItem
            label="Academic Year"
            value={student.academicYear}
          />

        </div>

      </section>

      {/* Notice */}
      <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-5">

        <p className="text-sm leading-6 text-blue-800">
          If any of your information is incorrect, please contact
          the school administration. Profile changes will be
          handled according to school policy.
        </p>

      </div>

    </div>
  )
}

function InfoItem({ label, value }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
        {label}
      </p>

      <p className="mt-2 text-sm font-medium text-gray-900">
        {value || 'Not provided'}
      </p>
    </div>
  )
}

export default Profile
