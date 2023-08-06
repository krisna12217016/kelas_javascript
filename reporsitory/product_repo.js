import dbPool from "../database/db.js";

export const getAll = async () => { 
    const sql = "SELECT * FROM product";
    const [result] = await dbPool.query(sql); 
    return result;
}

export const createData = async (nama, price) => {
    let createdAt = new Date();
    const sql = "INSERT INTO product (nama, price) VALUES (?, ?)";
    const values = [nama, price];

    return dbPool.query(sql, values);
}

export const updateProduct = async (id_product, nama, price) => {
    let updatedAt = new Date();
    const sql = "UPDATE product SET nama = ?, price = ? WHERE id_product = ?";
    const value = [nama, price, id_product];
    const [result] = await dbPool.query(sql, value);

    if (result.affectedRows > 0) {
        return true;
    } else {
        return false;
    }
}

export const deleteProduct = (id_product) => {
    const sql = "DELETE FROM users where id_product = ?";
    const result = dbPool.query(sql, [id_product]);

    return result;
};
