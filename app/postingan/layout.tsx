import Link from "next/link";
import { use } from "react";

type Product = {
    id: number;
    title: string;
    description: string;
    price: number
};

async function ambilPostingan() {
    const products = await fetch('https://dummyjson.com/products?limit=10');
    return products.json();
}

export default async function Layout({ children }: { children: React.ReactNode }) {
    const { products } = await ambilPostingan();
    console.log(products);
    return (
        <div>
            {
                products.map((product: Product, index: number) => (
                    <div key={product.id}>
                        <Link href={`/postingan/${product.id}`}><b>No. {product.id} - {product.title}</b></Link>
                        <p>{product.description}</p>
                    </div>
                ))}
            <hr className="mt-5 mb-5" />
            <div>{children}</div>
        </div>
    )
}
