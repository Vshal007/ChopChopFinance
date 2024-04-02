import Blog from "./Component/BlogContent";
import FinanceService from "./Component/FinanceServices";
import GraphStocks from "./Component/GraphStock";
import { MainContainer } from "./styled";

const FinanceGraphAndServices = () => {
  return (
    <>
      <MainContainer>
        <Blog />
        <GraphStocks />
        <FinanceService />
      </MainContainer>
    </>
  );
};

export default FinanceGraphAndServices;
