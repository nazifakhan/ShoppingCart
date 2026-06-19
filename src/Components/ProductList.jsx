import { useQuery } from '@tanstack/react-query';
import './ProductList.css';
import beauty from '../assets/sale.jpg';

function ProductList() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://dummyjson.com/products')
            return res.json()
        }
    })
    if (isLoading) return <p>Loading......</p>
    if (error) return <p>error...</p>
    return (

        <div>
          <div >
            <img style={{"width":"100%" , "height":"350px"}} src={beauty}/>
        </div>
        <div className='container'>
       

            {data.products.map(product => (
                <div className='card'>

                    <div className="image">
                        <img
                        src={product.thumbnail}
                        alt={product.title}
                        />
                    
                    </div>

                    <div className="title">
                        {product.title}
                    </div>
                    <div className="desc">
                        {product.description}
                    </div>

                </div>
            ))}
        </div>
        </div>
    )
}
export default ProductList;