const HttpError = require("../models/http-error");
const User = require("../models/user");

const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (error) {
    const err = new HttpError("could not get all users!", 500);
    return next(err);
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};
/**
 * Sign up a user
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(new HttpError("Invalid input data", 422));
  }
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    const err = new HttpError("signing up failed! please try again later", 500);
    return next(err);
  }

  if (existingUser) {
    const error = new HttpError(
      "User exists already! please login instead",
      422
    );
    return next(error);
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (error) {
    const err = new HttpError("Could not create user! Please try again", 500);
    return next(err);
  }

  const createdUser = new User({
    name,
    email,
    image: req.file.path,
    password: hashedPassword,
    places: [],
  });

  try {
    await createdUser.save();
  } catch (error) {
    const err = new HttpError("Signing up failed! please try again later", 500);
    return next(err);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      `${process.env.JWT_KEY}`,
      { expiresIn: "1h" }
    );
  } catch (error) {
    const err = new HttpError("Signing up failed! please try again later", 500);
    return next(err);
  }

  res
    .status(201)
    .json({ userId: createdUser.id, email: createdUser.email, token: token });
};
/**
 * Login a user
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    const err = new HttpError("User not found", 500);

    return next(err);
  }
  if (!existingUser) {
    const error = new HttpError("Invalid credentials!", 403);
    return next(error);
  }

  let isValidPassword;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (error) {
    const err = new HttpError(
      "Could not log in, please check your credentials and try again!",
      500
    );
    return next(err);
  }
  if (!isValidPassword) {
    const err = new HttpError(
      "Could not log in, please check your credentials and try again!",
      500
    );
    return next(err);
  }
  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      `${process.env.JWT_KEY}`,
      { expiresIn: "1h" }
    );
  } catch (error) {
    const err = new HttpError("Logging in failed! please try again later", 500);
    return next(err);
  }
  res.json({
    userId: existingUser.id,
    email: existingUser.email,
    token: token,
  });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
