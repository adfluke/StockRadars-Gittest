import { useState, useEffect } from 'react';


const DataPage  = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://stockradars.co/assignment/data.php');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1> Data Display</h1> 
      <ul>
        {data.map((item) => (
          <li key={item.N_name}>
            <h3>{item.N_name}</h3>
            <p>Shortname : {item.N_shortname}</p>
		        <p>Fullname : {item.N_fullname}</p>
            <p>Marketcap : {Number(item.marketcap).toFixed(1)}</p>
            <p>Company(Thai) : {item.N_COMPANY_T}</p>
            <p>Company(English) : {item.N_COMPANY_E}</p>
            <p>URL : {item.N_URL}</p>
            <p>Type : {item.F_TYPE}</p>
		        <p>Business(Thai) : {item.N_BUSINESS_TYPE_T}</p>
            <p>Business(English) : {item.N_BUSINESS_TYPE_E}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataPage ;
