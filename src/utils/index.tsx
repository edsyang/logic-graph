import { useState, useEffect } from 'react';
import { CustorState } from './interface';

const useFetch = (global: boolean) => {
  // const appCode = global ? (window as any).pageConfig.configInfo.globalAppId : getUrlParam('appCode');
  const initialData = {
    data: [] as object[],
  };
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  const fetchData = async (reset: boolean = false, keyword: any = null) => {
    setLoading(true);

    // const res: any = await getApiList(keyword);
    // window.serviceList = res.data || [];
    // setData(res ? {
    //   data: reset ? res.data : data.data.concat(res.data)
    // } : initialData);

    setLoading(false);
  }

  useEffect(() => {
    fetchData(true);
  }, [global]);

  return { data, loading, fetchData };
}

const initMouseDate: CustorState = {
  screenX: NaN,
  screenY: NaN,
  clientX: NaN,
  clientY: NaN,
  pageX: NaN,
  pageY: NaN
}

const useMouse = () => {
  const [mouseDate, setMouseDate] = useState(initMouseDate);

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      const { screenX, screenY, clientX, clientY, pageX, pageY } = e;
      setMouseDate({ screenX, screenY, clientX, clientY, pageX, pageY })
    }
    document.addEventListener('mousemove', moveHandler);
    return () => {
      document.removeEventListener('mousemove', moveHandler);
    }
  }, []);

  return mouseDate;
}

export {
  useFetch,
  useMouse
}