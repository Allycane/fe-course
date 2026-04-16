import { useEffect, useState } from 'react';
import { fetchData } from './util/fetch.js';
import './App.css';
import Header from './component/header/Header.jsx';
// import Content from './component/content/Content.jsx';
import Footer from './component/footer/Footer.jsx';

// 라우팅 레이아웃 설정
import { Outlet } from 'react-router-dom';

export default function App() {
  const [data, setData] = useState({});
  useEffect(()=>{
    const loadData = async() => {
      const jsonData = await fetchData("http://localhost:5173/data/portfolio.json");
      setData(jsonData);
    }
    loadData();
  }, [])

  return (
    <>
      <Header data={data?.header}/>
      <Outlet context={data?.content}/>
      <Footer data={data?.footer}/>
    </>
  )
}

