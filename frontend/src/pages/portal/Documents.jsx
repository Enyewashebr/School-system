function Documents() {
  const documents = [
    {
      id: 1,
      name: 'Identification Document',
      description: 'Official identification document',
      status: 'Submitted',
      date: 'August 26, 2026',
    },
    {
      id: 2,
      name: 'Previous School Document',
      description: 'Document from the previous school',
      status: 'Submitted',
      date: 'August 26, 2026',
    },
    {
      id: 3,
      name: 'Additional Document',
      description: 'Additional supporting document',
      status: 'Not submitted',
      date: null,
    },
  ]

  return (
    <div className="p-6 md:p-8">

      {/* Header */}
      <div>
        <p className="text-sm font-medium text-blue-700">
          Student Portal
        </p>

        <h1 className="mt-1 text-2xl font-bold text-gray-900">
          My Documents
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          View documents submitted with your application.
        </p>
      </div>

      {/* Information */}
      <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-5">
        <p className="text-sm leading-6 text-blue-800">
          Please make sure all required documents are clear and
          readable. Documents may be reviewed by the school
          administration.
        </p>
      </div>

      {/* Documents */}
      <section className="mt-6 rounded-xl bg-white shadow-sm">

        <div className="border-b border-gray-100 px-6 py-5">
          <h2 className="font-semibold text-gray-900">
            Submitted Documents
          </h2>
        </div>

        <div className="divide-y divide-gray-100">

          {documents.map((document) => (
            <DocumentCard
              key={document.id}
              document={document}
            />
          ))}

        </div>

      </section>

    </div>
  )
}

function DocumentCard({ document }) {
  const submitted = document.status === 'Submitted'

  return (
    <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">

      {/* Document Information */}
      <div className="flex items-start gap-4">

        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${
            submitted
              ? 'bg-green-100 text-green-700'
              : 'bg-gray-100 text-gray-500'
          }`}
        >
          {submitted ? '✓' : '—'}
        </div>

        <div>

          <h3 className="text-sm font-semibold text-gray-900">
            {document.name}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {document.description}
          </p>

          {document.date && (
            <p className="mt-2 text-xs text-gray-400">
              Submitted on {document.date}
            </p>
          )}

        </div>

      </div>

      {/* Status / Action */}
      <div className="flex items-center gap-4">

        <span
          className={`text-xs font-semibold ${
            submitted
              ? 'text-green-600'
              : 'text-gray-500'
          }`}
        >
          {document.status}
        </span>

        {submitted ? (
          <button
            type="button"
            className="rounded-lg border border-gray-300 px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50"
          >
            View
          </button>
        ) : (
          <button
            type="button"
            className="rounded-lg bg-blue-700 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-800"
          >
            Upload
          </button>
        )}

      </div>

    </div>
  )
}

export default Documents
