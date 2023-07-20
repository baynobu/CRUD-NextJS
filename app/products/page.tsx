import { PrismaClient } from "@prisma/client";
import AddProduct from "./addProduct";
const prisma = new PrismaClient();
import DeleteProduct from "./deleteProduct";
import UpdateProduct from "./updateProduct";

const getProducts = async () => {
  const res = await prisma.product.findMany({
    select: {
      id: true,
      title: true,
      price: true,
      brandId: true,
      brand: true,
    },
  });
  return res;
};

const getBrands = async () => {
  const res = await prisma.brand.findMany();
  return res;
};

const Product = async () => {
  const [products, brands] = await Promise.all([getProducts(), getBrands()]);

  return (
    <div>
      <div className="mb-2">
        <AddProduct brands={brands} />
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Brand</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((Product, index) => (
            <tr key={Product.id}>
              <td>{index + 1}</td>
              <td>{Product.title}</td>
              <td>{Product.price}</td>
              <td>{Product.brand.name}</td>
              <td className="flex justify-center space-x-1">
                <UpdateProduct brands={brands} product={Product}/>
                <DeleteProduct product={Product}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
