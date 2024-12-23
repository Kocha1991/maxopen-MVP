import { useState, useEffect } from "react";

export const useFetchData = (endpoint, language = null, fallbackLocale = "en") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = language
          ? `https://api.maxopen.com.ua/api/0b75148ea08740bd8c78fc4077500b5d/${endpoint}?where[locale]=${language}`
          : `https://api.maxopen.com.ua/api/0b75148ea08740bd8c78fc4077500b5d/${endpoint}`;

        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: "Bearer c8TUpsSJoXrGQLD0laAtVwYOgJdGtEPm72xrA2SP",
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch data from ${endpoint}`);
        }

        const result = await response.json();

        if (language) {
          const filteredData =
            result.filter((item) => item.locale === language).length > 0
              ? result.filter((item) => item.locale === language)
              : result.filter((item) => item.locale === fallbackLocale);

          setData(filteredData);
        } else {
          setData(result);
        }
      } catch (err) {
        console.error(`Error fetching data from ${endpoint}:`, err);
        setError(`Error fetching data: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, language, fallbackLocale]);

  return { data, loading, error };
};
