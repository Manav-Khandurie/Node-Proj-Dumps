const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const users = []; // This should be replaced with a proper database

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    const user = users.find(user => user.id === id);
    done(null, user);
  });

  passport.use(new GoogleStrategy({
    clientID: 'YOUR_GOOGLE_CLIENT_ID',
    clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
    callbackURL: '/auth/google/callback'
  }, (token, tokenSecret, profile, done) => {
    let user = users.find(user => user.googleId === profile.id);

    if (!user) {
      user = {
        id: users.length + 1,
        googleId: profile.id,
        displayName: profile.displayName,
        email: profile.emails[0].value
      };
      users.push(user);
    }

    return done(null, user);
  }));

  passport.use(new LocalStrategy((username, password, done) => {
    const user = users.find(user => user.username === username);

    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) throw err;

      if (isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Incorrect password.' });
      }
    });
  }));
};
