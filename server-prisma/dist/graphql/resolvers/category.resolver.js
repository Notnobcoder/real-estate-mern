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
exports.CategoryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const category_inputType_1 = require("../types/category/category.inputType");
const category_repository_1 = require("../../repository/category.repository");
const category_objectType_1 = require("../types/category/category.objectType");
let CategoryResolver = class CategoryResolver {
    constructor() {
        this._repository = new category_repository_1.CategoryRepository();
    }
    async categories() {
        try {
            const result = await this._repository.find();
            return result;
        }
        catch (error) {
            console.log(error);
            return "Error";
        }
    }
    async category(data) {
        try {
            console.time("startTimer");
            const category = await this._repository.create(data);
            console.timeEnd("startTimer");
            console.log(category);
            return "Category added successfully";
        }
        catch (error) {
            console.log(error);
            return "Error";
        }
    }
};
exports.CategoryResolver = CategoryResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [category_objectType_1.CategoryT]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "categories", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_inputType_1.CategoryInput]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "category", null);
exports.CategoryResolver = CategoryResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [])
], CategoryResolver);
//# sourceMappingURL=category.resolver.js.map