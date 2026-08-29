import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    phone: '',
    email: '',

    guardianName: '',
    guardianRelationship: '',
    guardianPhone: '',
    guardianEmail: '',
    guardianAddress: '',

    grade: '',
    previousSchool: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [applicationNumber, setApplicationNumber] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const nextStep = () => {
    setStep((previous) => previous + 1)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const previousStep = () => {
    setStep((previous) => previous - 1)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const generatedNumber =
      `APP-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`

    console.log('Registration:', formData)

    setApplicationNumber(generatedNumber)
    setSubmitted(true)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 px-6 py-16">

        <div className="mx-auto max-w-2xl">

          <div className="rounded-2xl bg-white p-8 text-center shadow-sm md:p-12">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl text-green-700">
              ✓
            </div>

            <h1 className="mt-6 text-3xl font-bold text-gray-900">
              Registration Submitted
            </h1>

            <p className="mt-4 leading-7 text-gray-600">
              Your student registration application has been
              submitted successfully.
            </p>

            <div className="mt-8 rounded-xl bg-blue-50 p-6">

              <p className="text-sm font-medium text-blue-700">
                Your Application Number
              </p>

              <p className="mt-2 text-2xl font-bold tracking-wider text-blue-900">
                {applicationNumber}
              </p>

              <p className="mt-3 text-sm text-blue-700">
                Please save this number. You will need it to
                check your application status.
              </p>

            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

              <button
                type="button"
                onClick={() => navigate('/application-status')}
                className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
              >
                Check Application
              </button>

              <Link
                to="/"
                className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Back to Home
              </Link>

            </div>

          </div>

        </div>

      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">

      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Student Admission
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            Student Registration
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600">
            Complete the form below to apply for admission to
            our government school.
          </p>

          <p className="mt-2 text-sm font-medium text-green-700">
            No school registration fee is required.
          </p>

        </div>

        {/* Progress */}
        <div className="mt-10">

          <div className="flex items-center justify-between">

            <StepIndicator
              number="1"
              title="Student"
              active={step >= 1}
              current={step === 1}
            />

            <div className="mx-2 h-px flex-1 bg-gray-200" />

            <StepIndicator
              number="2"
              title="Guardian"
              active={step >= 2}
              current={step === 2}
            />

            <div className="mx-2 h-px flex-1 bg-gray-200" />

            <StepIndicator
              number="3"
              title="School"
              active={step >= 3}
              current={step === 3}
            />

            <div className="mx-2 h-px flex-1 bg-gray-200" />

            <StepIndicator
              number="4"
              title="Review"
              active={step >= 4}
              current={step === 4}
            />

          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8"
        >

          {/* Step 1 */}
          {step === 1 && (
            <section className="rounded-xl bg-white shadow-sm">

              <div className="border-b border-gray-100 px-6 py-5">

                <h2 className="font-semibold text-gray-900">
                  Student Information
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Enter the student's personal information.
                </p>

              </div>

              <div className="grid gap-6 p-6 md:grid-cols-2">

                <Input
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Middle Name"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                />

                <Input
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />

                <Select
                  label="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  options={[
                    'Male',
                    'Female',
                    'Other',
                  ]}
                />

                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <div className="md:col-span-2">

                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                </div>

              </div>

              <FormActions
                onNext={nextStep}
                showPrevious={false}
              />

            </section>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <section className="rounded-xl bg-white shadow-sm">

              <div className="border-b border-gray-100 px-6 py-5">

                <h2 className="font-semibold text-gray-900">
                  Parent / Guardian Information
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Provide information about the student's parent or guardian.
                </p>

              </div>

              <div className="grid gap-6 p-6 md:grid-cols-2">

                <div className="md:col-span-2">

                  <Input
                    label="Parent / Guardian Full Name"
                    name="guardianName"
                    value={formData.guardianName}
                    onChange={handleChange}
                    required
                  />

                </div>

                <Select
                  label="Relationship to Student"
                  name="guardianRelationship"
                  value={formData.guardianRelationship}
                  onChange={handleChange}
                  required
                  options={[
                    'Parent',
                    'Guardian',
                    'Other',
                  ]}
                />

                <Input
                  label="Phone Number"
                  name="guardianPhone"
                  type="tel"
                  value={formData.guardianPhone}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Email Address"
                  name="guardianEmail"
                  type="email"
                  value={formData.guardianEmail}
                  onChange={handleChange}
                />

                <div className="md:col-span-2">

                  <label
                    htmlFor="guardianAddress"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>

                  <textarea
                    id="guardianAddress"
                    name="guardianAddress"
                    value={formData.guardianAddress}
                    onChange={handleChange}
                    rows="4"
                    required
                    placeholder="Enter parent / guardian address"
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />

                </div>

              </div>

              <FormActions
                onNext={nextStep}
                onPrevious={previousStep}
              />

            </section>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <section className="rounded-xl bg-white shadow-sm">

              <div className="border-b border-gray-100 px-6 py-5">

                <h2 className="font-semibold text-gray-900">
                  School Information
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Select the grade the student is applying for.
                </p>

              </div>

              <div className="space-y-6 p-6">

                <div>

                  <label
                    htmlFor="grade"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Grade Applying For
                  </label>

                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  >

                    <option value="">
                      Select Grade
                    </option>

                    {Array.from(
                      { length: 4 },
                      (_, index) => (
                        <option
                          key={index + 9}
                          value={index + 9}
                        >
                          Grade {index + 9}
                        </option>
                      )
                    )}

                  </select>

                  <p className="mt-2 text-xs text-gray-500">
                    This school currently accepts students in Grades 9–12.
                  </p>

                </div>

                <div>

                  <label
                    htmlFor="previousSchool"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Previous School
                  </label>

                  <input
                    id="previousSchool"
                    name="previousSchool"
                    type="text"
                    value={formData.previousSchool}
                    onChange={handleChange}
                    placeholder="Enter previous school name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />

                </div>

                <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">

                  <p className="text-sm font-semibold text-blue-900">
                    Important
                  </p>

                  <p className="mt-1 text-sm leading-6 text-blue-800">
                    This is an admission application. Submission does
                    not automatically mean that the student has been
                    accepted into the school.
                  </p>

                </div>

              </div>

              <FormActions
                onNext={nextStep}
                onPrevious={previousStep}
              />

            </section>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <section className="rounded-xl bg-white shadow-sm">

              <div className="border-b border-gray-100 px-6 py-5">

                <h2 className="font-semibold text-gray-900">
                  Review Application
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Check the information before submitting.
                </p>

              </div>

              <div className="space-y-8 p-6">

                <ReviewSection title="Student Information">

                  <ReviewItem
                    label="Name"
                    value={`${formData.firstName} ${formData.middleName} ${formData.lastName}`}
                  />

                  <ReviewItem
                    label="Date of Birth"
                    value={formData.dateOfBirth}
                  />

                  <ReviewItem
                    label="Gender"
                    value={formData.gender}
                  />

                  <ReviewItem
                    label="Phone"
                    value={formData.phone}
                  />

                  <ReviewItem
                    label="Email"
                    value={formData.email}
                  />

                </ReviewSection>

                <ReviewSection title="Parent / Guardian">

                  <ReviewItem
                    label="Name"
                    value={formData.guardianName}
                  />

                  <ReviewItem
                    label="Relationship"
                    value={formData.guardianRelationship}
                  />

                  <ReviewItem
                    label="Phone"
                    value={formData.guardianPhone}
                  />

                  <ReviewItem
                    label="Email"
                    value={formData.guardianEmail}
                  />

                  <ReviewItem
                    label="Address"
                    value={formData.guardianAddress}
                  />

                </ReviewSection>

                <ReviewSection title="School">

                  <ReviewItem
                    label="Grade"
                    value={`Grade ${formData.grade}`}
                  />

                  <ReviewItem
                    label="Previous School"
                    value={formData.previousSchool}
                  />

                </ReviewSection>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">

                  <label className="flex items-start gap-3">

                    <input
                      type="checkbox"
                      required
                      className="mt-1"
                    />

                    <span className="text-sm leading-6 text-gray-600">
                      I confirm that the information provided in this
                      application is accurate and complete.
                    </span>

                  </label>

                </div>

              </div>

              <FormActions
                onPrevious={previousStep}
                submit
              />

            </section>
          )}

        </form>

      </div>

    </div>
  )
}

function Input({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        {label}
        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
      />

    </div>
  )
}

function Select({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        {label}
        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
      >

        <option value="">
          Select
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}

      </select>

    </div>
  )
}

function StepIndicator({
  number,
  title,
  active,
  current,
}) {
  return (
    <div className="flex flex-col items-center">

      <div
        className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
          active
            ? 'bg-blue-700 text-white'
            : 'bg-gray-200 text-gray-500'
        } ${
          current
            ? 'ring-4 ring-blue-100'
            : ''
        }`}
      >
        {number}
      </div>

      <span
        className={`mt-2 hidden text-xs font-medium sm:block ${
          active
            ? 'text-gray-900'
            : 'text-gray-400'
        }`}
      >
        {title}
      </span>

    </div>
  )
}

function FormActions({
  onNext,
  onPrevious,
  showPrevious = true,
  submit = false,
}) {
  return (
    <div className="flex flex-col-reverse gap-3 border-t border-gray-100 px-6 py-5 sm:flex-row sm:justify-between">

      {showPrevious && onPrevious ? (
        <button
          type="button"
          onClick={onPrevious}
          className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
        >
          ← Previous
        </button>
      ) : (
        <div />
      )}

      {submit ? (
        <button
          type="submit"
          className="rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
        >
          Submit Application
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
        >
          Continue →
        </button>
      )}

    </div>
  )
}

function ReviewSection({ title, children }) {
  return (
    <div>

      <h3 className="text-sm font-semibold text-gray-900">
        {title}
      </h3>

      <div className="mt-3 grid gap-4 rounded-lg bg-gray-50 p-4 sm:grid-cols-2">
        {children}
      </div>

    </div>
  )
}

function ReviewItem({ label, value }) {
  return (
    <div>

      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
        {label}
      </p>

      <p className="mt-1 break-words text-sm text-gray-800">
        {value || 'Not provided'}
      </p>

    </div>
  )
}

export default Register
