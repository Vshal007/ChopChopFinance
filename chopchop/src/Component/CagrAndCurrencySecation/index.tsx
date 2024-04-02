import CAGRCalculator from "./Component/CAGRcalculator";
import { ContainerBox, MainContainerCagrSection } from "./styled";

const CagrAndCurrencySection = () => {
  return (
    <>
      <MainContainerCagrSection>
        <ContainerBox height={"250px"} scrollable={false} width={"550px"}>
          <CAGRCalculator />
        </ContainerBox>
        <ContainerBox height={"250px"} scrollable={false} width={"550px"}>
          <div>Currency</div>
        </ContainerBox>

        <ContainerBox height={"250px"} scrollable={false} width={"300px"}>
          <div>Currency</div>
        </ContainerBox>
      </MainContainerCagrSection>
    </>
  );
};

export default CagrAndCurrencySection;
