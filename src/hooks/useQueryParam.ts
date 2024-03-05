import { useQueryState } from "nuqs";

export const useQueryParam = () => {
  const [domain, setDomain] = useQueryState("domain");

  return { domain, setDomain };
};

export default useQueryParam;
