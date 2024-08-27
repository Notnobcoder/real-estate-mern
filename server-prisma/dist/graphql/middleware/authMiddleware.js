"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const AuthMiddleware = async ({}, next) => {
    console.log("middleware working");
    return next();
};
exports.AuthMiddleware = AuthMiddleware;
const prisma = new client_1.PrismaClient();
prisma.$use(async (params, next) => {
    if (params.model === 'User') {
        if (params.action === 'create' || params.action === 'update') {
            const user = params.args.data;
            if (user.password) {
                const hashedPassword = await bcrypt_1.default.hash(user.password, 10);
                user.password = hashedPassword;
            }
        }
    }
    return next(params);
});
//# sourceMappingURL=authMiddleware.js.map