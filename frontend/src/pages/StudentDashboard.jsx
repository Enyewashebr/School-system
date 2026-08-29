import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function StudentDashboard() {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const student = {
    name: 'John Doe',
    studentId: 'STU-2026-001',
    grade: 'Grade 10',
    status: 'Active',
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      

         <button
    type="button"
    onClick={handleLogout}
    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
  >
    Logout
  </button>

 



      

      <main className="mx-auto max-w-7xl px-6 py-8">

        {/* Welcome */}
        <section>

          <p className="text-sm font-medium text-blue-700">
            Student Portal
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Welcome, {student.name}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            View your school information and application details.
          </p>

        </section>

        {/* Student Summary */}
        <section className="mt-8 grid gap-5 sm:grid-cols-3">

          <InfoCard
            label="Student ID"
            value={student.studentId}
          />

          <InfoCard
            label="Grade"
            value={student.grade}
          />

          <InfoCard
            label="Status"
            value={student.status}
          />

        </section>

        {/* Actions */}
        <section className="mt-8">

          <h2 className="text-lg font-semibold text-gray-900">
            Quick Access
          </h2>

          <div className="mt-4 grid gap-5 md:grid-cols-2">

            <PortalCard
              title="Application Status"
              description="Check the current status of your admission application."
              link="/application-status"
              action="Check Status"
            />

            <PortalCard
              title="School News"
              description="Read the latest news and updates from the school."
              link="/news"
              action="View News"
            />

          </div>

        </section>

        {/* Notice */}
        <section className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-6">

          <h2 className="font-semibold text-blue-900">
            Important
          </h2>

          <p className="mt-2 text-sm leading-6 text-blue-800">
            Keep your account information secure. Do not share
            your password with anyone.
          </p>

        </section>

      </main>

    </div>
  )
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">

      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
        {label}
      </p>

      <p className="mt-2 text-xl font-bold text-gray-900">
        {value}
      </p>

    </div>
  )
}

function PortalCard({
  title,
  description,
  link,
  action,
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">

      <h3 className="font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {description}
      </p>

      <Link
        to={link}
        className="mt-5 inline-block text-sm font-semibold text-blue-700 hover:text-blue-900"
      >
        {action} →
      </Link>

    </div>
  )
}

export default StudentDashboard
