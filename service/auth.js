// const jwt = require('jsonwebtoken');
// const secret = "hritvik1234";

// function setUser(user) {
//     return jwt.sign({
//         _id: user._id,
//         email: user.email
//     }, secret);
// }

// function getUser(token) {
//     if (!token) return null;
//     try {
//         return jwt.verify(token, secret);
//     } catch (error) {
//         return null;
//     }
// }

// module.exports = { setUser, getUser };
const jwt = require('jsonwebtoken');
const secret = "hritvik1234";

function setUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email
    }, secret);
}

function getUser(token) {
    if (!token) return null;
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        console.log('Token verification failed:', error.message);
        return null;
    }
}


module.exports = { setUser, getUser };
