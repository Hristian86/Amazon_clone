import React from 'react';

const ProductList = ({ data }) => {

    // Table => Orders => mappet products.
    return <td>{data?.map((datas, index) =>
        <p key={index}>
            {datas.product.title}{data.length > 1 && index < data.length - 1 ? ",": null}
        </p>
    )}
    </td>
}

export default ProductList;