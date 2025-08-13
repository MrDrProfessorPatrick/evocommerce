import GoodsList from "./GoodsListContainer";

export default function Cart() {
  const { cart } = useContext(Context);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <GoodsList goods={cart} />
      )}
    </div>
  );
}
