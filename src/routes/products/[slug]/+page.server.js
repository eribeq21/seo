import { createConnection } from "$lib/db/mysql.js";


export async function load({ params }) {
    
    const connection = await createConnection();
    let slug = params.slug;

    const [ rows ] = await connection.execute(
        "SELECT * FROM products WHERE slug = ?", [slug]
    );

    if (rows.length === 0) {
        return {
            status: 404,
            error: new Error("Product not found")
        };
    }

    return {
        product: rows[0]
    };
}