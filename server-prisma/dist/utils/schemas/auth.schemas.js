"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = exports.AuthSchema = void 0;
const zod_1 = require("zod");
exports.AuthSchema = zod_1.z.object({
    username: zod_1.z.string().min(1, "username is required"),
    email: zod_1.z.string().email().min(1, "email is required"),
    password: zod_1.z.string().min(1, "password is required"),
});
exports.ProductSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
});
//# sourceMappingURL=auth.schemas.js.map