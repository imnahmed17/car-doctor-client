import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://car-doctor-server-five-sepia.vercel.app/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="mt-20">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-orange-600">Popular Products</h3>
                <h2 className="text-5xl">Browse Our Products</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> Words which do not look even slightly believable.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    products.map(product => <ProductCard 
                        key={product._id} 
                        product={product} 
                    />)
                }
            </div>
        </div>
    );
};

export default Products;