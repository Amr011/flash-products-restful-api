const db = require('../../models/index.model');

const userModel = db.user;

class user {
   // Authenticate user using jwt
   static userLogin = async (req, res) => {
      try {
         const { email, password } = req.body;

         const user = await userModel.findOne({
            where: {
               email: email,
               passowrd: password,
            },
         });

         if (!user) {
            return res
               .status(400)
               .json({ error: 'There is no user mach the info !!' })
               .end();
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
      } catch (err) {
         console.log(err);
         return res.status(400).json({
            message: 'Unexpected Error',
            status: 400,
            error: err,
         });
      }
   };
}

module.exports = user;
