import type { NextPage } from "next";
import { Container } from "@/components";

import DomainRegisterView from "@/views/domain-register";

const DomainRegisterPage: NextPage = () => {
  return (
    <Container>
      <DomainRegisterView />
    </Container>
  );
};

export default DomainRegisterPage;
