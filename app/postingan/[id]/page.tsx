import Image from "next/image";
type Product = {
    id: number;
    title: string;
    description: string;
    price: number
};

async function getDetailPostingan(id: any) {
    let detailPostingan = await fetch(`https://dummyjson.com/products/${id}`);
    return detailPostingan.json()
}

export default async function Page({ params }: { params: Product }) {
    const detail = await getDetailPostingan(params.id)
    console.log({ detailProduct: detail })
    return (<div>
        <Image src={detail.thumbnail} alt={detail.title} width={400} height={400}></Image>
        <p>Brand : {detail.brand}</p>
        <p>Category : {detail.category}</p>
        <p>Rating : {detail.rating}</p>
        <p>Stock : {detail.stock}</p>
        <p>Price : {detail.price}</p>
        <p>Description : {detail.description}</p>
    </div>)
}
