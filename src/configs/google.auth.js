require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const User = require("../models/user.model");
const { v4: uuidv4 } = require("uuid")

passport.use(new GoogleStrategy({
    clientID:"",
    clientSecret:"",
    callbackURL: "https://grubhub-backend-clone.herokuapp.com/auth/google/callback",
    passReqToCallback: true
},
    async function (request, accessToken, refreshToken, profile, done) {
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //   return done(err, user);
        // });
        let user;
        user = await User.findOne({ email: profile?.email }).lean().exec();
        if (!user) {
            user = await User.create({
                firstName: profile?._json?.name,
                lastName: profile?._json?.name,
                email: profile?.email,
                password: uuidv4()
            })
        }
        return done(null, user)
    }
));

module.exports = passport;
