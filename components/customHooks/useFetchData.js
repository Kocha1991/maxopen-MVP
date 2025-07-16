import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_BEARER_TOKEN_GET}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return response.json();
};

export const useFetchData = (endpoint, language = null, returnFirst = false) => {
  const locale = language === "ru" ? "ru_UA" : language;
  const url = locale
    ? `https://api.maxopen.com.ua/api/0b75148ea08740bd8c78fc4077500b5d/${endpoint}?where[locale]=${locale}`
    : `https://api.maxopen.com.ua/api/0b75148ea08740bd8c78fc4077500b5d/${endpoint}`;

  const { data, error } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 10000, // avoid refetching within 10s
    revalidateIfStale: true,
  });


  return {
    data: returnFirst && Array.isArray(data) ? data[0] : (data || []),
    loading: !data && !error,
    error,
  };
};
