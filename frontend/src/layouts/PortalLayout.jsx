import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function PortalLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const links = [
    {
      name: 'Dashboard',
      path: '/portal',
    },
    {
      name: 'My Profile',
      path: '/portal/profile',
    },
    {
      name: 'Application',
      path: '/portal/application',
    },
    {
      name: 'Documents',
      path: '/portal/documents',
    },
    {
      name: 'News',
      path: '/portal/news',
    },
  ]

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Top Bar */}
      <header className="border-b border-gray-200 bg-white">

        <div className="flex h-16 items-center justify-between px-4 md:px-6">

          {/* Logo */}
          <Link
            to="/portal"
            onClick={closeMobileMenu}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 font-bold text-white">
              S
            </div>

            <div>
              <p className="text-sm font-bold text-gray-900">
                Government School
              </p>

              <p className="text-xs text-gray-500">
                Student & Parent Portal
              </p>
            </div>
          </Link>

          {/* Desktop User */}
          <div className="hidden items-center gap-4 md:flex">

            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">
                Abebe Example
              </p>

              <p className="text-xs text-gray-500">
                Student
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
              AE
            </div>

            <button
              type="button"
              className="text-sm font-medium text-gray-600 hover:text-red-600"
            >
              Logout
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
            aria-label="Open portal menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? '×' : '☰'}
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white p-4 md:hidden">

            {/* User */}
            <div className="mb-4 flex items-center gap-3 border-b border-gray-100 pb-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                AE
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Abebe Example
                </p>

                <p className="text-xs text-gray-500">
                  Student
                </p>
              </div>

            </div>

            {/* Navigation */}
            <nav className="space-y-1">

              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/portal'}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-sm font-medium ${
                      isActive
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="my-3 border-t border-gray-100" />

              <Link
                to="/"
                onClick={closeMobileMenu}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
              >
                Back to School Website
              </Link>

              <button
                type="button"
                className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-red-600 hover:bg-red-50"
              >
                Logout
              </button>

            </nav>

          </div>
        )}

      </header>

      <div className="flex">

        {/* Desktop Sidebar */}
        <aside className="hidden min-h-[calc(100vh-4rem)] w-64 border-r border-gray-200 bg-white md:block">

          <nav className="space-y-1 p-4">

            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/portal'}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-sm font-medium ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="my-4 border-t border-gray-100" />

            

          </nav>

        </aside>

        {/* Page Content */}
        <main className="min-w-0 flex-1">
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default PortalLayout
