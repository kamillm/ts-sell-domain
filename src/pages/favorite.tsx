import type { NextPage } from "next";

import { FavoriteView } from "@/views/setting";
import { Container, Flex } from "@/components";

const FavoritePage: NextPage = () => {
  return (
    <Container>
      <Flex align="items-center" justifyContent="justify-center" className="pt-[200px]">
        <FavoriteView type={true} />
      </Flex>
    </Container>
  );
};

export default FavoritePage;
