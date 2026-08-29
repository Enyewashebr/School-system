import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('student')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
  event.preventDefault()
  setError('')

  if (!email.trim() || !password.trim()) {
    setError('Please enter your email and password.')
    return
  }

  const userData = {
    email: email.trim(),
    role,
  }

  login(userData)

  if (role === 'principal') {
    navigate('/admin')
  } else {
    navigate('/student')
  }
}

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link to="/">
            <p className="text-lg font-bold text-gray-900">
              Government School
            </p>

            <p className="text-xs text-gray-500">
              Grades 9-12
            </p>
          </Link>

          <Link
            to="/"
            className="text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            ← Home
          </Link>

        </div>

      </header>

      {/* Login */}
      <main className="flex min-h-[calc(100vh-81px)] items-center justify-center px-6 py-12">

        <div className="w-full max-w-md">

          <div className="rounded-2xl bg-white p-8 shadow-sm">

            {/* Heading */}
            <div className="text-center">

              <p className="text-sm font-semibold text-blue-700">
                School Portal
              </p>

              <h1 className="mt-2 text-3xl font-bold text-gray-900">
                Sign In
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Sign in to access your school account.
              </p>

            </div>

            {/* Error */}
            {error && (
              <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4">

                <p className="text-sm font-medium text-red-700">
                  {error}
                </p>

              </div>
            )}

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Role */}
              <div>

                <label
                  htmlFor="role"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Account Type
                </label>

                <select
                  id="role"
                  value={role}
                  onChange={(event) =>
                    setRole(event.target.value)
                  }
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                >

                  <option value="student">
                    Student / Parent
                  </option>

                  <option value="principal">
                    Principal
                  </option>

                </select>

              </div>

              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>

              {/* Password */}
              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-semibold text-blue-700 hover:text-blue-900"
                  >
                    Forgot password?
                  </button>

                </div>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
              >
                Sign In
              </button>

            </form>

            {/* Register */}
            <div className="mt-8 border-t border-gray-100 pt-6 text-center">

              <p className="text-sm text-gray-500">
                Don't have an account?
              </p>

              <Link
                to="/register"
                className="mt-2 inline-block text-sm font-semibold text-blue-700 hover:text-blue-900"
              >
                Start Student Registration →
              </Link>

            </div>

          </div>

          <p className="mt-6 text-center text-xs leading-5 text-gray-400">
            This portal is for authorized students, parents,
            and school administrators.
          </p>

        </div>

      </main>

    </div>
  )
}

export default Login
