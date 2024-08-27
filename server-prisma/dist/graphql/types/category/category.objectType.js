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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryT = void 0;
const type_graphql_1 = require("type-graphql");
const product_objectType_1 = require("../product/product.objectType");
let CategoryT = class CategoryT {
};
exports.CategoryT = CategoryT;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CategoryT.prototype, "productId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", String)
], CategoryT.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CategoryT.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CategoryT.prototype, "slug", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CategoryT.prototype, "image", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CategoryT.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CategoryT.prototype, "isActive", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => product_objectType_1.ProductT, { nullable: true }),
    __metadata("design:type", product_objectType_1.ProductT)
], CategoryT.prototype, "Product", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], CategoryT.prototype, "created", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], CategoryT.prototype, "updated", void 0);
exports.CategoryT = CategoryT = __decorate([
    (0, type_graphql_1.ObjectType)()
], CategoryT);
//# sourceMappingURL=category.objectType.js.map