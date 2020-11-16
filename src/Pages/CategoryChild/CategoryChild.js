import React from 'react';
import { useStateValue } from '../../components/ContextApi/StateProvider';
import Loader from '../../components/Loader/Loader';
import Products from '../../components/Products/Products';
import { useLocation } from 'react-router';

const CategoryChild = () => {
    const [{ fetchData }, dispatch] = useStateValue();
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();

    // Query parametar from url.
    let perantid = query.get("perantid");

    // This is the chields of the root category e.g. Phones, Pc components, Watches.
    return <div className="home bg-light">

        <img className="home__image" src="/images/amazon_prime.jpg" alt="." />
        <div className="home__row row ml-sm-2 justify-content-center">


            <div className="row justify-content-center">
                {fetchData[0] === undefined ? <Loader /> : null}
                {fetchData[0]?.map((data, index) => {
                    if (data.id == perantid) {
                        return data.categories.map((data, index) => {
                            console.log(data);
                            return <Products
                                className="col-6"
                                categoryPerantId={data?.categoryPerantId}
                                index={index}
                                delimeter={data?.delimeter}
                                key={data.id}
                                type={data?.type}
                                id={data?.id}
                                title={data?.name}
                                price={0}
                                data={data}
                                rating={0}
                                productsCount={data.productsCount}
                                image={data?.imageURL ? data.imageURL : data.imageUrl}
                            />
                        })
                    }
                   
                })}
            </div>
        </div>

    </div>

}

export default CategoryChild;