import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import FetchData from '../../components/AuthListener/FetchData';
import Loader from '../../components/Loader/Loader';

const AdminIp = () => {
    const [ipAddresses, setIpAddresses] = useState({
        ipTable: []
    });

    useEffect(() => {
        const getIpAddresses = async () => {
            const result = await FetchData("api/admin", null, "GET");

            if (result?.error && result?.errors) {

            } else if (result?.result) {

                setIpAddresses({
                    ipTable: result?.result
                })
            }
        }

        getIpAddresses();
    }, []);


    return <div>

        <table className="table text-center">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ip addresses.</th>
                    <th scope="col">emails.</th>
                    <th scope="col">visit count.</th>
                    <th scope="col">Modified on.</th>
                </tr>
            </thead>

            {ipAddresses?.ipTable !== undefined
                ? ipAddresses?.ipTable.map((data, index) => {
                    return <tr key={index} className="order__table" >
                        <th scope="col">{index + 1}</th>
                        <td>{data?.ip}</td>
                        <td>{data?.email} <small>&euro;</small></td>
                        <td>{data?.visits}</td>
                        <td>{data?.modifiedOn}</td>

                    </tr>
                })
                : <Loader />
            }
        </table>

    </div>

}

export default AdminIp;