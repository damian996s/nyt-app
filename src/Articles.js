import React, { useState } from "react";
import './App.css';
import { Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Article from "./Article"
import DateInput from "./DateInput"

function Articles({ articles }) {
  const [dateMin, setDateMin] = useState(null)
  const [dateMax, setDateMax] = useState(null)
  const [search, setSearch] = useState(null)
  const searchSpace=(event)=>{
    let keyword = event.target.value;
    setSearch(keyword);
  }
  const searchMin=(event)=>{
    let keyword = event.target.value;
    setDateMin(keyword);
  }
  const searchMax=(event)=>{
    let keyword = event.target.value;
    setDateMax(keyword);
  }
  const dateFilter = (article) => {
    if (dateMin == null || dateMax == null) {
      return article
    } else if (dateMin <= article.pub_date.slice(0,10) && dateMax >= article.pub_date.slice(0,10)) {
      return article
    }
  }
  const searchFilter = (article) => {
    if (search == null) {
      return article
    } else if (article.headline.main.toLowerCase().includes(search.toLowerCase()) || article.pub_date.toLowerCase().includes(search.toLowerCase()) || article.byline.original.toLowerCase().includes(search.toLowerCase()) || article.snippet.toLowerCase().includes(search.toLowerCase())) {
      return article
    }
  }
  let today = new Date(),
    day = today.getDate(),
    month = today.getMonth()+1,
    year = today.getFullYear();
    if(day < 10){
      day = '0'+ day
      }  
    if(month < 10){
      month = '0' + month
      }
    today = year + '-' + month + '-' + day;
  return (
    <div className="App">
      <header className="App-header">
      <div style={{paddingTop:"20px"}}>
        <label style={{paddingRight:"10px"}}>from</label>
        <DateInput min="2020-01-01" max={dateMax, today} value={dateMin} onChange={(e)=>searchMin(e)} />
        <label style={{padding: "0 10px"}}>to</label>
        <DateInput min={dateMin} max={today} value={dateMax} onChange={(e)=>searchMax(e)} />
      </div>
      <input type="text" placeholder="Search..." onChange={(e)=>searchSpace(e)} className="text-input" style={{marginTop:"15px", height:"30px", outline:"none", fontSize:"18px", width:"280px"}} />
      <Container className="d-flex flex-row justify-content-around flex-wrap" style={{marginTop:"25px"}}>
        {
            articles
            .filter(dateFilter)
            .filter(searchFilter)
            .map((article) => (            
                <Article article={article} />   
          )) 
            }
      </Container>
      </header>
    </div>
  );
}

export default Articles;
