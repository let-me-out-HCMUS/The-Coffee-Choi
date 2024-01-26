const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
require("dotenv").config({ path: "./config.env" });
const passport = require("passport");
const User = require("./models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/v1/users/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      console.log(profile.id);
      console.log(profile.emails[0].value);
      console.log(profile.displayName);
      const user = await User.findOne({ email: profile.emails[0].value });
      if (!user) {
        const newUser = await User.create({
          name: profile.displayName,
          email: profile.emails[0].value,
          password: profile.id,
        });
        return cb(null, newUser);
      }
      return cb(null, user);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "/api/v1/users/auth/facebook/callback",
      profileFields: ["id", "email", "displayName"],
    },
    async function (accessToken, refreshToken, profile, cb) {
      console.log(profile.id);
      console.log(profile.emails[0].value);
      console.log(profile.displayName);
      const user = await User.findOne({ email: profile.emails[0].value });
      if (!user) {
        const newUser = await User.create({
          name: profile.displayName,
          email: profile.emails[0].value,
          password: profile.id,
        });
        return cb(null, newUser);
      }
      return cb(null, user);
    }
  )
);
