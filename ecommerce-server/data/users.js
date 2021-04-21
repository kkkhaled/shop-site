import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'khaled fathy',
    email: 'khaledfathy667@Gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Islam Ali',
    email: 'Islam@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users