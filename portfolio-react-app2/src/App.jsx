import './App.css'
import Header from './component/Header'
import Content from './component/Content'
import Footer from './component/Footer'
import { fetchData } from './component/commons/fetch'
import { useState, useEffect } from 'react'

export default function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const loadData = async () => {
      const jsonData = await fetchData("http://localhost:5173/data/portfolio.json");
      setData(jsonData);
    }
    loadData();
  }, [])

  // console.log(`data --->`,data);

  return (
    <>
      <Header data={data?.header}/>
      <Content data={data?.content}/>
      <Footer/>
    </>
  )
}