
export function ProductsNew() {
  return (
    <div id="products-new">
      <h1>Add a new product!</h1>
      <div>
        <form>
          <div>
            Name: <input type="text" />
          </div>
          <div>
            Description: <input type="text" />
          </div>
          <div>
            Price: <input type="text" />
          </div>
          <div>
            Image_url: <input type="text" />
          </div>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
}
