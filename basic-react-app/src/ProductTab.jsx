import Product from './Product.jsx';
function ProductTab() {
  //   return (
  //   <>
  //     <Product/>
  //     <Product/>
  //     <Product/>
  //   </>
  //   );
  // }

  //use react prope
  //send as a argument

  // let options = [<li>fast</li>, <li>chip</li>, <li>accessibility</li>]; //send with HTML aliment

  let options = ['fast', 'chip', 'easy to access']; //maping in product.jsx check (list variable)

  let options2 = { a: 'fast', b: 'chip', c: 'easy to access' }; //this is obj

  // return (
  //   <>
  //     <Product
  //       title="phone"
  //       price={30000}
  //       features={options}
  //       features2={options2}
  //     />
  //   </>
  // );

  //condion
  return (
    <>
      <Product title="phone" price={30000} />
      <Product title="laptop" price={50000} />
      <Product title="PC" price={120000} />
    </>
  );
}
export default ProductTab;
