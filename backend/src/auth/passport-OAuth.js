import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import { keyID, keySecret } from "../config/configEnv.js";
import User from '../models/user.model.js';

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    })
})

export function passportGoogleSetup() {
  passport.use(
    new GoogleStrategy(
      {
        callbackURL: "http://localhost:3000/api/auth/google/redirect",
        clientID: keyID,
        clientSecret: keySecret,
        scope: [
          "profile",
          "email",
        ],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
            User.findOne({googleId:profile.id}).then((currentUser) => {
                if(currentUser) {
                    done(null, currentUser);
                } else {
                    new User({
                        username: profile.displayName,
                        googleId: profile.id,
                        picture: profile.picture
                    }).save().then((newUser) => {
                        done(null, newUser);
                    })
                }
            })
          } catch (error) {
          console.log("Error en passport-setup.js -> pasportSetup()", error);
          return done(error, null);
        }
      }
    )
  );
}