import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data);
        setProducts(data); // Store the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <>
    <h1 className='text-3xl text-center font-bold mt-10'>My Store</h1>
      <div className="products-container grid grid-cols-3 gap-10 mt-20 max-sm:grid-cols-1">
        {products.map((product) => (
          // <div key={product.id} className="product">
          //   <h2>{product.title}</h2>
          //   <p>Price: ${product.price}</p>
          //   <img src={product.image} alt={product.title} />
          // </div>
          <div className="card card-compact bg-base-100 w-96  shadow-xl">
  <figure>
    <img
    className='w-[80%] h-80'
      src={product.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product.title}</h2>
    <p className='text-2xl font-bold'>{product.price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

          
        ))}
      </div>
    </>
  );
}

export default App;
