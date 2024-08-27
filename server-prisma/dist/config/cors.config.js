"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsConfig = void 0;
const cors_1 = __importDefault(require("cors"));
exports.corsConfig = (0, cors_1.default)({
    origin: process.env.NODE_ENV != "production" ? "*" : process.env.FRONT_END_URL,
    credentials: true
});
//# sourceMappingURL=cors.config.js.map