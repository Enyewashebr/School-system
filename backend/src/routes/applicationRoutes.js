const express = require('express')
const pool = require('../config/db')

const router = express.Router()

router.post('/register', async (req, res) => {
  try {
    const {
      fullName,
      grade,
      dateOfBirth,
    } = req.body

    if (!fullName || !grade || !dateOfBirth) {
      return res.status(400).json({
        message: 'Full name, grade and date of birth are required',
      })
    }

    const studentId =
      `STU-${Date.now()}`

    const applicationId =
      `APP-${Date.now()}`

    const student = await pool.query(
      `INSERT INTO students
       (student_id, full_name, grade, date_of_birth)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [studentId, fullName, grade, dateOfBirth]
    )

    const application = await pool.query(
      `INSERT INTO applications
       (application_id, student_id)
       VALUES ($1, $2)
       RETURNING *`,
      [applicationId, student.rows[0].id]
    )

    res.status(201).json({
      message: 'Registration submitted successfully',
      student: student.rows[0],
      application: application.rows[0],
    })

  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Registration failed',
    })
  }
})
router.get('/:applicationId', async (req, res) => {
  try {
    const { applicationId } = req.params

    const result = await pool.query(
      `SELECT
        a.application_id,
        a.status,
        a.submitted_at,
        s.full_name,
        s.grade
       FROM applications a
       JOIN students s
       ON a.student_id = s.id
       WHERE a.application_id = $1`,
      [applicationId]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: 'Application not found',
      })
    }

    res.json(result.rows[0])

  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Failed to check application',
    })
  }
})

module.exports = router
