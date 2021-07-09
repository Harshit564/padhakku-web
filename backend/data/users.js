import bcrypt from 'bcryptjs'

const user = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Harshit Singh',
    email: 'harshit@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Padhakku',
    email: 'padhakku@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default user
