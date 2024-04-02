import CagrAndCurrencySection from "../../Component/CagrAndCurrencySecation/index.tsx";
import FinanceGraphAndServices from "../../Component/ContentContainer/index.tsx";
import NavBar from "../../Component/Navabar/index.tsx";
import QuickAction from "../../Component/QuickActionIconBox/index.tsx";
import { LayoutStyled } from "../../Component/layout/styled.tsx";

const Home = () => {
  return (
    <>
      <LayoutStyled>
        <NavBar />
        <QuickAction />
        <FinanceGraphAndServices />
        <CagrAndCurrencySection />
      </LayoutStyled>
    </>
  );
};

export default Home;
