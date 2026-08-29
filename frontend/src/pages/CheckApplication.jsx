import { useState } from 'react'

function CheckApplication() {
  const [applicationNumber, setApplicationNumber] = useState('')
  const [application, setApplication] = useState(null)
  const [error, setError] = useState('')

  const handleCheck = (e) => {
    e.preventDefault()

    setError('')
    setApplication(null)

    if (!applicationNumber.trim()) {
      setError('Please enter your application number.')
      return
    }

    // Temporary demo application
    setApplication({
      number: applicationNumber.trim().toUpperCase(),
      status: 'Pending Review',
      submittedDate: 'August 26, 2026',
      message:
        'Your application has been received and is currently being reviewed by the school administration.',
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-3xl px-6">

        {/* Header */}
        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Application Status
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            Check Your Application
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Enter your application number to check the current
            status of your student registration.
          </p>

        </div>

        {/* Search Card */}
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm md:p-8">

          <form onSubmit={handleCheck}>

            <label
              htmlFor="applicationNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Application Number
            </label>

            <input
              id="applicationNumber"
              type="text"
              value={applicationNumber}
              onChange={(e) => setApplicationNumber(e.target.value)}
              placeholder="Example: APP-2026-000001"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm uppercase outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

            {error && (
              <p className="mt-2 text-sm text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-5 w-full rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Check Status
            </button>

          </form>

        </div>

        {/* Result */}
        {application && (
          <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm md:p-8">

            <div className="flex items-center justify-between border-b pb-5">

              <div>
                <p className="text-xs font-medium uppercase text-gray-500">
                  Application Number
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {application.number}
                </p>
              </div>

              <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                {application.status}
              </span>

            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">

              <div>
                <p className="text-xs font-medium uppercase text-gray-500">
                  Submitted
                </p>

                <p className="mt-1 text-sm text-gray-900">
                  {application.submittedDate}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase text-gray-500">
                  Current Status
                </p>

                <p className="mt-1 text-sm font-semibold text-yellow-600">
                  {application.status}
                </p>
              </div>

            </div>

            <div className="mt-6 rounded-lg bg-blue-50 p-4">

              <p className="text-sm leading-6 text-blue-800">
                {application.message}
              </p>

            </div>

          </div>
        )}

        {/* Information */}
        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">

          <h2 className="font-semibold text-gray-900">
            Where can I find my application number?
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Your application number is displayed after you
            successfully submit the registration form. Keep it
            safe because you will need it to check your application
            status.
          </p>

        </div>

      </div>
    </div>
  )
}

export default CheckApplication
