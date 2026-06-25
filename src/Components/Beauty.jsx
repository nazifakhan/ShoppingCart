import { useQuery } from '@tanstack/react-query';
import './Beauty.css';


import beauty from '../assets/makeupBanner.jpg'

function Beauty() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['beautyProducts'],
    queryFn: async () => {
      const res = await fetch('https://dummyjson.com/products/category/beauty');
      return res.json();
    }
  });

  if (isLoading) return <p>Loading beauty products...</p>;
  if (error) return <p>Error loading products</p>;

  const products = data?.products || [];

  const addToCart = (product) =>{
    const existingCart = JSON.parse(localStorage.getItem('cart'))||[];

    {/**If the product already exist then increase the qty  */}

    const foundIndex = existingCart.findIndex(item => (item.id === product.id))

    if(foundIndex !== -1){
      existingCart[foundIndex].qty +=1;
    }
      else{
        existingCart.push({...product , qty:1})
      }
      localStorage.setItem('cart', JSON.stringify(existingCart));
      alert("item added to cart");
     
    }
  

  return (
  <div>

<div>
  <img style={{ width: "100%", height: "350px" }} src={beauty} />
</div>

<div className="beauty-container">
  {products.map(product => (
    <div key={product.id} className="card">
      <div className="image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="title">{product.title}</div>
      <div className="desc">{product.description}</div>
      <div className="price">Price: ${product.price}</div>
      <div className="rating">⭐ {product.rating}</div>
      <div>
        <button onClick={() => addToCart(product)}>Buy Now</button>
      </div>
    </div>
  ))}
</div>

  </div>

  );
}

export default Beauty;
