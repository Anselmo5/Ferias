import { useState, useEffect } from "react";

export const useFecth = (url) => {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFecth, setCallFecth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setErro] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod("POST");
    }
  };

  useEffect(() => {
    const fecthData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setErro("Houve um erro no carregamento");
      }

      setLoading(false);
    };

    fecthData();
  }, [url, callFecth]);

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        const res = await fetch(url, config);
        const json = await res.json();
        setCallFecth(json);
      }
    };

    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading, error };
};
