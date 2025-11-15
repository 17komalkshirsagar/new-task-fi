// import passport from "passport";
// import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
// import dotenv from "dotenv";
// import { JwtPayload } from "jsonwebtoken";
// dotenv.config();
// passport.use(new JwtStrategy(
//     {
//         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//         secretOrKey: process.env.JWT_KEY as string
//     },
//     async (jwtPayload: JwtPayload, done: any) => {
//         try {
//             return done(null, jwtPayload);
//         } catch (error) {
//             done(error, false);
//         }
//     }
// ))
// export default passport;

import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";
import { JwtPayload } from "jsonwebtoken";

dotenv.config();

const secretKey = process.env.JWT_KEY;

if (!secretKey) {
    throw new Error("JWT_KEY environment variable is missing!");
}

passport.use(
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: secretKey,
        },
        async (jwtPayload: JwtPayload, done: any) => {
            try {
                return done(null, jwtPayload);
            } catch (error) {
                done(error, false);
            }
        }
    )
);

export default passport;
