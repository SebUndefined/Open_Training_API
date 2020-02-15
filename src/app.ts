import { createExpressServer, useContainer } from 'routing-controllers';
import dotenv from "dotenv";
import { Container } from "typedi";
import Banner from './lib/logger/Banner'
import Loader from './lib/loaders';

class App {
    static async initialize() {
        Banner.printTitle("Open Training API");
        dotenv.config();
        useContainer(Container);
        try {
            await Loader.loadAll();
            createExpressServer({
                cors: true,
                controllers: [__dirname + "/api/controllers/*{.js,.ts}"],
            }).listen(process.env.APP_PORT)
        } catch (error) {
            console.log(error)
        }
    }
}


App.initialize();