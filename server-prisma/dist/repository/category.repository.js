"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepository = void 0;
const client_1 = require("@prisma/client");
class CategoryRepository {
    constructor() {
        this._prisma = new client_1.PrismaClient();
    }
    async find() {
        return await this._prisma.category.findMany();
    }
    async create(data) {
        return await this._prisma.category.create({
            data: data
        });
    }
}
exports.CategoryRepository = CategoryRepository;
//# sourceMappingURL=category.repository.js.map