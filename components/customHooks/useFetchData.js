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

export const useFetchData = (endpoint, language = null) => {
  const locale = language === "ru" ? "ru_UA" : language;
  const url = locale
    ? `https://api.maxopen.com.ua/api/0b75148ea08740bd8c78fc4077500b5d/${endpoint}?where[locale]=${locale}`
    : `https://api.maxopen.com.ua/api/0b75148ea08740bd8c78fc4077500b5d/${endpoint}`;

  const { data, error } = useSWR(url, fetcher);

  return {
    data: data || [],
    loading: !data && !error,
    error,
  };
};

