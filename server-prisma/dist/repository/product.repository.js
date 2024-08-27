"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const client_1 = require("@prisma/client");
class ProductRepository {
    constructor() {
        this._prisma = new client_1.PrismaClient();
    }
    async create(data) {
        return await this._prisma.product.create({
            data: data
        });
    }
    async find() {
        return await this._prisma.product.findMany();
    }
}
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map