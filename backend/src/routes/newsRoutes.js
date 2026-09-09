const express = require('express')
const pool = require('../config/db')

const router = express.Router()
const {
  protect,
  principalOnly,
} = require('../middleware/authMiddleware')

router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT *
       FROM news
       WHERE published = TRUE
       ORDER BY created_at DESC`
    )

    res.json(result.rows)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Failed to load news',
    })
  }
})

router.post(
  '/',
  protect,
  principalOnly,
  async (req, res) => {
  try {
    const { title, content, published } = req.body

    if (!title || !content) {
      return res.status(400).json({
        message: 'Title and content are required',
      })
    }

    const result = await pool.query(
      `INSERT INTO news (title, content, published)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [
        title,
        content,
        published ?? false,
      ]
    )

    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Failed to create news',
    })
  }
})
router.put(
  '/:id',
  protect,
  principalOnly,
  async (req, res) => {
  try {
    const { title, content, published } = req.body
    const { id } = req.params

    const result = await pool.query(
      `UPDATE news
       SET title = $1,
           content = $2,
           published = $3
       WHERE id = $4
       RETURNING *`,
      [title, content, published, id]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: 'News not found',
      })
    }

    res.json(result.rows[0])
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Failed to update news',
    })
  }
})

router.delete(
  '/:id',
  protect,
  principalOnly,
  async (req, res) => {
  try {
    const { id } = req.params

    const result = await pool.query(
      'DELETE FROM news WHERE id = $1 RETURNING *',
      [id]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: 'News not found',
      })
    }

    res.json({
      message: 'News deleted successfully',
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Failed to delete news',
    })
  }
})

module.exports = router
