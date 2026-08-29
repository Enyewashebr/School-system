import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function EditNews() {
  const { id } = useParams()
  const navigate = useNavigate()

  // Temporary data.
  // Later this will come from the Node.js API using the ID.
  const existingNews = {
    title: '2026/2027 Student Registration Open',
    category: 'Registration',
    summary:
      'Student registration for the 2026/2027 academic year is now open.',
    content:
      'The school is pleased to announce that registration for the 2026/2027 academic year is now open. Students and parents are encouraged to complete the registration process before the deadline.',
    status: 'Published',
  }

  const [formData, setFormData] = useState(existingNews)

  const [imageName, setImageName] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]

    if (file) {
      setImageName(file.name)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log('Updated news:', {
      id,
      ...formData,
      image: imageName,
    })

    alert('News updated successfully!')

    navigate('/admin/news')
  }

  return (
    <div className="p-6 md:p-8">

      {/* Back */}
      <Link
        to="/admin/news"
        className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-900"
      >
        ← Back to News
      </Link>

      {/* Header */}
      <div className="mt-6">

        <p className="text-sm font-medium text-blue-700">
          Administration
        </p>

        <h1 className="mt-1 text-2xl font-bold text-gray-900">
          Edit News
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Update this school news article.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 max-w-4xl"
      >

        {/* News Information */}
        <section className="rounded-xl bg-white shadow-sm">

          <div className="border-b border-gray-100 px-6 py-5">

            <h2 className="font-semibold text-gray-900">
              News Information
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Update the information for this article.
            </p>

          </div>

          <div className="space-y-6 p-6">

            {/* Title */}
            <div>

              <label
                htmlFor="title"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Title
              </label>

              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

            </div>

            {/* Category */}
            <div>

              <label
                htmlFor="category"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Category
              </label>

              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              >

                <option value="School News">
                  School News
                </option>

                <option value="Registration">
                  Registration
                </option>

                <option value="Announcement">
                  Announcement
                </option>

                <option value="Event">
                  Event
                </option>

                <option value="Academic">
                  Academic
                </option>

              </select>

            </div>

            {/* Summary */}
            <div>

              <label
                htmlFor="summary"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Short Description
              </label>

              <textarea
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                rows="3"
                maxLength="300"
                required
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

              <p className="mt-1 text-xs text-gray-400">
                Maximum 300 characters.
              </p>

            </div>

            {/* Content */}
            <div>

              <label
                htmlFor="content"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                News Content
              </label>

              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows="10"
                required
                className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-sm leading-6 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

            </div>

          </div>

        </section>

        {/* Image */}
        <section className="mt-6 rounded-xl bg-white shadow-sm">

          <div className="border-b border-gray-100 px-6 py-5">

            <h2 className="font-semibold text-gray-900">
              Featured Image
            </h2>

          </div>

          <div className="p-6">

            <label
              htmlFor="image"
              className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 px-6 py-10 text-center hover:border-blue-400 hover:bg-blue-50"
            >

              <div className="text-3xl">
                ↑
              </div>

              <p className="mt-3 text-sm font-semibold text-gray-900">
                {imageName || 'Choose a new image'}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                PNG, JPG or WEBP
              </p>

              <input
                id="image"
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleImageChange}
                className="hidden"
              />

            </label>

          </div>

        </section>

        {/* Publishing */}
        <section className="mt-6 rounded-xl bg-white shadow-sm">

          <div className="border-b border-gray-100 px-6 py-5">

            <h2 className="font-semibold text-gray-900">
              Publishing
            </h2>

          </div>

          <div className="p-6">

            <div className="space-y-3">

              {/* Draft */}
              <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 p-4 hover:bg-gray-50">

                <input
                  type="radio"
                  name="status"
                  value="Draft"
                  checked={formData.status === 'Draft'}
                  onChange={handleChange}
                  className="mt-1"
                />

                <div>

                  <p className="text-sm font-semibold text-gray-900">
                    Save as Draft
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    The article will not appear publicly.
                  </p>

                </div>

              </label>

              {/* Published */}
              <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 p-4 hover:bg-gray-50">

                <input
                  type="radio"
                  name="status"
                  value="Published"
                  checked={formData.status === 'Published'}
                  onChange={handleChange}
                  className="mt-1"
                />

                <div>

                  <p className="text-sm font-semibold text-gray-900">
                    Published
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    The article will appear on the public website.
                  </p>

                </div>

              </label>

              {/* Archived */}
              <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 p-4 hover:bg-gray-50">

                <input
                  type="radio"
                  name="status"
                  value="Archived"
                  checked={formData.status === 'Archived'}
                  onChange={handleChange}
                  className="mt-1"
                />

                <div>

                  <p className="text-sm font-semibold text-gray-900">
                    Archive
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Remove the article from the public website.
                  </p>

                </div>

              </label>

            </div>

          </div>

        </section>

        {/* Actions */}
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

          <Link
            to="/admin/news"
            className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-center text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Save Changes
          </button>

        </div>

      </form>

    </div>
  )
}

export default EditNews
