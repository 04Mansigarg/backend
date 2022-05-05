const jwt = require('jsonwebtoken');
const get_user_by_token = (token) => {

    return new Promise((resolve,reject) => {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
            if (err) return reject(err)
            return resolve(user)
        });

    })
}
const authCheck = async (req, res, next) => {
    const headers = req.headers
    const accessToken = headers.token

    if (!(accessToken && accessToken.startsWith("Bearer "))) {
        return res.status(404).send("User doesnot have access to post the data")
    }

    const token = accessToken.split(" ")[1]

    let user
    try {
        user = await get_user_by_token(token)
    }
    catch (e) {
        return res.status(400).json(e.message)
    }

    req.user = user.user
    return next()


}
module.exports = authCheck