"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResolver = void 0;
const type_graphql_1 = require("type-graphql");
const client_1 = require("@prisma/client");
const product_objectType_1 = require("../types/product/product.objectType");
const product_inputType_1 = require("../types/product/product.inputType");
let ProductResolver = class ProductResolver {
    constructor() {
        this._prisma = new client_1.PrismaClient;
    }
    async getProducts() {
        try {
            const result = await this._prisma.product.findMany({
                where: {
                    isActive: true
                }
            });
            return result;
        }
        catch (error) {
            console.error(error);
            return "error fetching Data";
        }
    }
    async getProductById(id) {
        try {
            const product = await this._prisma.product.findUnique({
                where: { id },
            });
            if (!product) {
                return "No Product Found";
            }
            return product;
        }
        catch (error) {
            console.error(error);
            return "Error Occured ";
        }
    }
    async addProduct(product) {
        try {
            await this._prisma.product.create({
                data: product
            });
            return "product creted Succesfully ";
        }
        catch (error) {
            console.log(error);
            return "Error";
        }
    }
};
exports.ProductResolver = ProductResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [product_objectType_1.ProductT]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProducts", null);
__decorate([
    (0, type_graphql_1.Query)(() => product_objectType_1.ProductT),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProductById", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("product")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_inputType_1.ProductInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "addProduct", null);
exports.ProductResolver = ProductResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [])
], ProductResolver);
//# sourceMappingURL=product.resolver.js.map