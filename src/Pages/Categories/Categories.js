import React from 'react';
import { useParams } from 'react-router';
import Products from '../../components/Products/Products';
import { useStateValue } from '../../components/ContextApi/StateProvider';

const Categories = (props) => {
    const [{ fetchData }, dispatch] = useStateValue();
    let { id } = useParams();
    console.log(id);

    const filter = () => {
        if (id !== undefined && fetchData[0] !== undefined) {
            const displayItems = fetchData[0][id]?.products;
            console.log(displayItems);
            return displayItems;
        }
    }
    const displayArray = filter();

    return <div className="bg-light">

        <div className="">

            <img className="home__image" src="/images/amazon_prime.jpg" alt="." />
        </div>

        <div className="row">
            {displayArray?.map((data, index) => (
                <Products
                    className="col-4"
                    index={index}
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    price={data.price}
                    data={data}
                    rating={data.rating}
                    image={data.imageUrl}
                />
            ))}
        </div>
    </div>
}

export default Categories;