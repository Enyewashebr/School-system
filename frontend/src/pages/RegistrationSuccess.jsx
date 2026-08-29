import { Link, useLocation } from 'react-router-dom'

function RegistrationSuccess() {
  const location = useLocation()

  const applicationId =
    location.state?.applicationId || 'APP-2026-001'

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
          ✓
        </div>

        <h1 className="mt-5 text-2xl font-bold text-gray-900">
          Registration Submitted
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          Your student registration has been submitted successfully.
        </p>

        <div className="mt-6 rounded-lg bg-gray-50 p-4">
          <p className="text-xs text-gray-500">
            Application ID
          </p>

          <p className="mt-1 text-lg font-bold text-blue-700">
            {applicationId}
          </p>
        </div>

        <p className="mt-5 text-xs text-gray-400">
          Keep this Application ID to check your application status.
        </p>

        <div className="mt-7 flex flex-col gap-3">

          <Link
            to="/application-status"
            className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white"
          >
            Check Application Status
          </Link>

          <Link
            to="/"
            className="text-sm font-semibold text-gray-600"
          >
            Return Home
          </Link>

        </div>

      </div>

    </div>
  )
}

export default RegistrationSuccess
