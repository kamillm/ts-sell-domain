import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const TransactionLoading = ({ size }: { size: number }) => {
  return <PuffLoader size={size} color={"#CAFC01"} />;
};

export default TransactionLoading;
