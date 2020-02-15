import {createConnection, useContainer} from "typeorm";
import {Container} from "typedi";


export const databaseLoader = async () => {
    try {
        useContainer(Container);
        await createConnection();
    } catch (error) {
        console.log(error)
    }
}