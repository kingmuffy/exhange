import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id)

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    generateToken(res, user._id)

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  })
  res.status(200).json({ message: 'Logged out successfully' })
}

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email

    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})
export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }

// class ListNode{
//   constructor( val = 0, next = null) {

//     this.val = val;
//     this.next = next
//   }
// }
// function addTwoNumbers(l1, l2){
//   let p = l1
//   let q = l2
//   const dummy = new ListNode(0)
//   let current = dummy

//   while (p||q) {
//    const  x = p ? p.val : 0
//    const y = q ? q.val : 0

//    const sum = q+ p + carry
//    carry = Math.floor(sum % 10 )
//    current = current.next
//   }
// }

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next
  }
}
function addtwoCheques(l1, l2) {
  let p = l1
  let q = l2
  let carry = 0
  const dummy = new ListNode(0)
  let current = dummy

  while (p || q) {
    const x = p ? p.val : 0
    const y = q ? q.val : 0
    const sum = x + y + carry
    carry = Math.floor(sum / 10)
    current.next = new ListNode(sum % 10)
    current = current.next

    if (p) {
      p.next
    }
    if (q) {
      q.next
    }
  }
  if (carry > 0) {
    current.next = new ListNode(carry)
  }
  return dummy.next
}
