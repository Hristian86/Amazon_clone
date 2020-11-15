import React from 'react';
import { useStateValue } from '../../components/ContextApi/StateProvider';
import Products from '../../components/Products/Products';
import { useHistory } from 'react-router';
import AdminCategoryModel from './AdminCategoryModel';

const StartAdminPage = () => {
    const [{ fetchData }, dispatch] = useStateValue();
    
    return <div className="row">

        {fetchData[0]?.map((data, index) => (
            <AdminCategoryModel
                className="col-6"
                index={index}
                key={data.id}
                type={data?.type}
                id={data.id}
                title={data.name}
                price={0}
                data={data}
                rating={0}
                productsCount={data.productsCount}
                image={data.imageUrl}
                />
        ))}

    </div>

}

export default StartAdminPage;