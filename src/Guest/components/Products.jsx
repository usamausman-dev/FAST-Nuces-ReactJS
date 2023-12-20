import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// const products = [
//     {
//         id: 1,
//         name: 'Earthen Bottle',
//         href: '#',
//         price: '$48',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
//         imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//     },
//     {
//         id: 2,
//         name: 'Nomad Tumbler',
//         href: '#',
//         price: '$35',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
//         imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
//     },
//     {
//         id: 3,
//         name: 'Focus Paper Refill',
//         href: '#',
//         price: '$89',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
//         imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//     },
//     {
//         id: 4,
//         name: 'Machined Mechanical Pencil',
//         href: '#',
//         price: '$35',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//         imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//     },
//     // More products...
// ]
// const products = []
export default function Products() {
    const [num, setNum] = useState(0)

    const [products, setProducts] = useState([])




    useEffect(() => {

        axios.get('https://dummyjson.com/products').then((res) => setProducts(res.data.products))


    }, [])

    return (
        <div className="bg-white">


            {/* <div className="flex justify-between items-center bg-slate-300 p-16">
                <button className="bg-slate-900 text-white px-16 py-4 rounded-md font-semibold text-2xl" onClick={() => setNum(num + 1)}>+</button>
                <span>{num}</span>
                <button className="bg-slate-900 text-white px-16 py-4 rounded-md font-semibold text-2xl" onClick={() => setNum(num - 1)}>-</button>
            </div> */}

            <div className="text-center ">

                <h1 className="font-semibold mt-10 text-4xl">Products</h1>
                <p className="px-24 mt-4 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusamus cum quod perferendis quibusdam sequi nemo, iste commodi aspernatur enim facilis, delectus debitis, id molestiae. Animi est explicabo eligendi debitis!</p>

            </div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <Link key={product.id} to={product.id} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="object-contain h-48 w-96 object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
