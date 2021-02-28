const useFetch = (global: boolean) => {
  // const appCode = global ? (window as any).pageConfig.configInfo.globalAppId : getUrlParam('appCode');
  const initialData = {
    data: [] as object[],
  };
  const [data, setData] = React.useState(initialData);
  const [loading, setLoading] = React.useState(false);

  const fetchData = async (reset = false, keyword: any = null) => {
    setLoading(true);

    // const res: any = await getApiList(keyword);
    // window.serviceList = res.data || [];
    // setData(res ? {
    //   data: reset ? res.data : data.data.concat(res.data)
    // } : initialData);

    setLoading(false);
  }

  React.useEffect(() => {
    fetchData(true);
  }, [global]);

  return { data, loading, fetchData };
}

module.exports = {
  useFetch
}