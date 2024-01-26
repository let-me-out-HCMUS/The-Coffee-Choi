const PaymentAccount = require("../models/PaymentAccount");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/User");

exports.getAllPaymentAccounts = catchAsync(async (req, res, next) => {
  const paymentAccounts = await PaymentAccount.find();
  res.status(200).json({
    status: "success",
    data: {
      paymentAccounts,
    },
  });
});

exports.getPaymentAccountById = catchAsync(async (req, res, next) => {
  const paymentAccount = await PaymentAccount.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      paymentAccount,
    },
  });
});

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
