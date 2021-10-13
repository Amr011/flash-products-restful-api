const db = require('../../models/index.model');

const userModel = db.user;

class user {
   // Authenticate user using jwt
   static userLogin = async (req, res) => {
      const { email, password } = req.body;

      const user = await userModel.findOne({
         where: {
            email: email,
         },
      });

      if (!user) {
         return res
            .status(400)
            .json({ error: 'There is no user mach the info !!' })
            .end();
      }
      const dbPassword = user.password;

      bcrypt.compare(password, dbPassword).then((match) => {
         if (!match) {
            return res.status(400).json({
               error: 'please cheak your email or password !!',
            });
         }

         const accessToken = jwt.sign(
            {
               id: user.id,
               firstname: user.firstname,
               lastname: user.lastname,
               email: user.email,
            },
            process.env.ACCESS_TOKEN
         );

         res.cookie('access-token', accessToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30, // 1 mounth
            httpOnly: true,
         });

         return res.status(200).json({
            message: 'Successfully Logged In !!',
            accessToken: accessToken,
         });
      });
   };
}

module.exports = user;
