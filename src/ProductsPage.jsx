import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function ProductsPage() {
  let products = [
    {
      id: 1,
      name: "Banana",
      description: "yellow and green",
      price: "10.99",
      image_url: "https://images.everydayhealth.com/images/diet-nutrition/how-many-calories-are-in-a-banana-1440x810.jpg" 
    },
    {
      id: 2, 
      name: "Apple", 
      description: "red and green", 
      price: "1", 
      image_url: "https://www.applesfromny.com/wp-content/uploads/2020/05/20Ounce_NYAS-Apples2.png"
    }
  ]
  return (
    <main>
      <ProductsNew />
      <ProductsIndex products={products}/>
    </main>
  );
}
