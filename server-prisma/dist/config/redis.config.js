"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redis = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
exports.redis = new ioredis_1.default({
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: 6379,
    retryStrategy: (times) => {
        const delay = Math.min(times * 50, 2000);
        return delay;
    }
});
exports.redis.on('connect', () => {
    console.log('Connected to Redis');
});
exports.redis.on('error', (err) => {
    console.error('Redis error:', err);
});
//# sourceMappingURL=redis.config.js.map