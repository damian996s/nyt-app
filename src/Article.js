import React from 'react';
import { Card } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function Article({ article }) {
    return (
        <div>
            {article && (
                
                    <Card id={article._id} style={{width:"350px", height:"520px", marginBottom:"55px"}}>
                        <Card.Img
                        style={{height:"250px"}}
                        src={article.multimedia?.[0]?.url ?
                            `https://nytimes.com/${article.multimedia[0].url}` : 
                            'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                        } alt="news-img" />
                        <Card.Body style={{textAlign:"left"}}>
                            <Card.Title>
                                <a href={article.web_url} target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                                    {article.headline.main}</a>
                            </Card.Title>
                            <Card.Text style={{fontSize:"10.5px", color:"orange", marginBottom:"3px", padding:0}}>
                                Published {article.pub_date.slice(0, 10)}
                            </Card.Text>
                            <Card.Text style={{color:"grey", fontSize:"11px"}}>
                                {article.byline.original}
                            </Card.Text>
                            <Card.Text style={{color:"black", fontSize:"12px", fontWeight:"500"}}>
                                {article.snippet} 
                            </Card.Text>
                        </Card.Body>
                    </Card >
            
            )}
        </div>
    )
}

export default Article
