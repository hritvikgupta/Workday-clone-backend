const { getUser } = require('../service/auth');

const restrictToLoginUserOnly = async (req, res, next) => {
    const userUid = req.cookies?.uid;
    if (!userUid) return res.status(401).json({ message: "Unauthorized" });

    const user = await getUser(userUid);
    if (!user) return res.status(401).json({ message: "Unauthorized" });

    req.user = user;
    next();
};


const checkAuth = async (req, res, next) => {
    const userUid = req.cookies?.uid;
    console.log(`Checking auth for userUid: ${userUid}`);

    if (userUid) {
        const user = await getUser(userUid);
        if (user) {
            req.user = user;
            console.log(`Authenticated user: ${user.email}`);
        } else {
            console.log('User not found or invalid token');
            res.clearCookie('uid');
            return res.status(401).json({ message: "Unauthorized" });
        }
    } else {
        console.log('No userUid found in cookies');
    }
    next();
};


module.exports = { restrictToLoginUserOnly, checkAuth };
