/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Product = {
  productCode: string;
  productName: string;
    sellingPrice: number;
    stockQuantity: number;
    productWeight: number;
    averageRating: number;
    isDiscounted: boolean;
};

const products: Product[] = [
  {
    productCode: "PRD001",
    productName: "Wireless Earphone",
    sellingPrice: 1500000,
    stockQuantity: 50,
    productWeight: 0.2,
    averageRating: 2.1,
    isDiscounted: true
  },
  
  {
    productCode: "PRD002",
    productName: "Smart Watch",
    sellingPrice: 2500000,
    stockQuantity: 30,
    productWeight: 0.1,
    averageRating: 4.8,
    isDiscounted: false
  },

  {
    productCode: "PRD003",
    productName: "Gaming Mouse",
    sellingPrice: 800000,
    stockQuantity: 100,
    productWeight: 1.5,
    averageRating: 4.2,
    isDiscounted: true
  }
];

products.forEach((product, index) => {
  console.log(`\nData Produk ke-${index + 1}`);
  console.log(`Kode Produk   : ${product.productCode}`);
  console.log(`Nama Produk   : ${product.productName}`);
  console.log(`Harga Jual    : ${product.sellingPrice}`);
  console.log(`Stok Tersedia : ${product.stockQuantity}`);
  console.log(`Berat Produk  : ${product.productWeight} kg`);
  console.log(`Rating Rata-rata: ${product.averageRating}`);
  console.log(`Diskon        : ${product.isDiscounted ? "Ya" : "Tidak"}`);
});