import { useEffect, useState } from 'react'

function News() {
  const [news, setNews] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [published, setPublished] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchNews = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/news')
      const data = await response.json()

      setNews(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!title.trim() || !content.trim()) {
      return
    }

    setLoading(true)

    try {
      const url = editingId
        ? `http://localhost:5000/api/news/${editingId}`
        : 'http://localhost:5000/api/news'

      const response = await fetch(url, {
        method: editingId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
          published,
        }),
      })

      if (!response.ok) {
  console.log('NEWS ERROR:', response.status, data)

  throw new Error(
    `${response.status}: ${data.message || 'Failed to create news'}`
  )
}

      resetForm()
      fetchNews()
    } catch (error) {
      console.error(error)
      alert('Failed to save news')
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (item) => {
    setEditingId(item.id)
    setTitle(item.title)
    setContent(item.content)
    setPublished(item.published)
  }

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this news?'
    )

    if (!confirmed) return

    try {
      const response = await fetch(
        `http://localhost:5000/api/news/${id}`,
        {
          method: 'DELETE',
        }
      )

      if (!response.ok) {
        throw new Error('Failed to delete news')
      }

      fetchNews()
    } catch (error) {
      console.error(error)
      alert('Failed to delete news')
    }
  }

  const resetForm = () => {
    setEditingId(null)
    setTitle('')
    setContent('')
    setPublished(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      <div className="mx-auto max-w-6xl">

        <h1 className="text-3xl font-bold text-gray-900">
          News Management
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Create and manage school news.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-xl bg-white p-6 shadow-sm"
        >

          <h2 className="text-lg font-semibold text-gray-900">
            {editingId ? 'Edit News' : 'Create News'}
          </h2>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="News title"
            className="mt-5 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm"
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="News content"
            rows="5"
            className="mt-4 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm"
          />

          <label className="mt-4 flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
            />

            Publish immediately
          </label>

          <div className="mt-5 flex gap-3">

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white"
            >
              {loading
                ? 'Saving...'
                : editingId
                  ? 'Update News'
                  : 'Create News'}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold"
              >
                Cancel
              </button>
            )}

          </div>

        </form>

        {/* News List */}
        <div className="mt-8 space-y-4">

          {news.map((item) => (
            <article
              key={item.id}
              className="rounded-xl bg-white p-6 shadow-sm"
            >

              <div className="flex items-start justify-between gap-4">

                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-sm text-gray-600">
                    {item.content}
                  </p>
                </div>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
                  {item.published ? 'Published' : 'Draft'}
                </span>

              </div>

              <div className="mt-5 flex gap-3">

                <button
                  onClick={() => handleEdit(item)}
                  className="text-sm font-semibold text-blue-700"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-sm font-semibold text-red-600"
                >
                  Delete
                </button>

              </div>

            </article>
          ))}

        </div>

      </div>

    </div>
  )
}

export default News
