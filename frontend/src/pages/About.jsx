import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              About Our School
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
              A place to learn, grow, and prepare for the future.
            </h1>

            <p className="mt-6 text-base leading-7 text-gray-600 md:text-lg">
              Government School is a public educational institution
              providing accessible and quality education for students
              in Grades 9 through 12.
            </p>

          </div>

        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                Education for every student
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Our school is committed to providing students with
                a supportive learning environment where they can
                develop knowledge, skills, confidence, and
                responsibility.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                As a government school, our goal is to make education
                accessible to eligible students without school fees,
                while maintaining a safe and respectful environment
                for learning.
              </p>

            </div>

            {/* Information Card */}
            <div className="rounded-2xl bg-gray-50 p-8">

              <h3 className="text-lg font-bold text-gray-900">
                School Information
              </h3>

              <div className="mt-6 space-y-5">

                <InfoRow
                  label="School Type"
                  value="Government / Public School"
                />

                <InfoRow
                  label="Grades"
                  value="9 – 12"
                />

                <InfoRow
                  label="School Fees"
                  value="No tuition fee"
                />

                <InfoRow
                  label="Education"
                  value="Secondary Education"
                />

                <InfoRow
                  label="Admissions"
                  value="Subject to school requirements"
                />

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="grid gap-6 md:grid-cols-2">

            {/* Mission */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-700">
                M
              </div>

              <h2 className="mt-6 text-2xl font-bold text-gray-900">
                Our Mission
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                To provide quality and inclusive education that
                helps students develop academically, socially, and
                personally, preparing them to become responsible
                members of society.
              </p>

            </div>

            {/* Vision */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-700">
                V
              </div>

              <h2 className="mt-6 text-2xl font-bold text-gray-900">
                Our Vision
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                To build a learning community where every student
                has the opportunity to reach their potential and
                contribute positively to their community and future.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              What We Value
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Our Core Values
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              These values guide our students, teachers, staff,
              and school community.
            </p>

          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <ValueCard
              title="Respect"
              description="We treat students, teachers, parents, and the wider community with respect."
            />

            <ValueCard
              title="Integrity"
              description="We encourage honesty, responsibility, and ethical behavior."
            />

            <ValueCard
              title="Excellence"
              description="We encourage students to work hard and continuously improve."
            />

            <ValueCard
              title="Community"
              description="We work together to create a supportive and inclusive school environment."
            />

          </div>

        </div>
      </section>

      {/* Education */}
      <section className="bg-gray-900 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="grid gap-10 md:grid-cols-2 md:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                Grades 9–12
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Preparing students for the next stage
              </h2>

              <p className="mt-5 leading-7 text-gray-300">
                Students in Grades 9 through 12 receive academic
                support and guidance as they prepare for higher
                education, employment, and future opportunities.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <StatCard
                number="9"
                label="Starting Grade"
              />

              <StatCard
                number="12"
                label="Highest Grade"
              />

              <StatCard
                number="0"
                label="Tuition Fees"
              />

              <StatCard
                number="4"
                label="Grade Levels"
              />

            </div>

          </div>

        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Interested in joining our school?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Students can submit a registration application online.
            Applications will be reviewed by the school
            administration.
          </p>

          <div className="mt-8">

            <Link
              to="/register/student"
              className="inline-flex rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Start Student Registration
            </Link>

          </div>

        </div>
      </section>

    </div>
  )
}

function InfoRow({ label, value }) {
  return (
    <div className="flex flex-col gap-1 border-b border-gray-200 pb-4 last:border-0 last:pb-0 sm:flex-row sm:justify-between">
      <span className="text-sm text-gray-500">
        {label}
      </span>

      <span className="text-sm font-semibold text-gray-900 sm:text-right">
        {value}
      </span>
    </div>
  )
}

function ValueCard({ title, description }) {
  return (
    <div className="rounded-2xl border border-gray-100 p-6">

      <h3 className="text-lg font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">
        {description}
      </p>

    </div>
  )
}

function StatCard({ number, label }) {
  return (
    <div className="rounded-xl bg-white/10 p-6">

      <p className="text-3xl font-bold">
        {number}
      </p>

      <p className="mt-1 text-sm text-gray-300">
        {label}
      </p>

    </div>
  )
}

export default About
