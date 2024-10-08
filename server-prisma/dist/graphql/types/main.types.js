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
exports.CategoryCreateInput = exports.UserInputType = exports.ProductInputType = void 0;
const client_1 = require("@prisma/client");
const type_graphql_1 = require("type-graphql");
let ProductInputType = class ProductInputType {
};
exports.ProductInputType = ProductInputType;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ProductInputType.prototype, "name", void 0);
exports.ProductInputType = ProductInputType = __decorate([
    (0, type_graphql_1.InputType)()
], ProductInputType);
let UserInputType = class UserInputType {
};
exports.UserInputType = UserInputType;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInputType.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], UserInputType.prototype, "phoneNumber", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInputType.prototype, "firstName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInputType.prototype, "lastName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInputType.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => CategoryCreateNestedManyWithoutProductInput, { nullable: true }),
    __metadata("design:type", Object)
], UserInputType.prototype, "category", void 0);
exports.UserInputType = UserInputType = __decorate([
    (0, type_graphql_1.InputType)()
], UserInputType);
let CategoryCreateInput = class CategoryCreateInput {
};
exports.CategoryCreateInput = CategoryCreateInput;
exports.CategoryCreateInput = CategoryCreateInput = __decorate([
    (0, type_graphql_1.InputType)()
], CategoryCreateInput);
let CategoryCreateNestedManyWithoutProductInput = class CategoryCreateNestedManyWithoutProductInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => [CategoryCreateInput], { nullable: true }),
    __metadata("design:type", Array)
], CategoryCreateNestedManyWithoutProductInput.prototype, "create", void 0);
CategoryCreateNestedManyWithoutProductInput = __decorate([
    (0, type_graphql_1.InputType)()
], CategoryCreateNestedManyWithoutProductInput);
//# sourceMappingURL=main.types.js.map