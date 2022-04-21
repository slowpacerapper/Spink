import ItemCard from "../components/ItemCard/ItemCard";

export let products;

export const display = (productList) => {
  products = productList.map((item) => {
    return (
      <ItemCard
        key={item.id}
        id={item.id}
        name={item.itemName}
        image={item.image}
        description={item.description}
        brand={item.brand}
        type={item.type}
        price={item.price}
        qty={item.qty}
      />
    );
  });
};

export const searchHandler = (searchParams, productList) => {
  if (searchParams !== "") {
    let allProducts = productList.filter(
      (prod) =>
        prod.type.toLowerCase().includes(searchParams.toLowerCase()) ||
        prod.itemName.toLowerCase().includes(searchParams.toLowerCase()) ||
        prod.brand.toLowerCase().includes(searchParams.toLowerCase())
    );
    display(allProducts);
  }
  return;
};
