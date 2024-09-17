import { useState,useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch data');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                console.log(data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [url]);

    return { data }
}
export default useFetch