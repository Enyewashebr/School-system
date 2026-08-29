function Application() {
  const application = {
    number: 'APP-2026-000001',
    status: 'Pending Review',
    submittedDate: 'August 26, 2026',
    studentName: 'Abebe Kebede Example',
    grade: 'Grade 9',
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
          My Application
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          View your student registration application and its
          current status.
        </p>
      </div>

      {/* Application Summary */}
      <section className="mt-8 rounded-xl bg-white shadow-sm">

        <div className="flex flex-col gap-4 border-b border-gray-100 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Application Number
            </p>

            <p className="mt-1 text-lg font-bold text-gray-900">
              {application.number}
            </p>
          </div>

          <span className="w-fit rounded-full bg-yellow-100 px-4 py-2 text-xs font-semibold text-yellow-700">
            {application.status}
          </span>

        </div>

        <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">

          <InfoItem
            label="Applicant"
            value={application.studentName}
          />

          <InfoItem
            label="Applying Grade"
            value={application.grade}
          />

          <InfoItem
            label="Academic Year"
            value={application.academicYear}
          />

          <InfoItem
            label="Submitted"
            value={application.submittedDate}
          />

        </div>

      </section>

      {/* Application Timeline */}
      <section className="mt-6 rounded-xl bg-white p-6 shadow-sm">

        <h2 className="font-semibold text-gray-900">
          Application Timeline
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Track the progress of your application.
        </p>

        <div className="mt-8">

          {/* Submitted */}
          <TimelineItem
            title="Application Submitted"
            description="Your registration application was successfully submitted."
            date={application.submittedDate}
            status="completed"
            last={false}
          />

          {/* Review */}
          <TimelineItem
            title="Under Review"
            description="The school administration is reviewing your application."
            status="current"
            last={false}
          />

          {/* Decision */}
          <TimelineItem
            title="Admission Decision"
            description="The school will update your application after the review."
            status="pending"
            last={true}
          />

        </div>

      </section>

      {/* Documents */}
      <section className="mt-6 rounded-xl bg-white p-6 shadow-sm">

        <h2 className="font-semibold text-gray-900">
          Submitted Documents
        </h2>

        <div className="mt-5 space-y-3">

          <DocumentItem
            name="Identification Document"
            status="Submitted"
          />

          <DocumentItem
            name="Previous School Document"
            status="Submitted"
          />

          <DocumentItem
            name="Additional Document"
            status="Not submitted"
            optional
          />

        </div>

      </section>

      {/* Notice */}
      <div className="mt-6 rounded-xl border border-yellow-200 bg-yellow-50 p-5">

        <p className="text-sm leading-6 text-yellow-800">
          Your application is currently pending review. Please
          keep your application number for future reference.
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

function TimelineItem({
  title,
  description,
  date,
  status,
  last,
}) {
  const circleClass =
    status === 'completed'
      ? 'bg-green-600 text-white'
      : status === 'current'
        ? 'bg-yellow-500 text-white'
        : 'bg-gray-200 text-gray-500'

  const lineClass =
    status === 'completed'
      ? 'bg-green-600'
      : 'bg-gray-200'

  return (
    <div className="flex gap-4">

      {/* Timeline indicator */}
      <div className="flex flex-col items-center">

        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${circleClass}`}
        >
          {status === 'completed' ? '✓' : ''}
        </div>

        {!last && (
          <div className={`mt-1 h-16 w-0.5 ${lineClass}`} />
        )}

      </div>

      {/* Content */}
      <div className="pb-8">

        <div className="flex flex-wrap items-center gap-3">

          <h3 className="font-semibold text-gray-900">
            {title}
          </h3>

          {status === 'current' && (
            <span className="rounded-full bg-yellow-100 px-2.5 py-1 text-xs font-semibold text-yellow-700">
              Current
            </span>
          )}

        </div>

        <p className="mt-1 text-sm leading-6 text-gray-500">
          {description}
        </p>

        {date && (
          <p className="mt-2 text-xs font-medium text-gray-400">
            {date}
          </p>
        )}

      </div>

    </div>
  )
}

function DocumentItem({ name, status, optional }) {
  const submitted = status === 'Submitted'

  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-gray-100 p-4">

      <div className="flex items-center gap-3">

        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${
            submitted
              ? 'bg-green-100 text-green-600'
              : 'bg-gray-100 text-gray-500'
          }`}
        >
          {submitted ? '✓' : '—'}
        </div>

        <div>
          <p className="text-sm font-medium text-gray-900">
            {name}
          </p>

          {optional && (
            <p className="text-xs text-gray-400">
              Optional
            </p>
          )}
        </div>

      </div>

      <span
        className={`text-xs font-semibold ${
          submitted
            ? 'text-green-600'
            : 'text-gray-500'
        }`}
      >
        {status}
      </span>

    </div>
  )
}

export default Application
