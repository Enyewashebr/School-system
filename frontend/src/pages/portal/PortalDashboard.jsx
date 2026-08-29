function PortalDashboard() {
  return (
    <div className="p-6 md:p-8">

      {/* Header */}
      <div>
        <p className="text-sm font-medium text-blue-700">
          Student Portal
        </p>

        <h1 className="mt-1 text-2xl font-bold text-gray-900">
          Welcome, Abebe
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Here is an overview of your school information.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">

        {/* Application */}
        <div className="rounded-xl bg-white p-6 shadow-sm">

          <p className="text-sm text-gray-500">
            Application Status
          </p>

          <p className="mt-3 text-xl font-bold text-yellow-600">
            Pending Review
          </p>

          <p className="mt-2 text-xs text-gray-500">
            APP-2026-000001
          </p>

        </div>

        {/* Grade */}
        <div className="rounded-xl bg-white p-6 shadow-sm">

          <p className="text-sm text-gray-500">
            Applying Grade
          </p>

          <p className="mt-3 text-xl font-bold text-gray-900">
            Grade 9
          </p>

          <p className="mt-2 text-xs text-gray-500">
            Academic Year 2026/2027
          </p>

        </div>

        {/* Account */}
        <div className="rounded-xl bg-white p-6 shadow-sm">

          <p className="text-sm text-gray-500">
            Account
          </p>

          <p className="mt-3 text-xl font-bold text-green-600">
            Active
          </p>

          <p className="mt-2 text-xs text-gray-500">
            Student account
          </p>

        </div>

      </div>

      {/* Application Status */}
      <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

          <div>
            <h2 className="font-semibold text-gray-900">
              Application Status
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Your registration application is being reviewed.
            </p>
          </div>

          <span className="w-fit rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
            Pending Review
          </span>

        </div>

        {/* Progress */}
        <div className="mt-8">

          <div className="flex items-center">

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm text-white">
              ✓
            </div>

            <div className="h-1 flex-1 bg-green-600" />

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-sm text-white">
              2
            </div>

            <div className="h-1 flex-1 bg-gray-200" />

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm text-gray-500">
              3
            </div>

          </div>

          <div className="mt-3 flex justify-between text-xs text-gray-500">

            <span>
              Submitted
            </span>

            <span>
              Under Review
            </span>

            <span>
              Decision
            </span>

          </div>

        </div>

      </section>

      {/* Recent Information */}
      <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="font-semibold text-gray-900">
              Recent Information
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Important information from the school.
            </p>
          </div>

        </div>

        <div className="mt-6 divide-y divide-gray-100">

          <div className="py-4">

            <p className="font-medium text-gray-900">
              Registration applications are under review
            </p>

            <p className="mt-1 text-sm text-gray-500">
              The school administration is reviewing submitted
              applications.
            </p>

          </div>

          <div className="py-4">

            <p className="font-medium text-gray-900">
              Welcome to the Student Portal
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Please keep your account information secure.
            </p>

          </div>

        </div>

      </section>

    </div>
  )
}

export default PortalDashboard
