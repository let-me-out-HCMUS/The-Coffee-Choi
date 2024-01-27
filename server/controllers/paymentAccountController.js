const PaymentAccount = require("../models/PaymentAccount");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/User");

// Get all payment accounts, if user is admin, get all payment accounts, else get payment accounts of user
exports.getAllPaymentAccounts = catchAsync(async (req, res, next) => {
  let paymentAccounts;
  if (req.user.roles == "admin") {
    paymentAccounts = await PaymentAccount.find();
  } else {
    paymentAccounts = await PaymentAccount.find({ user: req.user._id });
  }
  res.status(200).json({
    status: "success",
    data: {
      paymentAccounts,
    },
  });
});

// Get payment account by ID
exports.getPaymentAccountById = catchAsync(async (req, res, next) => {
  const paymentAccount = await PaymentAccount.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      paymentAccount,
    },
  });
});

// Create payment account
exports.createPaymentAccount = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.body.user);
  if (!user) {
    return next(new AppError("No user found with that ID", 404));
  }

  const paymentAccount = await PaymentAccount.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      paymentAccount,
    },
  });
});

// Update payment account
exports.updatePaymentAccount = catchAsync(async (req, res, next) => {
  const paymentAccount = await PaymentAccount.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!paymentAccount) {
    return next(new AppError("No payment account found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      paymentAccount,
    },
  });
});

// Delete payment account
exports.deletePaymentAccount = catchAsync(async (req, res, next) => {
  const paymentAccount = await PaymentAccount.findByIdAndDelete(req.params.id);
  if (!paymentAccount) {
    return next(new AppError("No payment account found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
