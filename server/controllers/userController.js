const User = require("../models/User");
const catchAsync = require("../utils/catchAsync");

// Update user info
exports.updateUserInfo = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  const { name, address, phone } = req.body;
  user.name = name;
  user.address = address;
  user.phone = phone;
  await user.save();
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

// Change password
exports.changePassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id).select("+password");
  const { oldPassword, newPassword } = req.body;
  if (!(await user.checkPassword(oldPassword, user.password))) {
    return res.status(401).json({
      status: "fail",
      message: "Old password is incorrect!",
    });
  }
  user.password = newPassword;
  await user.save();
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

// Delete account
exports.deleteAccount = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  await user.remove();
  res.status(204).json({
    status: "success",
    data: null,
  });
});
