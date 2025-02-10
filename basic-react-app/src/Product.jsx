// create a product component

import './Product.css';

// function Product() {
//     return (
//         <div className = "Product">
//             <h3>Product Title</h3>
//             <h5>Product Description</h5>
//         </div>
//     );
// }

//prop send as a argument

// function Product({ title, price = 1, features, features2 }) {
//   //   const list = features.map((feature) => <li>{feature}</li>);

//   return (
//     <div className="Product">
//       <h3>{title}</h3>
//       <h5>price : {price}</h5>
//       <h4>
//         {features.map((feature) => (
//           <li>{feature}</li>
//         ))}
//       </h4>
//     </div>
//   );
// }

//add condition

function Product({ title, price = 1 }) {
  //method 1
  // if (price > 30000) {
  //   return (
  //     <div className="Product">
  //       <h3>{title}</h3>
  //       <h5>price : {price}</h5>
  //       <p> Discount of 5% </p>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="Product">
  //       <h3>{title}</h3>
  //       <h5>price : {price}</h5>
  //     </div>
  //   );
  // }

  //2 method (but in this method create extra empty p tag if condition false, so use method-3)
  //   let isDescount = price > 30000 ? 'Discount of 5%' : '';
  //   return (
  //     <div className="Product">
  //       <h3>{title}</h3>
  //       <h5>price : {price}</h5>
  //       <p> {isDescount} </p>
  //     </div>
  //   );

  //method-3 (direct p tag pass on condition true part)
  //   return (
  //     <div className="Product">
  //       <h3>{title}</h3>
  //       <h5>price : {price}</h5>
  //       {price > 30000 ? <p>'Discount of 5%'</p> : null}
  //     </div>
  //   );

  // metod 4(if condition1 false then not print) && also add Dynemic styling
  let isDescount = price > 30000;
  let styles = { backgroundColor: isDescount ? 'orange' : '' };
  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <h5>price : {price}</h5>
      {isDescount && <p>Discount of 5%</p>}
    </div>
  );
}
export default Product;
