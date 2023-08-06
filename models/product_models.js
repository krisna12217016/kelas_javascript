import * as ProductRepository from '../reporsitory/product_repo.js';
import { respSuccess } from '../models/response.js';

export const getProduct = async (req, res, next) => {
    try {
        const products = await ProductRepository.getAll();
        respSuccess(res, "success", products);
    } catch (error) {
        next(error);
    }
};

export const addProduct = async (req, res, next) => {
    try {
        const { nama, price } = req.body;
        await ProductRepository.createData(nama, price);
        respSuccess(res, "Selamat, Anda Berhasil Menambahkan Data Product");
    } catch (error) {
        next(error);
    }
};

export const updateProduct = async (req, res, next) => {
    const { id_product } = req.params;
    const { nama, price } = req.body;

    try {
        const product = await ProductRepository.updateProduct(id_product, nama, price);
        if (product) {
            return res.status(200).json({ message: 'Selamat, Anda Berhasil Merubah Data Product' });
        } else {
            return res.status(404).json({ message: 'Maaf, Product Tidak Ditemukan' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Maaf, Anda Gagal Merubah Data Product' });
    }
};

export const deleteProduct = async (req, res, next) => {
    const { id_product } = req.params;

    try {
        const product = await ProductRepository.deleteProduct(id_product);
        if (product) {
            return res.status(200).json({ message: 'Selamat, Anda Berhasil Menghapus Data Product' });
        } else {
            return res.status(404).json({ message: 'Maaf, Product Tidak Ditemukan' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Maaf, Anda Gagal Menghapus Data Product' });
    }
};