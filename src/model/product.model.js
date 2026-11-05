// product.model.js

const getStockProductsModel = () => {
    // Simula un SELECT * FROM products WHERE stock > 0
    return [
        { id: 101, nombre: "Laptop", precio: 1200, stock: 5 },
        { id: 102, nombre: "Ratón", precio: 25, stock: 50 }
    ];
};

const getProductBySkuModel = (sku) => {
    // Simula una búsqueda por código único (SKU)
    return { id: 105, sku: sku, nombre: "Teclado Mecánico", precio: 80 };
};

const insertNewProductModel = (productData) => {
    // Simula un INSERT de un nuevo producto
    return { exito: true, idGenerado: 106, datos: productData };
};

const updateProductPriceModel = (id, newPrice) => {
    // Simula un UPDATE products SET precio = ? WHERE id = ?
    return { id: id, precioAnterior: 100, nuevoPrecio: newPrice, actualizado: true };
};

const disableProductModel = (id) => {
    // Simula un borrado lógico: UPDATE products SET activo = false WHERE id = ?
    return { mensaje: `El producto ${id} ha sido deshabilitado del catálogo.`, activo: false };
};

// Exportamos las funciones
module.exports = {
    getStockProductsModel,
    getProductBySkuModel,
    insertNewProductModel,
    updateProductPriceModel,
    disableProductModel
};