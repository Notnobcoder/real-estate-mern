"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const mainCheck = async () => {
    const product = await prisma.product.create({
        data: {
            name: "product1"
        }
    });
    console.log(product);
};
mainCheck();
//# sourceMappingURL=index2.js.map