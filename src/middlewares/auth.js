const dotenv = require('dotenv');
dotenv.config();

const { verify } = require('jsonwebtoken');

const validateToken = (req, res, next) => {
   const accessToken = req.cookies['access-token'];
   if (!accessToken) {
      return res.status(400).json({
         error: 'You are not logged In, Please Loggin to continue !!',
      });
   }

   try {
      const validToken = verify(accessToken, process.env.ACCESS_TOKEN);
      req.user = validToken;

      if (validToken) {
         req.authenticated = true;
         return next();
      }
   } catch (err) {
      return res.status(400).json({ error: err });
   }
};

module.exports = { validateToken, createTokens };
