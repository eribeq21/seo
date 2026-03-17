import { createConnection } from "$lib/db/mysql";

export async function load(){

    const connection = await createConnection();
    const [ products ] = await connection.execute("SELECT * FROM products order by name");

    return {
        products
    };
}