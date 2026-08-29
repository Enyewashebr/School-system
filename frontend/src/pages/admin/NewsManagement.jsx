import { useState } from 'react'
import { Link } from 'react-router-dom'

function News() {
  const [news, setNews] = useState([
    {
      id: 1,
      title: 'New Academic Year Registration',
      date: 'August 20, 2026',
      status: 'Published',
      content:
        'Registration for the new academic year is now open for Grades 9-12.',
    },
    {
      id: 2,
      title: 'Welcome Back to School',
      date: 'August 18, 2026',
      status: 'Published',
      content:
        'We welcome all students back for the new academic year.',
    },
    {
      id: 3,
      title: 'School Orientation Program',
      date: 'August 25, 2026',
      status: 'Draft',
      content:
        'Details about the upcoming student orientation program.',
    },
  ])

  const [showForm, setShowForm] = useState(false)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleCreate = (event) => {
    event.preventDefault()

    if (!title.trim() || !content.trim()) {
      return
    }

    const newNews = {
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      status: 'Draft',
    }

    setNews((currentNews) => [
      newNews,
      ...currentNews,
    ])

    setTitle('')
    setContent('')
    setShowForm(false)
  }

  const toggleStatus = (id) => {
    setNews((currentNews) =>
      currentNews.map((item) =>
        item.id === id
          ? {
              ...item,
              status:
                item.status === 'Published'
                  ? 'Draft'
                  : 'Published',
            }
          : item
      )
    )
  }

  const deleteNews = (id) => {
    setNews((currentNews) =>
      currentNews.filter((item) => item.id !== id)
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div>

            <p className="text-lg font-bold text-gray-900">
              School Administration
            </p>

            <p className="text-xs text-gray-500">
              Principal Portal
            </p>

          </div>

          <Link
            to="/admin"
            className="text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            ← Dashboard
          </Link>

        </div>

      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">

        {/* Heading */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <p className="text-sm font-medium text-blue-700">
              School Communication
            </p>

            <h1 className="mt-1 text-3xl font-bold text-gray-900">
              News
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Create and manage news published on the school website.
            </p>

          </div>

          <button
            type="button"
            onClick={() => setShowForm(!showForm)}
            className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
          >
            {showForm ? 'Cancel' : '+ Create News'}
          </button>

        </div>

        {/* Create Form */}
        {showForm && (
          <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">

            <h2 className="text-lg font-semibold text-gray-900">
              Create News
            </h2>

            <form
              onSubmit={handleCreate}
              className="mt-6 space-y-5"
            >

              {/* Title */}
              <div>

                <label
                  htmlFor="news-title"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  News Title
                </label>

                <input
                  id="news-title"
                  type="text"
                  value={title}
                  onChange={(event) =>
                    setTitle(event.target.value)
                  }
                  placeholder="Enter news title"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>

              {/* Content */}
              <div>

                <label
                  htmlFor="news-content"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  News Content
                </label>

                <textarea
                  id="news-content"
                  rows="6"
                  value={content}
                  onChange={(event) =>
                    setContent(event.target.value)
                  }
                  placeholder="Write the news content..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>

              <button
                type="submit"
                className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
              >
                Save as Draft
              </button>

            </form>

          </section>
        )}

        {/* News List */}
        <section className="mt-8">

          <div className="mb-4">

            <h2 className="font-semibold text-gray-900">
              All News
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {news.length} news item(s)
            </p>

          </div>

          <div className="space-y-4">

            {news.map((item) => (

              <article
                key={item.id}
                className="rounded-xl bg-white p-6 shadow-sm"
              >

                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                  {/* Content */}
                  <div className="min-w-0">

                    <div className="flex flex-wrap items-center gap-3">

                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>

                      <NewsStatus status={item.status} />

                    </div>

                    <p className="mt-2 text-xs text-gray-400">
                      {item.date}
                    </p>

                    <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600">
                      {item.content}
                    </p>

                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 flex-wrap gap-2">

                    <button
                      type="button"
                      onClick={() => toggleStatus(item.id)}
                      className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      {item.status === 'Published'
                        ? 'Unpublish'
                        : 'Publish'}
                    </button>

                    <button
                      type="button"
                      onClick={() => deleteNews(item.id)}
                      className="rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>

      </main>

    </div>
  )
}

function NewsStatus({ status }) {
  if (status === 'Published') {
    return (
      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
        Published
      </span>
    )
  }

  return (
    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
      Draft
    </span>
  )
}

export default News
