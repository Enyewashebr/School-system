import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-gray-300">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* School */}
          <div>
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-lg font-bold text-white">
                S
              </div>

              <div>
                <p className="font-bold text-white">
                  Government School
                </p>

                <p className="text-xs text-gray-400">
                  Grades 9–12
                </p>
              </div>

            </div>

            <p className="mt-5 text-sm leading-6 text-gray-400">
              Providing accessible and quality education for
              students in Grades 9 through 12.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3">

              <Link
                to="/"
                className="text-sm hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-sm hover:text-white"
              >
                About School
              </Link>

              <Link
                to="/news"
                className="text-sm hover:text-white"
              >
                News
              </Link>

              <Link
                to="/check-application"
                className="text-sm hover:text-white"
              >
                Check Application
              </Link>

            </div>
          </div>

          {/* Student Services */}
          <div>
            <h3 className="font-semibold text-white">
              Student Services
            </h3>

            <div className="mt-4 flex flex-col gap-3">

              <Link
                to="/register/student"
                className="text-sm hover:text-white"
              >
                Student Registration
              </Link>

              <Link
                to="/login"
                className="text-sm hover:text-white"
              >
                Student / Parent Login
              </Link>

              <span className="text-sm text-gray-500">
                Academic Information
              </span>

              <span className="text-sm text-gray-500">
                School Support
              </span>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white">
              Contact School
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">

              <p>
                Government School
              </p>

              <p>
                School District / City
              </p>

              <p>
                Phone: +000 000 0000
              </p>

              <p>
                Email: info@school.edu
              </p>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6">

          <div className="flex flex-col gap-4 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

            <p>
              © {new Date().getFullYear()} Government School.
              All rights reserved.
            </p>

            <p>
              Public Education • Grades 9–12
            </p>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer
