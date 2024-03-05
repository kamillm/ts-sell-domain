import type { NextPage } from "next";

import { Container } from "@/components";
import CartView from "@/views/cart";

const CartPage: NextPage = () => {
  return (
    <Container>
      <CartView />
    </Container>
  );
};

export default CartPage;
