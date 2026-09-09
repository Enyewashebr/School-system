import { useState } from 'react'
import { Link } from 'react-router-dom'

function ApplicationStatus() {
  const [applicationId, setApplicationId] = useState('')
  const [application, setApplication] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const checkStatus = async (event) => {
    event.preventDefault()

    if (!applicationId.trim()) {
      setError('Please enter your application number.')
      return
    }

    setLoading(true)
    setError('')
    setApplication(null)

    try {
      const response = await fetch(
        `http://localhost:5000/api/applications/${applicationId.trim()}`
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Application not found')
      }

      setApplication(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          <div>
            <p className="text-lg font-bold text-gray-900">
              School Portal
            </p>

            <p className="text-xs text-gray-500">
              Application Status
            </p>
          </div>

          <Link
            to="/"
            className="text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            ← School Website
          </Link>

        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10">

        {/* Heading */}
        <div className="text-center">

          <p className="text-sm font-medium text-blue-700">
            Admission
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Application Status
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Enter your application number to check your application.
          </p>

        </div>

        {/* Search Form */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">

          <form
            onSubmit={checkStatus}
            className="flex flex-col gap-4 sm:flex-row"
          >

            <input
              type="text"
              value={applicationId}
              onChange={(event) =>
                setApplicationId(event.target.value)
              }
              placeholder="e.g. APP-1756123456789"
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Checking...' : 'Check Status'}
            </button>

          </form>

          {error && (
            <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4">
              <p className="text-sm font-medium text-red-700">
                {error}
              </p>
            </div>
          )}

        </section>

        {/* Application Result */}
        {application && (
          <>
            {/* Summary */}
            <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Application Number
                  </p>

                  <p className="mt-1 text-lg font-bold text-gray-900">
                    {application.application_id}
                  </p>
                </div>

                <StatusBadge status={application.status} />

              </div>

              <div className="mt-6 grid gap-5 border-t border-gray-100 pt-6 sm:grid-cols-3">

                <Info
                  label="Student"
                  value={application.full_name}
                />

                <Info
                  label="Requested Grade"
                  value={`Grade ${application.grade}`}
                />

                <Info
                  label="Submitted"
                  value={formatDate(application.submitted_at)}
                />

              </div>

            </section>

            {/* Timeline */}
            <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">

              <h2 className="font-semibold text-gray-900">
                Application Progress
              </h2>

              <div className="mt-8">
                <Timeline application={application} />
              </div>

            </section>

            {/* Status Message */}
            <StatusMessage status={application.status} />

          </>
        )}

        {/* Back */}
        <div className="mt-8 text-center">

          <Link
            to="/"
            className="text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            Return to School Website
          </Link>

        </div>

      </main>

    </div>
  )
}


/* Timeline */

function Timeline({ application }) {
  const status = normalizeStatus(application.status)

  const steps = [
    {
      title: 'Application Submitted',
      description:
        'Your application has been successfully submitted.',
      completed: true,
    },
    {
      title: 'Application Under Review',
      description:
        'The school administration is reviewing your application.',
      completed:
        status === 'under review' ||
        status === 'accepted' ||
        status === 'rejected',
    },
    {
      title:
        status === 'rejected'
          ? 'Application Rejected'
          : 'Admission Decision',
      description:
        status === 'rejected'
          ? 'Your application was not approved.'
          : status === 'accepted'
            ? 'Your application has been approved by the school.'
            : 'The school has not made a final decision yet.',
      completed:
        status === 'accepted' ||
        status === 'rejected',
    },
  ]

  return (
    <>
      {steps.map((step, index) => (
        <TimelineStep
          key={step.title}
          title={step.title}
          description={step.description}
          completed={step.completed}
          isLast={index === steps.length - 1}
        />
      ))}
    </>
  )
}


/* Timeline Step */

function TimelineStep({
  title,
  description,
  completed,
  isLast,
}) {
  return (
    <div className="flex gap-4">

      <div className="flex flex-col items-center">

        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
            completed
              ? 'bg-blue-700 text-white'
              : 'border-2 border-gray-200 bg-white text-gray-400'
          }`}
        >
          {completed ? '✓' : ''}
        </div>

        {!isLast && (
          <div
            className={`mt-2 h-14 w-px ${
              completed
                ? 'bg-blue-200'
                : 'bg-gray-200'
            }`}
          />
        )}

      </div>

      <div className="pb-8">

        <h3
          className={`text-sm font-semibold ${
            completed
              ? 'text-gray-900'
              : 'text-gray-400'
          }`}
        >
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-gray-500">
          {description}
        </p>

      </div>

    </div>
  )
}


/* Status Message */

function StatusMessage({ status }) {
  const normalizedStatus = normalizeStatus(status)

  if (normalizedStatus === 'accepted') {
    return (
      <section className="mt-6 rounded-xl border border-green-200 bg-green-50 p-6">

        <h2 className="font-semibold text-green-900">
          Application Accepted
        </h2>

        <p className="mt-2 text-sm leading-6 text-green-800">
          Congratulations! Your application has been accepted.
          Please follow the instructions provided by the school
          for the next steps.
        </p>

      </section>
    )
  }

  if (normalizedStatus === 'rejected') {
    return (
      <section className="mt-6 rounded-xl border border-red-200 bg-red-50 p-6">

        <h2 className="font-semibold text-red-900">
          Application Rejected
        </h2>

        <p className="mt-2 text-sm leading-6 text-red-800">
          Your application was not approved. Please contact the
          school administration if you need more information.
        </p>

      </section>
    )
  }

  if (
    normalizedStatus === 'under review' ||
    normalizedStatus === 'pending'
  ) {
    return (
      <section className="mt-6 rounded-xl border border-yellow-200 bg-yellow-50 p-6">

        <h2 className="font-semibold text-yellow-900">
          Application Under Review
        </h2>

        <p className="mt-2 text-sm leading-6 text-yellow-800">
          Your application is currently being reviewed by the
          school administration. Please check again later for
          the final decision.
        </p>

      </section>
    )
  }

  return (
    <section className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-6">

      <h2 className="font-semibold text-blue-900">
        Application Submitted
      </h2>

      <p className="mt-2 text-sm leading-6 text-blue-800">
        Your application has been received by the school.
      </p>

    </section>
  )
}


/* Status Badge */

function StatusBadge({ status }) {
  const normalizedStatus = normalizeStatus(status)

  const styles = {
    submitted: 'bg-blue-100 text-blue-700',
    pending: 'bg-yellow-100 text-yellow-700',
    'under review': 'bg-yellow-100 text-yellow-700',
    accepted: 'bg-green-100 text-green-700',
    rejected: 'bg-red-100 text-red-700',
  }

  const labels = {
    submitted: 'Submitted',
    pending: 'Under Review',
    'under review': 'Under Review',
    accepted: 'Accepted',
    rejected: 'Rejected',
  }

  return (
    <span
      className={`w-fit rounded-full px-4 py-2 text-xs font-semibold ${
        styles[normalizedStatus] ||
        'bg-gray-100 text-gray-600'
      }`}
    >
      {labels[normalizedStatus] || status}
    </span>
  )
}


/* Info */

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


/* Helpers */

function normalizeStatus(status) {
  return String(status || '')
    .toLowerCase()
    .trim()
}

function formatDate(date) {
  if (!date) return '—'

  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default ApplicationStatus
