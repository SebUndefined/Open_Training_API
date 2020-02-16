import { createExpressServer, useContainer } from 'routing-controllers';
import dotenv from "dotenv";
import { Container } from "typedi";
import Banner from './lib/logger/Banner'
import Loader from './lib/loaders';
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql';
import { EmployeeResolver } from './api/resolvers/GraphQLTest';

class App {
    static async initialize() {
        Banner.printTitle("Open Training API");
        dotenv.config();
        useContainer(Container);
        const schema = await buildSchema({
            resolvers: [EmployeeResolver],
            dateScalarMode: "isoDate",
            container: Container,
          });
        const apolloServer = new ApolloServer({schema});
        try {
            await Loader.loadAll();
            const app = createExpressServer({
                cors: true,
                controllers: [__dirname + "/api/controllers/*{.js,.ts}"],
            })
            apolloServer.applyMiddleware({ app })
            app.listen(process.env.APP_PORT)
        } catch (error) {
            console.log(error)
        }
    }
}


App.initialize();