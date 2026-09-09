import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function News() {
  const { token } = useAuth()

  const [news, setNews] = useState([])
  const [showForm, setShowForm] = useState(false)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  // Load news
  const fetchNews = async () => {
    try {
      setLoading(true)
      setError('')

      const response = await fetch(
        'http://localhost:5000/api/news'
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message || 'Failed to load news'
        )
      }

      setNews(data)
    } catch (error) {
      console.error(error)
      setError('Failed to load news.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [])

  // Create news
  const handleCreate = async (event) => {
    event.preventDefault()

    if (!title.trim() || !content.trim()) {
      setError('Title and content are required.')
      return
    }

    if (!token) {
      setError('You are not logged in.')
      return
    }

    try {
      setSaving(true)
      setError('')

      const response = await fetch(
        'http://localhost:5000/api/news',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: title.trim(),
            content: content.trim(),
            published: false,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message || 'Failed to create news'
        )
      }

      setTitle('')
      setContent('')
      setShowForm(false)

      await fetchNews()
    } catch (error) {
      console.error(error)
      setError(error.message)
    } finally {
      setSaving(false)
    }
  }

  // Publish / Unpublish
  const toggleStatus = async (item) => {
    if (!token) {
      setError('You are not logged in.')
      return
    }

    try {
      setError('')

      const response = await fetch(
        `http://localhost:5000/api/news/${item.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: item.title,
            content: item.content,
            published: !item.published,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message || 'Failed to update news'
        )
      }

      await fetchNews()
    } catch (error) {
      console.error(error)
      setError(error.message)
    }
  }

  // Delete
  const deleteNews = async (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this news?'
    )

    if (!confirmed) return

    if (!token) {
      setError('You are not logged in.')
      return
    }

    try {
      setError('')

      const response = await fetch(
        `http://localhost:5000/api/news/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message || 'Failed to delete news'
        )
      }

      await fetchNews()
    } catch (error) {
      console.error(error)
      setError(error.message)
    }
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
            onClick={() => {
              setShowForm(!showForm)
              setError('')
            }}
            className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
          >
            {showForm ? 'Cancel' : '+ Create News'}
          </button>

        </div>

        {/* Error */}
        {error && (
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="text-sm font-medium text-red-700">
              {error}
            </p>
          </div>
        )}

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
                disabled={saving}
                className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? 'Saving...' : 'Save as Draft'}
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

          {/* Loading */}
          {loading && (
            <div className="rounded-xl bg-white p-8 text-center shadow-sm">
              <p className="text-sm text-gray-500">
                Loading news...
              </p>
            </div>
          )}

          {/* Empty */}
          {!loading && news.length === 0 && (
            <div className="rounded-xl bg-white p-8 text-center shadow-sm">

              <p className="font-medium text-gray-900">
                No news yet
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Create your first news article.
              </p>

            </div>
          )}

          {/* List */}
          {!loading && news.length > 0 && (
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

                        <NewsStatus
                          published={item.published}
                        />

                      </div>

                      <p className="mt-2 text-xs text-gray-400">
                        {formatDate(item.created_at)}
                      </p>

                      <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600">
                        {item.content}
                      </p>

                    </div>

                    {/* Actions */}
                    <div className="flex shrink-0 flex-wrap gap-2">

                      <button
                        type="button"
                        onClick={() => toggleStatus(item)}
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                      >
                        {item.published
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
          )}

        </section>

      </main>

    </div>
  )
}

function NewsStatus({ published }) {
  if (published) {
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

function formatDate(date) {
  if (!date) return ''

  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default News
