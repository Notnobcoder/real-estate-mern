"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apolloServerConfig = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const product_resolver_1 = require("../graphql/resolvers/product.resolver");
const apolloServerConfig = async (app) => {
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [product_resolver_1.ProductResolver],
            validate: false
        }),
        context: ({ req, res }) => ({ req, res }),
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({
        app,
        cors: false
    });
};
exports.apolloServerConfig = apolloServerConfig;
//# sourceMappingURL=apollo.config.js.map