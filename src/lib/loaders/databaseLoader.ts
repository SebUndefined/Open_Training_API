import { createConnection } from "typeorm";

export const databaseLoader = async () => {
    try {
        const connection = await createConnection();
        console.log(connection.options.entities)
        console.log(connection.entityMetadatas)
    } catch (error) {
        console.log(error)
    }
}