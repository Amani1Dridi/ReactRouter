import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../data';
import ReactPlayer from 'react-player';




const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const {title ,description,trailer} = product;
  return (
    <section className='section product'>

         <h3>{title} :</h3>
        <h5>{description}</h5>
      <div class="offcanvas-body">
        <ReactPlayer url={trailer} height="400px" width={"1200px"} />
     </div>
    
      <Link to='/product'>Back To Products</Link>
    </section>
  );
};

export default SingleProduct;