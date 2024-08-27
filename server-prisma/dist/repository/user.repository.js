"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const client_1 = require("@prisma/client");
class UserRepository {
    constructor() {
        this._prisma = new client_1.PrismaClient;
    }
    async create(data) {
        return await this._prisma.user.create({
            data: data
        });
    }
    async find() {
        return await this._prisma.user.findMany();
    }
    async delete(id) {
        return await this._prisma.user.delete({
            where: {
                id
            }
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map