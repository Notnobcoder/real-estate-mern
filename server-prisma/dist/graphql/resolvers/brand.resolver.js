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
exports.BrandResolver = void 0;
const type_graphql_1 = require("type-graphql");
const brand_repoistory_1 = require("../../repository/brand.repoistory");
const brand_objectType_1 = require("../types/brand/brand.objectType");
const brand_inputType_1 = require("../types/brand/brand.inputType");
let BrandResolver = class BrandResolver {
    constructor() {
        this._repository = new brand_repoistory_1.BrandRepository();
    }
    async Brands() {
        try {
            const users = await this._repository.find();
            console.log(users, "uuuuuuuuu");
            return "user";
        }
        catch (error) {
            console.log(error);
            return "error occured";
        }
    }
    async Brand(input) {
        try {
            const user = await this._repository.create(input);
            console.log(user);
            return "User Created";
        }
        catch (error) {
            console.log(error);
            return "error occured";
        }
    }
};
exports.BrandResolver = BrandResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [brand_objectType_1.BrandT]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrandResolver.prototype, "Brands", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_inputType_1.BrandInput]),
    __metadata("design:returntype", Promise)
], BrandResolver.prototype, "Brand", null);
exports.BrandResolver = BrandResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [])
], BrandResolver);
//# sourceMappingURL=brand.resolver.js.map