import React from "react"
import './App.css';
import { useState, useEffect } from "react"
import axios from "axios"
import Articles from "./Articles"

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=DVRdWmGOwD7GeAWCWcIjoJKvTqAr4juT");
      setArticles(res.data.response.docs);
      };
      getArticles();
    }, []);
  return (
    <div>
      <Articles articles={articles} />
    </div>   
  );
}

export default App;
