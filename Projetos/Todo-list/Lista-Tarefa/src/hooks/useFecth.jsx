import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deleteId, setDeleteId] = useState(null)

  const httpConfig = (data, method) => {
    if (method === 'POST') {
      setConfig({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      setMethod('POST');
    } else if (method === 'DELETE') {
      setConfig({
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      setMethod('DELETE');
      setDeleteId(data.id);
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError('Houve um erro no carregamento');
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch,deleteId]);

  useEffect(() => {
    const httpRequest = async () => {
      try {
        const res = await fetch(url, config);
        const json = await res.json();
        setCallFetch(json);
      } catch (error) {
        setError('Houve um erro ao enviar a requisição');
      }
    };

    httpRequest();
  }, [config, method, url,deleteId]);

  return { data, httpConfig, loading, error };
};

export default useFetch;
