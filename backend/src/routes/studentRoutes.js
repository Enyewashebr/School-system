const express = require('express')
const pool = require('../config/db')

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const {
      studentId,
      fullName,
      grade,
      dateOfBirth,
    } = req.body

    const result = await pool.query(
      `INSERT INTO students
       (student_id, full_name, grade, date_of_birth)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [studentId, fullName, grade, dateOfBirth]
    )

    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Failed to create student',
    })
  }
})

module.exports = router
