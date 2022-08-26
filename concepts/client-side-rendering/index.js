import { useEffect, useState } from "react";
import useSWR from "swr";
// normal component as React has with useEffect...

// const data = [{ id: '1', data: 'test' }];

function LastSalesPage() {
    const [sales, setSales] = useState([]);
    const [loading, setLoading] = useState(false);

    // next approach to send request instead of inside useEffect
    const { data, error } = useSWR('someUrl');

    // useEffect(() => {
    //     setLoading(true);
    //     fetch("someUrl")
    //         .then(response => response.json())
    //         .then(data => {
    //             const transformedData = [];
    //             // to iterate over an array:
    //             for (const key in data) {
    //                 transformedData.push({ id: key, data: data[key].data });
    //             }

    //         })
    //         .catch(err => console.log(err));
    // }, []);

}

export default LastSalesPage;