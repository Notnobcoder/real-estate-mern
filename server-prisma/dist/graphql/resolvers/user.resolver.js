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
exports.UserResolver = void 0;
const user_repository_1 = require("../../repository/user.repository");
const type_graphql_1 = require("type-graphql");
const user_objectType_1 = require("../types/user/user.objectType");
const user_inputType_1 = require("../types/user/user.inputType");
let UserResolver = class UserResolver {
    constructor() {
        this._repository = new user_repository_1.UserRepository();
    }
    async users() {
        try {
            const users = await this._repository.find();
            console.log(users, "uuuuuuuuu");
            return users;
        }
        catch (error) {
            console.log(error);
            return "error occured";
        }
    }
    async user(input) {
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
exports.UserResolver = UserResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [user_objectType_1.UserT]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_inputType_1.UserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
exports.UserResolver = UserResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [])
], UserResolver);
//# sourceMappingURL=user.resolver.js.map