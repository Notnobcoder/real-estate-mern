"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandRepository = void 0;
const client_1 = require("@prisma/client");
class BrandRepository {
    constructor() {
        this._prisma = new client_1.PrismaClient;
    }
    async create(data) {
        return await this._prisma.brand.create({
            data: data
        });
    }
    async find() {
        return await this._prisma.brand.findMany();
    }
    async delete(id) {
        return await this._prisma.user.delete({
            where: {
                id
            }
        });
    }
}
exports.BrandRepository = BrandRepository;
//# sourceMappingURL=brand.repoistory.js.map