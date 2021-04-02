import React,{useState} from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import './Product.css'
import ProductMap from './ProductMap'
const Product = () => {
    const [Product , ListProduct]=useState([{
        image:"https://lh3.googleusercontent.com/proxy/Jv2Glq8VvEy3hvdCvlMz_AeSMUSXl3GmqxN27JWdJK_0TiOJyuwVvTw1tMCCxbFnUD8sBxzF6A-eTko9EfO1QyprS8_46HZdRbavEteM93jJVnXy5ztiV2giaL_ZiJ6zmwzt9wV8fk1cBG4UMqatnQlXvYhJF-vi6dpcNA",
        name:"ecouter",
        Prix:50,
        Descrpation:`dazdadazd ${<br/>} dazdazfazdazdfa`
    },
    {
        image:"https://www.sbsinformatique.com/464/casque-gaming-msi-immerse-gh30-tunisie.jpg",
        name:"Watch",
        Prix:50,
        Descrpation:`dazdadazd ${<br/>} dazdazfazdazdfa`
    },
    {
        image:"http://3.bp.blogspot.com/-T5qe5SksNu8/VfgN51zkaTI/AAAAAAAAAkU/BA48vQpDVhs/w1200-h630-p-k-no-nu/appleiwatch.jpg",
        name:"Watch",
        Prix:50,
        Descrpation:`dazdadazd ${<br/>} dazdazfazdazdfa`
    },
    {
        image:"http://3.bp.blogspot.com/-T5qe5SksNu8/VfgN51zkaTI/AAAAAAAAAkU/BA48vQpDVhs/w1200-h630-p-k-no-nu/appleiwatch.jpg",
        name:"azdatch",
        Prix:50,
        Descrpation:`dazdadazd ${<br/>} dazdazfazdazdfa`
    },
    {
        image:"http://3.bp.blogspot.com/-T5qe5SksNu8/VfgN51zkaTI/AAAAAAAAAkU/BA48vQpDVhs/w1200-h630-p-k-no-nu/appleiwatch.jpg",
        name:"Watdazch",
        Prix:50,
        Descrpation:`dazdadazd ${<br/>} dazdazfazdazdfa`
    },
    {
        image:"https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/inspiron_notebooks/13_7300/general/new-cat-page-tile-laptop-inspiron-13-7300-15-7591-800x620.png?fmt=png-alpha&amp;wid=800&amp;hei=620",
        name:"Watch",
        Prix:50,
        Descrpation:`dazdadazd dazdazfazdazdfa`
    },
    {
        image:"https://www.blogduwebdesign.com/wp-content/uploads/2019/12/bdw-souris-ordinateurs-8.jpg",
        name:"Adthc",
        Prix:50,
        Descrpation:`dazdadazd dazdazfazdazdfa`
    },
    {
        image:"http://3.bp.blogspot.com/-T5qe5SksNu8/VfgN51zkaTI/AAAAAAAAAkU/BA48vQpDVhs/w1200-h630-p-k-no-nu/appleiwatch.jpg",
        name:"Adthc",
        Prix:50,
        Descrpation:`dazdadazd dazdazfazdazdfa`
    }
])
    const[Input , setInput]=useState('')
    return (
        <div>
            <div id="Product" className="ProductBackGround">
                <h1>Some of your Product</h1>
            <input value={Input} onChange={(e)=>setInput(e.target.value)} placeholder="Serch"/>
            {console.log(Input)}
            <div className="ProductMapFlex">
            {/* {Pro.filter((el)=>el.name.toLowerCase().includes(searchMov.toLowerCase().trim())).map((el)=><div className="ProductFlex"> <Card02 user={user} el={el}/> </div>)} */}
            {Product.filter((el)=>el.name.toLocaleLowerCase().includes(Input.toLocaleLowerCase().trim())).map((el)=><ProductMap el={el}/>)}
            
            </div>
            </div>
        </div>
    )
}

export default Product
