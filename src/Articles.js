import React, { useState } from "react";
import './App.css';
import { Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Article from "./Article"

function Articles({ loading, articles }) {
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
  console.log(dateMin)
  console.log(dateMax)
  return (
    <div className="App">
      <header className="App-header">
      <div style={{paddingTop:"20px"}}>
        <label style={{paddingRight:"10px"}}>from</label>
        <input className="date" type="date" onChange={(e)=>searchMin(e)} style={{backgroundColor:"#282c34", border:"2px solid white", color:"white", width:"190px", outline:"none"}}></input>
        <label style={{padding: "0 10px"}}>to</label>
      <input className="date" type="date" onChange={(e)=>searchMax(e)} style={{backgroundColor:"#282c34", border:"2px solid white", color:"white", width:"190px", outline:"none"}}></input>  
      </div>
      <input type="text" placeholder="Search..." onChange={(e)=>searchSpace(e)} className="text-input" style={{marginTop:"15px", height:"35px", outline:"none"}} />
      <Container className="d-flex flex-row justify-content-around flex-wrap" style={{marginTop:"25px"}}>
        {
            articles
            .filter((article) => {
              if (dateMin == null || dateMax == null) {
                return article
              } else if (dateMin <= article.pub_date.slice(0,10) && dateMax >= article.pub_date.slice(0,10)) {
                return article
              }
            })
            .filter((article) => {
              if (search == null) {
                return article
              } else if (article.headline.main.toLowerCase().includes(search.toLowerCase()) || article.pub_date.toLowerCase().includes(search.toLowerCase()) || article.byline.original.toLowerCase().includes(search.toLowerCase()) || article.snippet.toLowerCase().includes(search.toLowerCase())) {
                return article
              }
            })
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
