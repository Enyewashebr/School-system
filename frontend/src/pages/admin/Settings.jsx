import { useState } from 'react'

function Settings() {
  const [school, setSchool] = useState({
    name: 'Government Secondary School',
    code: 'SCH-001',
    address: 'School District / City',
    phone: '+000 000 0000',
    email: 'school@example.com',
  })

  const [principal, setPrincipal] = useState({
    firstName: 'School',
    lastName: 'Principal',
    phone: '+000 000 0000',
    email: 'principal@example.com',
  })

  const [passwords, setPasswords] = useState({
    current: '',
    newPassword: '',
    confirm: '',
  })

  const handleSchoolChange = (event) => {
    const { name, value } = event.target

    setSchool((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handlePrincipalChange = (event) => {
    const { name, value } = event.target

    setPrincipal((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handlePasswordChange = (event) => {
    const { name, value } = event.target

    setPasswords((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSchoolSubmit = (event) => {
    event.preventDefault()

    console.log('School information:', school)

    alert('School information saved.')
  }

  const handlePrincipalSubmit = (event) => {
    event.preventDefault()

    console.log('Principal profile:', principal)

    alert('Principal profile saved.')
  }

  const handlePasswordSubmit = (event) => {
    event.preventDefault()

    if (passwords.newPassword !== passwords.confirm) {
      alert('New passwords do not match.')
      return
    }

    if (passwords.newPassword.length < 8) {
      alert('New password must contain at least 8 characters.')
      return
    }

    console.log('Password change requested.')

    alert('Password changed successfully.')

    setPasswords({
      current: '',
      newPassword: '',
      confirm: '',
    })
  }

  return (
    <div className="p-6 md:p-8">

      {/* Header */}
      <div>
        <p className="text-sm font-medium text-blue-700">
          Administration
        </p>

        <h1 className="mt-1 text-2xl font-bold text-gray-900">
          Settings
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Manage school information and your administrator account.
        </p>
      </div>

      {/* School Information */}
      <section className="mt-8 max-w-4xl rounded-xl bg-white shadow-sm">

        <div className="border-b border-gray-100 px-6 py-5">

          <h2 className="font-semibold text-gray-900">
            School Information
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Information displayed throughout the school system.
          </p>

        </div>

        <form
          onSubmit={handleSchoolSubmit}
          className="space-y-6 p-6"
        >

          <div>

            <label
              htmlFor="school-name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              School Name
            </label>

            <input
              id="school-name"
              name="name"
              type="text"
              value={school.name}
              onChange={handleSchoolChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            <div>

              <label
                htmlFor="school-code"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                School Code
              </label>

              <input
                id="school-code"
                name="code"
                type="text"
                value={school.code}
                onChange={handleSchoolChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

            </div>

            <div>

              <label
                htmlFor="school-phone"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Phone
              </label>

              <input
                id="school-phone"
                name="phone"
                type="tel"
                value={school.phone}
                onChange={handleSchoolChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

            </div>

          </div>

          <div>

            <label
              htmlFor="school-address"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Address
            </label>

            <input
              id="school-address"
              name="address"
              type="text"
              value={school.address}
              onChange={handleSchoolChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          <div>

            <label
              htmlFor="school-email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              School Email
            </label>

            <input
              id="school-email"
              name="email"
              type="email"
              value={school.email}
              onChange={handleSchoolChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          <div className="flex justify-end">

            <button
              type="submit"
              className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Save School Information
            </button>

          </div>

        </form>

      </section>

      {/* Principal Profile */}
      <section className="mt-6 max-w-4xl rounded-xl bg-white shadow-sm">

        <div className="border-b border-gray-100 px-6 py-5">

          <h2 className="font-semibold text-gray-900">
            Principal Profile
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage the information associated with your administrator profile.
          </p>

        </div>

        <form
          onSubmit={handlePrincipalSubmit}
          className="space-y-6 p-6"
        >

          <div className="grid gap-6 sm:grid-cols-2">

            <div>

              <label
                htmlFor="principal-first-name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                First Name
              </label>

              <input
                id="principal-first-name"
                name="firstName"
                type="text"
                value={principal.firstName}
                onChange={handlePrincipalChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

            </div>

            <div>

              <label
                htmlFor="principal-last-name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>

              <input
                id="principal-last-name"
                name="lastName"
                type="text"
                value={principal.lastName}
                onChange={handlePrincipalChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

            </div>

          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            <div>

              <label
                htmlFor="principal-phone"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Phone
              </label>

              <input
                id="principal-phone"
                name="phone"
                type="tel"
                value={principal.phone}
                onChange={handlePrincipalChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

            </div>

            <div>

              <label
                htmlFor="principal-email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email
              </label>

              <input
                id="principal-email"
                name="email"
                type="email"
                value={principal.email}
                onChange={handlePrincipalChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

            </div>

          </div>

          <div className="flex justify-end">

            <button
              type="submit"
              className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Save Profile
            </button>

          </div>

        </form>

      </section>

      {/* Account */}
      <section className="mt-6 max-w-4xl rounded-xl bg-white shadow-sm">

        <div className="border-b border-gray-100 px-6 py-5">

          <h2 className="font-semibold text-gray-900">
            Account Information
          </h2>

        </div>

        <div className="grid gap-6 p-6 sm:grid-cols-3">

          <InfoItem
            label="Role"
            value="Principal"
          />

          <InfoItem
            label="Account Status"
            value="Active"
          />

          <InfoItem
            label="School Access"
            value="School Administrator"
          />

        </div>

      </section>

      {/* Change Password */}
      <section className="mt-6 max-w-4xl rounded-xl bg-white shadow-sm">

        <div className="border-b border-gray-100 px-6 py-5">

          <h2 className="font-semibold text-gray-900">
            Change Password
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Use a strong password that you do not use elsewhere.
          </p>

        </div>

        <form
          onSubmit={handlePasswordSubmit}
          className="space-y-6 p-6"
        >

          <div>

            <label
              htmlFor="current-password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Current Password
            </label>

            <input
              id="current-password"
              name="current"
              type="password"
              value={passwords.current}
              onChange={handlePasswordChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            <div>

              <label
                htmlFor="new-password"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                New Password
              </label>

              <input
                id="new-password"
                name="newPassword"
                type="password"
                value={passwords.newPassword}
                onChange={handlePasswordChange}
                minLength="8"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

            </div>

            <div>

              <label
                htmlFor="confirm-password"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Confirm New Password
              </label>

              <input
                id="confirm-password"
                name="confirm"
                type="password"
                value={passwords.confirm}
                onChange={handlePasswordChange}
                minLength="8"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

            </div>

          </div>

          <div className="flex justify-end">

            <button
              type="submit"
              className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Change Password
            </button>

          </div>

        </form>

      </section>

      {/* Frontend notice */}
      <div className="mt-6 max-w-4xl rounded-xl border border-yellow-200 bg-yellow-50 p-5">

        <p className="text-sm leading-6 text-yellow-800">
          Settings are currently frontend-only. School information,
          profile changes, and passwords will be saved securely through
          the Node.js backend later.
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

      <p className="mt-2 text-sm font-semibold text-gray-900">
        {value}
      </p>
    </div>
  )
}

export default Settings
