export function ProductsIndex(props) {
  console.log(props);
  return (
    <div id="products-index">
      <h1>All available products</h1>
      <br></br>
      {props.products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.image_url}</p>
        </div>
      ))}
    </div>
  );
}
