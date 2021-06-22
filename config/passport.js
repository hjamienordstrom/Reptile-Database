const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//Require your User Model here!
const Breeder = require('../models/breeder');
// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    // a user has logged in via OAuth!
    // refer to the lesson plan from earlier today in order to set this up
    Breeder.findOne({ 'googleId': profile.id }, function(err, breeder) {
      if (err) return cb(err);
      if (breeder) {
        return cb(null, breeder);
      } else {
        // we have a new student via OAuth!
        var newBreeder = new Breeder({
          name: profile.name,
          email: profile.emails[0].value,
          password:profile.password,
          googleId: profile.id
        });
        newBreeder.save(function(err) {
          if (err) return cb(err);
          return cb(null, newBreeder);
        });
      }
    });
  }
));

passport.serializeUser(function(breeder, done) {
  done(null, breeder.id);
});

passport.deserializeUser(function(id, done) {
  Breeder.findById(id, function(err, breeder) {
    done(err, breeder);
  });
  // Find your User, using your model, and then call done(err, whateverYourUserIsCalled)
  // When you call this done function passport assigns the user document to req.user, which will 
  // be availible in every Single controller function, so you always know the logged in user

});

