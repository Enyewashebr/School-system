import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ApplicationReview() {
  const { id } = useParams()

  const [status, setStatus] = useState('Under Review')
  const [showRejectBox, setShowRejectBox] = useState(false)
  const [rejectionReason, setRejectionReason] = useState('')

  // Temporary data.
  // This will come from the Node.js API later.
  const application = {
    id: id || 'APP-2026-123456',

    student: {
      firstName: 'John',
      middleName: 'Michael',
      lastName: 'Doe',
      dateOfBirth: 'March 12, 2010',
      gender: 'Male',
      phone: '+000 000 000',
      email: 'john@example.com',
      requestedGrade: 'Grade 10',
      previousSchool: 'Central Secondary School',
    },

    guardian: {
      name: 'Robert Doe',
      relationship: 'Father',
      phone: '+000 000 001',
      email: 'robert@example.com',
      address: 'School District',
    },

    submittedAt: 'August 20, 2026',
  }

  const handleAccept = () => {
    setStatus('Accepted')
    setShowRejectBox(false)
  }

  const handleReject = () => {
    if (!rejectionReason.trim()) {
      return
    }

    setStatus('Rejected')
    setShowRejectBox(false)
  }

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
            to="/admin/applications"
            className="text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            ← Applications
          </Link>

        </div>

      </header>

      <main className="mx-auto max-w-5xl px-6 py-8">

        {/* Page Header */}
        <div>

          <p className="text-sm font-medium text-blue-700">
            Admissions
          </p>

          <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <h1 className="text-3xl font-bold text-gray-900">
                Review Application
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Application {application.id}
              </p>

            </div>

            <StatusBadge status={status} />

          </div>

        </div>

        {/* Application Details */}
        <div className="mt-8 space-y-6">

          {/* Student Information */}
          <section className="rounded-xl bg-white shadow-sm">

            <SectionHeader title="Student Information" />

            <div className="grid gap-6 p-6 sm:grid-cols-2">

              <Info
                label="First Name"
                value={application.student.firstName}
              />

              <Info
                label="Middle Name"
                value={application.student.middleName}
              />

              <Info
                label="Last Name"
                value={application.student.lastName}
              />

              <Info
                label="Date of Birth"
                value={application.student.dateOfBirth}
              />

              <Info
                label="Gender"
                value={application.student.gender}
              />

              <Info
                label="Phone"
                value={application.student.phone}
              />

              <Info
                label="Email"
                value={application.student.email}
              />

              <Info
                label="Requested Grade"
                value={application.student.requestedGrade}
              />

              <div className="sm:col-span-2">

                <Info
                  label="Previous School"
                  value={application.student.previousSchool}
                />

              </div>

            </div>

          </section>

          {/* Guardian Information */}
          <section className="rounded-xl bg-white shadow-sm">

            <SectionHeader title="Parent / Guardian Information" />

            <div className="grid gap-6 p-6 sm:grid-cols-2">

              <Info
                label="Full Name"
                value={application.guardian.name}
              />

              <Info
                label="Relationship"
                value={application.guardian.relationship}
              />

              <Info
                label="Phone"
                value={application.guardian.phone}
              />

              <Info
                label="Email"
                value={application.guardian.email}
              />

              <div className="sm:col-span-2">

                <Info
                  label="Address"
                  value={application.guardian.address}
                />

              </div>

            </div>

          </section>

          {/* Application Information */}
          <section className="rounded-xl bg-white shadow-sm">

            <SectionHeader title="Application Information" />

            <div className="grid gap-6 p-6 sm:grid-cols-2">

              <Info
                label="Application Number"
                value={application.id}
              />

              <Info
                label="Submitted Date"
                value={application.submittedAt}
              />

              <Info
                label="Requested Grade"
                value={application.student.requestedGrade}
              />

              <Info
                label="Current Status"
                value={status}
              />

            </div>

          </section>

          {/* Rejection Reason */}
          {status === 'Rejected' && (
            <section className="rounded-xl border border-red-200 bg-red-50 p-6">

              <h2 className="font-semibold text-red-900">
                Rejection Reason
              </h2>

              <p className="mt-2 text-sm text-red-800">
                {rejectionReason}
              </p>

            </section>
          )}

          {/* Actions */}
          {status === 'Under Review' || status === 'Submitted' ? (
            <section className="rounded-xl bg-white p-6 shadow-sm">

              <h2 className="font-semibold text-gray-900">
                Application Decision
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Review the information above before making a decision.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">

                <button
                  type="button"
                  onClick={handleAccept}
                  className="rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700"
                >
                  Accept Application
                </button>

                <button
                  type="button"
                  onClick={() => setShowRejectBox(!showRejectBox)}
                  className="rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700"
                >
                  Reject Application
                </button>

              </div>

              {showRejectBox && (
                <div className="mt-6 rounded-lg border border-red-100 bg-red-50 p-5">

                  <label
                    htmlFor="rejectionReason"
                    className="block text-sm font-semibold text-red-900"
                  >
                    Reason for rejection
                  </label>

                  <textarea
                    id="rejectionReason"
                    value={rejectionReason}
                    onChange={(event) =>
                      setRejectionReason(event.target.value)
                    }
                    rows="4"
                    placeholder="Enter the reason for rejecting this application..."
                    className="mt-3 w-full rounded-lg border border-red-200 bg-white px-4 py-3 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  />

                  <div className="mt-4 flex gap-3">

                    <button
                      type="button"
                      onClick={handleReject}
                      disabled={!rejectionReason.trim()}
                      className="rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Confirm Rejection
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowRejectBox(false)}
                      className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>

                  </div>

                </div>
              )}

            </section>
          ) : (
            <section className="rounded-xl bg-white p-6 shadow-sm">

              <p className="text-sm text-gray-500">
                This application has already been reviewed.
              </p>

            </section>
          )}

        </div>

      </main>

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

function Info({ label, value }) {
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

function StatusBadge({ status }) {
  const styles = {
    Submitted: 'bg-blue-100 text-blue-700',
    'Under Review': 'bg-yellow-100 text-yellow-700',
    Accepted: 'bg-green-100 text-green-700',
    Rejected: 'bg-red-100 text-red-700',
  }

  return (
    <span
      className={`w-fit rounded-full px-4 py-2 text-xs font-semibold ${
        styles[status] || 'bg-gray-100 text-gray-600'
      }`}
    >
      {status}
    </span>
  )
}

export default ApplicationReview
