import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const ProductCard = ({ product }) => {
    const { title, img, rating, price } = product;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="px-10 pt-10">
                <figure className="bg-slate-200 h-48 rounded-xl">
                    <img src={img} alt="Shoes" className="w-2/4 " />
                </figure>
            </div>
            <div className="card-body items-center">
                <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                <h2 className="card-title">{title}</h2>
                <p className="text-orange-500">Price: ${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;