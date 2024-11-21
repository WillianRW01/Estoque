const jwt = require('jsonwebtoken');
const user = require('../service/user');
const secret = "Batata";

function authMiddleware(role) {
    return async (req, res, next) => {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(400).json({ msg: "Token não fornecido ou válido" });
        }

        const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;

        try {
            const decode = jwt.verify(token, secret);
            const verify = await user.Verify(decode.id, decode.role);

            if (!verify || (role && !role.includes(decode.role))) {
                return res.status(401).json({ msg: "Sem permissão" });
            }

            req.session = decode;
            next();
        } catch (err) {
            return res.status(400).json({ msg: "Token inválido" });
        }
    };
}

module.exports = authMiddleware;
