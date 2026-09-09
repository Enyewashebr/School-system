require('dotenv').config()

const bcrypt = require('bcrypt')
const pool = require('./config/db')

async function createPrincipal() {
  const password = 'ChangeMe123!'

  const hashedPassword = await bcrypt.hash(password, 10)

  await pool.query(
    `INSERT INTO users
     (full_name, email, password, role)
     VALUES ($1, $2, $3, $4)
     ON CONFLICT (email)
     DO UPDATE SET
       password = EXCLUDED.password,
       role = EXCLUDED.role`,
    [
      'School Principal',
      'principal@school.com',
      hashedPassword,
      'principal',
    ]
  )

  console.log('Principal account created.')
  console.log('Email: principal@school.com')
  console.log('Password:', password)

  await pool.end()
}

createPrincipal()
