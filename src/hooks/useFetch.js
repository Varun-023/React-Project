import { useState, useEffect } from "react";

function useFetch(fetchFunction) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        async function loadData() {

            try {

                const result = await fetchFunction();

                setData(result);

            }
            catch {

                setError("Failed to load data");

            }
            finally {

                setLoading(false);

            }

        }

        loadData();

    }, [fetchFunction]);

    return {
        data,
        loading,
        error
    };

}

export default useFetch;
