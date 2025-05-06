const prisma = require('../config/prisma');

// Lấy tất cả người dùng
const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lấy thông tin người dùng bằng id
const getUserById = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.params.id }
    });

    if (!user) {
      return res.status(404).json({ message: 'Không tìm thấy người dùng' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Tạo người dùng mới
const createUser = async (req, res) => {
  try {
    const newUser = await prisma.user.create({
      data: req.body
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser
};
