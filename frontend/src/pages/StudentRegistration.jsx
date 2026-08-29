import { useState } from 'react'

const steps = [
  'Personal Information',
  'Guardian Information',
  'Academic Information',
  'Documents',
  'Review',
]

function StudentRegistration() {

  const [currentStep, setCurrentStep] = useState(1)
const [declarationAccepted, setDeclarationAccepted] = useState(false)
const [submitted, setSubmitted] = useState(false)
const [applicationNumber, setApplicationNumber] = useState('')
  // const [currentStep, setCurrentStep] = useState(1)
  // const [declarationAccepted, setDeclarationAccepted] = useState(false)
  

const [formData, setFormData] = useState({
  // Student information
  firstName: '',
  middleName: '',
  lastName: '',
  dateOfBirth: '',
  gender: '',
  phone: '',
  email: '',
  address: '',

  // Guardian information
  guardianFirstName: '',
  guardianLastName: '',
  guardianRelationship: '',
  guardianPhone: '',
  guardianEmail: '',
  guardianAddress: '',
    // Academic information
  grade: '',
  previousSchool: '',
  previousGrade: '',
  previousSchoolAddress: '',
  studentNumber: '',

  // Documents
  identificationDocument: null,
  previousSchoolDocument: null,
  additionalDocument: null,
})

 const handleChange = (e) => {
  const { name, value } = e.target

  setFormData((previous) => ({
    ...previous,
    [name]: value,
  }))
}

const handleFileChange = (e) => {
  const { name, files } = e.target

  setFormData((previous) => ({
    ...previous,
    [name]: files[0] || null,
  }))
}

const handleSubmit = () => {
  if (!declarationAccepted) {
    return
  }

  const referenceNumber = `APP-${Date.now()}`

  setApplicationNumber(referenceNumber)
  setSubmitted(true)
}

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="bg-gray-50 py-12">



    {submitted ? (
      <div className="mx-auto max-w-3xl px-6">

        <div className="rounded-2xl bg-white p-8 text-center shadow-sm md:p-12">

          {/* Success Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <span className="text-4xl text-green-600">
              ✓
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            Application Submitted
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Your student registration application has been
            successfully submitted. Please keep your application
            number for future reference.
          </p>

          {/* Application Number */}
          <div className="mx-auto mt-8 max-w-md rounded-xl border border-blue-200 bg-blue-50 p-6">

            <p className="text-sm font-medium text-blue-700">
              Application Number
            </p>

            <p className="mt-2 text-2xl font-bold tracking-wide text-blue-900">
              {applicationNumber}
            </p>

          </div>

          {/* Status */}
          <div className="mt-6 rounded-lg bg-gray-50 p-4">

            <p className="text-sm text-gray-600">
              Application Status
            </p>

            <p className="mt-1 font-semibold text-yellow-600">
              Pending Review
            </p>

          </div>

          <p className="mt-6 text-sm text-gray-500">
            The school administration will review your application
            and supporting documents.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <button
              type="button"
              onClick={() => {
                window.location.href = '/check-application'
              }}
              className="rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Check Application Status
            </button>

            <button
              type="button"
              onClick={() => {
                window.location.href = '/'
              }}
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              Return to Home
            </button>

          </div>

        </div>

      </div>
    ) : (
      // YOUR EXISTING REGISTRATION CONTENT GOES HERE
      <div className="mx-auto max-w-5xl px-6">

        {/* Page Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Student Registration
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            Apply for Enrollment
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Complete the registration form to apply for enrollment
            at our school. Applications are available for Grades
            9 through 12.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="mt-10 overflow-x-auto">
          <div className="flex min-w-[650px] items-center justify-between">

            {steps.map((step, index) => {
              const stepNumber = index + 1
              const isActive = stepNumber === currentStep
              const isCompleted = stepNumber < currentStep

              return (
                <div
                  key={step}
                  className="flex flex-1 items-center"
                >
                  <div className="flex flex-col items-center">

                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                        isActive || isCompleted
                          ? 'bg-blue-700 text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {isCompleted ? '✓' : stepNumber}
                    </div>

                    <span
                      className={`mt-2 whitespace-nowrap text-xs font-medium ${
                        isActive || isCompleted
                          ? 'text-blue-700'
                          : 'text-gray-500'
                      }`}
                    >
                      {step}
                    </span>

                  </div>

                  {stepNumber < steps.length && (
                    <div
                      className={`mx-3 h-1 flex-1 ${
                        stepNumber < currentStep
                          ? 'bg-blue-700'
                          : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              )
            })}

          </div>
        </div>

        {/* Form Card */}
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm md:p-8">

          {/* STEP 1 */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Personal Information
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Enter the student's basic personal information.
              </p>

              <form className="mt-8">

                <div className="grid gap-6 md:grid-cols-2">

                  {/* First Name */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter first name"
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Middle Name */}
                  <div>
                    <label
                      htmlFor="middleName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Middle Name
                    </label>

                    <input
                      id="middleName"
                      name="middleName"
                      type="text"
                      value={formData.middleName}
                      onChange={handleChange}
                      placeholder="Enter middle name"
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter last name"
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label
                      htmlFor="dateOfBirth"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date of Birth <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label
                      htmlFor="gender"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Gender <span className="text-red-500">*</span>
                    </label>

                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Address */}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address <span className="text-red-500">*</span>
                    </label>

                    <textarea
                      id="address"
                      name="address"
                      rows="4"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter student's address"
                      className="mt-2 w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                </div>

              </form>
            </div>
          )}


          {/* STEP 2 */}
          {currentStep === 2 && (
  <div>
    <h2 className="text-xl font-bold text-gray-900">
      Guardian Information
    </h2>

    <p className="mt-2 text-sm text-gray-500">
      Provide the details of the student's parent or legal guardian.
    </p>

    <div className="mt-8 grid gap-6 md:grid-cols-2">

      {/* Guardian First Name */}
      <div>
        <label
          htmlFor="guardianFirstName"
          className="block text-sm font-medium text-gray-700"
        >
          First Name <span className="text-red-500">*</span>
        </label>

        <input
          id="guardianFirstName"
          name="guardianFirstName"
          type="text"
          value={formData.guardianFirstName}
          onChange={handleChange}
          placeholder="Enter guardian's first name"
          className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Guardian Last Name */}
      <div>
        <label
          htmlFor="guardianLastName"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name <span className="text-red-500">*</span>
        </label>

        <input
          id="guardianLastName"
          name="guardianLastName"
          type="text"
          value={formData.guardianLastName}
          onChange={handleChange}
          placeholder="Enter guardian's last name"
          className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Relationship */}
      <div>
        <label
          htmlFor="guardianRelationship"
          className="block text-sm font-medium text-gray-700"
        >
          Relationship to Student <span className="text-red-500">*</span>
        </label>

        <select
          id="guardianRelationship"
          name="guardianRelationship"
          value={formData.guardianRelationship}
          onChange={handleChange}
          className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        >
          <option value="">Select relationship</option>
          <option value="father">Father</option>
          <option value="mother">Mother</option>
          <option value="guardian">Legal Guardian</option>
          <option value="grandparent">Grandparent</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Guardian Phone */}
      <div>
        <label
          htmlFor="guardianPhone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number <span className="text-red-500">*</span>
        </label>

        <input
          id="guardianPhone"
          name="guardianPhone"
          type="tel"
          value={formData.guardianPhone}
          onChange={handleChange}
          placeholder="Enter guardian's phone number"
          className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Guardian Email */}
      <div>
        <label
          htmlFor="guardianEmail"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>

        <input
          id="guardianEmail"
          name="guardianEmail"
          type="email"
          value={formData.guardianEmail}
          onChange={handleChange}
          placeholder="Enter guardian's email"
          className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Guardian Address */}
      <div className="md:col-span-2">
        <label
          htmlFor="guardianAddress"
          className="block text-sm font-medium text-gray-700"
        >
          Address <span className="text-red-500">*</span>
        </label>

        <textarea
          id="guardianAddress"
          name="guardianAddress"
          rows="4"
          value={formData.guardianAddress}
          onChange={handleChange}
          placeholder="Enter guardian's address"
          className="mt-2 w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

    </div>
  </div>
)}

          {/* STEP 3 */}
{currentStep === 3 && (
  <div>
    <h2 className="text-xl font-bold text-gray-900">
      Academic Information
    </h2>

    <p className="mt-2 text-sm text-gray-500">
      Provide the student's academic information and select
      the grade for which they are applying.
    </p>

    <div className="mt-8 space-y-8">

      {/* Grade Selection */}
      <div>
        <label
          htmlFor="grade"
          className="block text-sm font-medium text-gray-700"
        >
          Applying Grade <span className="text-red-500">*</span>
        </label>

        <select
          id="grade"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        >
          <option value="">Select grade</option>
          <option value="9">Grade 9</option>
          <option value="10">Grade 10</option>
          <option value="11">Grade 11</option>
          <option value="12">Grade 12</option>
        </select>

        <p className="mt-2 text-xs text-gray-500">
          Available grades are Grade 9 through Grade 12.
        </p>
      </div>

      {/* Previous School Section */}
      <div className="border-t pt-8">

        <h3 className="text-lg font-semibold text-gray-900">
          Previous School Information
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Provide information about the student's previous school.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">

          {/* Previous School */}
          <div>
            <label
              htmlFor="previousSchool"
              className="block text-sm font-medium text-gray-700"
            >
              Previous School Name
            </label>

            <input
              id="previousSchool"
              name="previousSchool"
              type="text"
              value={formData.previousSchool}
              onChange={handleChange}
              placeholder="Enter previous school name"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Previous Grade */}
          <div>
            <label
              htmlFor="previousGrade"
              className="block text-sm font-medium text-gray-700"
            >
              Previous Grade Completed
            </label>

            <select
              id="previousGrade"
              name="previousGrade"
              value={formData.previousGrade}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">Select grade</option>
              <option value="8">Grade 8</option>
              <option value="9">Grade 9</option>
              <option value="10">Grade 10</option>
              <option value="11">Grade 11</option>
            </select>
          </div>

          {/* Previous School Address */}
          <div className="md:col-span-2">
            <label
              htmlFor="previousSchoolAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Previous School Address
            </label>

            <textarea
              id="previousSchoolAddress"
              name="previousSchoolAddress"
              rows="3"
              value={formData.previousSchoolAddress}
              onChange={handleChange}
              placeholder="Enter previous school address"
              className="mt-2 w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

        </div>
      </div>

      {/* Student Number */}
      <div className="border-t pt-8">

        <h3 className="text-lg font-semibold text-gray-900">
          Existing Student Information
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          If the student previously attended this school,
          provide their existing student number.
        </p>

        <div className="mt-6">

          <label
            htmlFor="studentNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Existing Student Number
          </label>

          <input
            id="studentNumber"
            name="studentNumber"
            type="text"
            value={formData.studentNumber}
            onChange={handleChange}
            placeholder="Leave blank if this is a new student"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />

        </div>

      </div>

    </div>
  </div>
)}

        {/* STEP 4 */}
{currentStep === 4 && (
  <div>
    <h2 className="text-xl font-bold text-gray-900">
      Documents
    </h2>

    <p className="mt-2 text-sm text-gray-500">
      Upload the required documents for the student's
      registration application.
    </p>

    <div className="mt-8 space-y-6">

      {/* Identification Document */}
      <div className="rounded-xl border border-gray-200 p-6">

        <h3 className="font-semibold text-gray-900">
          Identification Document
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Upload a valid identification document for the
          student or required legal document.
        </p>

        <label className="mt-5 block cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-6 text-center transition hover:border-blue-500 hover:bg-blue-50">

          <div className="text-3xl">
            📄
          </div>

          <p className="mt-2 text-sm font-medium text-gray-700">
            Click to choose a file
          </p>

          <p className="mt-1 text-xs text-gray-500">
            PDF, JPG, JPEG or PNG
          </p>

          <input
            type="file"
            name="identificationDocument"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="hidden"
          />

        </label>

        {formData.identificationDocument && (
          <div className="mt-4 rounded-lg bg-gray-50 p-4">
            <p className="text-sm font-medium text-gray-700">
              Selected file:
            </p>

            <p className="mt-1 break-all text-sm text-blue-700">
              {formData.identificationDocument.name}
            </p>
          </div>
        )}

      </div>

      {/* Previous School Document */}
      <div className="rounded-xl border border-gray-200 p-6">

        <h3 className="font-semibold text-gray-900">
          Previous School Document
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Upload a school record, transfer document, or other
          required academic document.
        </p>

        <label className="mt-5 block cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-6 text-center transition hover:border-blue-500 hover:bg-blue-50">

          <div className="text-3xl">
            🎓
          </div>

          <p className="mt-2 text-sm font-medium text-gray-700">
            Click to choose a file
          </p>

          <p className="mt-1 text-xs text-gray-500">
            PDF, JPG, JPEG or PNG
          </p>

          <input
            type="file"
            name="previousSchoolDocument"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="hidden"
          />

        </label>

        {formData.previousSchoolDocument && (
          <div className="mt-4 rounded-lg bg-gray-50 p-4">
            <p className="text-sm font-medium text-gray-700">
              Selected file:
            </p>

            <p className="mt-1 break-all text-sm text-blue-700">
              {formData.previousSchoolDocument.name}
            </p>
          </div>
        )}

      </div>

      {/* Additional Document */}
      <div className="rounded-xl border border-gray-200 p-6">

        <h3 className="font-semibold text-gray-900">
          Additional Document
          <span className="ml-2 text-xs font-normal text-gray-500">
            Optional
          </span>
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Upload any additional document requested by the school.
        </p>

        <label className="mt-5 block cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-6 text-center transition hover:border-blue-500 hover:bg-blue-50">

          <div className="text-3xl">
            📎
          </div>

          <p className="mt-2 text-sm font-medium text-gray-700">
            Click to choose a file
          </p>

          <p className="mt-1 text-xs text-gray-500">
            PDF, JPG, JPEG or PNG
          </p>

          <input
            type="file"
            name="additionalDocument"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="hidden"
          />

        </label>

        {formData.additionalDocument && (
          <div className="mt-4 rounded-lg bg-gray-50 p-4">
            <p className="text-sm font-medium text-gray-700">
              Selected file:
            </p>

            <p className="mt-1 break-all text-sm text-blue-700">
              {formData.additionalDocument.name}
            </p>
          </div>
        )}

      </div>

      {/* Upload Information */}
      <div className="rounded-lg bg-blue-50 p-4">
        <p className="text-sm leading-6 text-blue-800">
          Please make sure uploaded documents are clear and
          readable. The school administration will review
          submitted documents during the application process.
        </p>
      </div>

    </div>
  </div>
)}

          {/* STEP 5 */}
{currentStep === 5 && (
  <div>
    <h2 className="text-xl font-bold text-gray-900">
      Review Application
    </h2>

    <p className="mt-2 text-sm text-gray-500">
      Review all information carefully before submitting your
      registration application.
    </p>

    <div className="mt-8 space-y-8">

      {/* Student Information */}
      <section className="rounded-xl border border-gray-200">

        <div className="border-b bg-gray-50 px-6 py-4">
          <h3 className="font-semibold text-gray-900">
            Student Information
          </h3>
        </div>

        <div className="grid gap-6 p-6 sm:grid-cols-2">

          <div>
            <p className="text-xs font-medium uppercase text-gray-500">
              First Name
            </p>
            <p className="mt-1 text-sm text-gray-900">
              {formData.firstName || 'Not provided'}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase text-gray-500">
              Middle Name
            </p>
            <p className="mt-1 text-sm text-gray-900">
              {formData.middleName || 'Not provided'}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase text-gray-500">
              Last Name
            </p>
            <p className="mt-1 text-sm text-gray-900">
              {formData.lastName || 'Not provided'}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase text-gray-500">
              Date of Birth
            </p>
            <p className="mt-1 text-sm text-gray-900">
              {formData.dateOfBirth || 'Not provided'}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase text-gray-500">
              Gender
            </p>
            <p className="mt-1 text-sm capitalize text-gray-900">
              {formData.gender || 'Not provided'}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase text-gray-500">
              Phone
            </p>
            <p className="mt-1 text-sm text-gray-900">
              {formData.phone || 'Not provided'}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase text-gray-500">
              Email
            </p>
            <p className="mt-1 break-all text-sm text-gray-900">
              {formData.email || 'Not provided'}
            </p>
          </div>

          <div className="sm:col-span-2">
            <p className="text-xs font-medium uppercase text-gray-500">
              Address
            </p>
            <p className="mt-1 text-sm text-gray-900">
              {formData.address || 'Not provided'}
            </p>
          </div>

        </div>
      </section>

      {/* Guardian Information */}
      <section className="rounded-xl border border-gray-200">

        <div className="border-b bg-gray-50 px-6 py-4">
          <h3 className="font-semibold text-gray-900">
            Guardian Information
          </h3>
        </div>

        <div className="grid gap-6 p-6 sm:grid-cols-2">

          <div>
            <p className="text-xs font-medium uppercase text-gray-500">
              Name
            </p>
            <p className="mt-1 text-sm text-gray-900">
              {formData.guardianFirstName || 'Not provided'}{' '}
              {formData.guardianLastName || ''}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase text-gray-500">
              Relationship
            </p>
            <p className="mt-1 text-sm capitalize text-gray-900">
              {formData.guardianRelationship || 'Not provided'}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase text-gray-500">
              Phone
            </p>
            <p className="mt-1 text-sm text-gray-900">
              {formData.guardianPhone || 'Not provided'}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase text-gray-500">
              Email
            </p>
            <p className="mt-1 break-all text-sm text-gray-900">
              {formData.guardianEmail || 'Not provided'}
            </p>
          </div>

          <div className="sm:col-span-2">
            <p className="text-xs font-medium uppercase text-gray-500">
              Address
            </p>
            <p className="mt-1 text-sm text-gray-900">
              {formData.guardianAddress || 'Not provided'}
            </p>
          </div>

        </div>
      </section>

      {/* Academic Information */}
      <section className="rounded-xl border border-gray-200">

        <div className="border-b bg-gray-50 px-6 py-4">
          <h3 className="font-semibold text-gray-900">
            Academic Information
          </h3>
        </div>

        <div className="grid gap-6 p-6 sm:grid-cols-2">

          <div>
            <p className="text-xs font-medium uppercase text-gray-500">
              Applying Grade
            </p>
            <p className="mt-1 text-sm font-semibold text-blue-700">
              {formData.grade
                ? `Grade ${formData.grade}`
                : 'Not provided'}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase text-gray-500">
              Previous Grade
            </p>
            <p className="mt-1 text-sm text-gray-900">
              {formData.previousGrade
                ? `Grade ${formData.previousGrade}`
                : 'Not provided'}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase text-gray-500">
              Previous School
            </p>
            <p className="mt-1 text-sm text-gray-900">
              {formData.previousSchool || 'Not provided'}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase text-gray-500">
              Existing Student Number
            </p>
            <p className="mt-1 text-sm text-gray-900">
              {formData.studentNumber || 'None'}
            </p>
          </div>

          <div className="sm:col-span-2">
            <p className="text-xs font-medium uppercase text-gray-500">
              Previous School Address
            </p>
            <p className="mt-1 text-sm text-gray-900">
              {formData.previousSchoolAddress || 'Not provided'}
            </p>
          </div>

        </div>
      </section>

      {/* Documents */}
      <section className="rounded-xl border border-gray-200">

        <div className="border-b bg-gray-50 px-6 py-4">
          <h3 className="font-semibold text-gray-900">
            Documents
          </h3>
        </div>

        <div className="space-y-4 p-6">

          <div className="flex items-center justify-between gap-4">
            <span className="text-sm text-gray-700">
              Identification Document
            </span>

            {formData.identificationDocument ? (
              <span className="text-sm font-medium text-green-600">
                ✓ Selected
              </span>
            ) : (
              <span className="text-sm text-red-500">
                Not selected
              </span>
            )}
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="text-sm text-gray-700">
              Previous School Document
            </span>

            {formData.previousSchoolDocument ? (
              <span className="text-sm font-medium text-green-600">
                ✓ Selected
              </span>
            ) : (
              <span className="text-sm text-gray-500">
                Not selected
              </span>
            )}
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="text-sm text-gray-700">
              Additional Document
            </span>

            {formData.additionalDocument ? (
              <span className="text-sm font-medium text-green-600">
                ✓ Selected
              </span>
            ) : (
              <span className="text-sm text-gray-500">
                Not selected
              </span>
            )}
          </div>

        </div>
      </section>

      {/* Declaration */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">

        <div className="flex gap-3">

          <input
  id="declaration"
  type="checkbox"
  checked={declarationAccepted}
  onChange={(e) => setDeclarationAccepted(e.target.checked)}
  className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-700 focus:ring-blue-600"
/>

          <label
            htmlFor="declaration"
            className="text-sm leading-6 text-gray-700"
          >
            I confirm that the information provided in this
            application is accurate and complete to the best of
            my knowledge. I understand that the school
            administration will review this application and
            supporting documents.
          </label>

        </div>

      </div>

    </div>
  </div>
)}

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-between border-t pt-6">

            <button
              type="button"
              onClick={previousStep}
              disabled={currentStep === 1}
              className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ← Previous
            </button>

            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={nextStep}
                className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
              >
                Continue →
              </button>
            ) : (
                        <button
  type="button"
  disabled={!declarationAccepted}
  onClick={handleSubmit}
  className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-40"
>
  Submit Application
</button>
            )}

          </div>

        </div>

      </div>
    )}

 

      


    </div>
  )
}

export default StudentRegistration

