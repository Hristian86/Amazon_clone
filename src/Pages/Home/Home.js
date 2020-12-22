import React from 'react';
import './Home.css';
import Products from '../../components/Products/Products';
import { useStateValue } from '../../components/ContextApi/StateProvider';
import Loader from '../../components/Loader/Loader';
import FetchData from '../../components/AuthListener/FetchData';
import CrossScript from '../../components/ValidateCrossScripting/CrossScrit';
import getCookie from '../../components/Cookies/GetCookie';
import { useHistory } from 'react-router';
import CategoryPerant from '../../components/categoryPerantModel/CategoryPerant';

const Home = () => {
    const role = getCookie("role");
    const [{ fetchData }, dispatch] = useStateValue();
    const history = useHistory();

    // Test for the context api store date
    const showData = () => {
        history.push("/landingadminpage");
    }

    // Some tests
    const testApi = async () => {

        const result = await FetchData("api/testApi", null, "POST");

        //const result = CrossScript();

        console.log(result);
    }

    return <div className="home bg-light">

        <img className="home__image" src="/images/amazon_prime.jpg" alt="." />
        <div className="home__row row ml-sm-2 justify-content-center">


            <div className="row justify-content-center">
                {fetchData[0] === undefined
                    ? <div>
                        <h3 className="overlap__wait">Please wait</h3>
                        <div className="text-center">
                            <Loader />
                        </div>
                    </div>
                    : null}

                {fetchData[0]?.map((data, index) => (
                    <CategoryPerant
                        className="col-6"
                        index={index}
                        delimeter={data?.delimeter}
                        categoriesCount={data?.categoriesCount}
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
                ))}
            </div>
        </div>

        {role === "Admin" ?
            <div className="row w-100 d-flex justify-content-between">
                <div className="admin__widgets">

                    <button className="btn btn-warning mr-2" onClick={showData} >AdminPage</button>

                    <button className="btn btn-success" >Not implemented</button>

                </div>
            </div>
            : null}

    </div>
}

export default Home;