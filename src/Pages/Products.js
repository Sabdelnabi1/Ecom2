import axios from "axios"
import React, { useState, useEffect } from "react"
import "../App.css"
export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("https://qebb0n67mb.execute-api.us-east-1.amazonaws.com/dev/products")
            .then(res => setProducts(res.data))
    })
    return (<div className="grid-Container">
        {products.map(x =>

            <div className="item">
                <img src="https://i.postimg.cc/Pr3GCthv/oak.jpg" />
                <h2>{x.Title} </h2>
                <p>{x.Description}</p>
                <p>{x.Price}</p>
                <button>Add to Cart</button>
            </div>)}
    </div>)
}
