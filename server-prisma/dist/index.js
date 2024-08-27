"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const node_http_1 = __importDefault(require("node:http"));
require("reflect-metadata");
const apollo_config_1 = require("./config/apollo.config");
const cors_config_1 = require("./config/cors.config");
const rateLimit_config_1 = require("./config/rateLimit.config");
const redis_config_1 = require("./config/redis.config");
const session_config_1 = require("./config/session.config");
const socket_config_1 = require("./config/socket.config");
dotenv_1.default.config();
const constansts_utils_1 = require("./utils/constansts.utils");
const main = async () => {
    if (process.env.NODE_ENV === "test") {
        await redis_config_1.redis.flushall();
    }
    const app = (0, express_1.default)();
    app.use((0, cookie_parser_1.default)());
    app.use(session_config_1.expressSession);
    app.use(express_1.default.json());
    app.use((0, compression_1.default)());
    app.use(rateLimit_config_1.rateLimiter);
    app.use(cors_config_1.corsConfig);
    const httpServer = node_http_1.default.createServer(app);
    (0, socket_config_1.socketConnection)(httpServer);
    (0, apollo_config_1.apolloServerConfig)(app);
    httpServer.listen(constansts_utils_1.PORT, () => {
        console.log(`Server running at port ${constansts_utils_1.PORT}`);
    });
};
main();
//# sourceMappingURL=index.js.map