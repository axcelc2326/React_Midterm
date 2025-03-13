import Link from "next/link";

export interface Products {
    id: number;
    title: string;
    description: string;
}

const Card = ({ product }: { product: Products }) => {
return (
<div className="w-full sm:w-80 p-5 bg-gray-900 text-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
    <h2 className="text-2xl font-semibold text-blue-400 truncate">{product.title}</h2>
    <p className="text-sm text-gray-300 mt-2">{product.description}</p>
</div>
);
};

const Page = async () => {
const res = await fetch("https://dummyjson.com/products");
const data = await res.json();
const products: Products[] = data.products;

return (
<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-10 px-5">
    {/* Back Button */}
    <div className="px-7">
    <Link href="/" className="text-lg text-blue-400 hover:text-blue-300 transition duration-200">
        ⬅ Back
    </Link>
    </div>

    {/* Title */}
    <h1 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-5">
    All Products
    </h1>

    {/* Product Grid */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
    {products?.map((p) => (
        <Card key={p.id} product={p} />
    ))}
    </div>
</div>
);
};

export default Page;
