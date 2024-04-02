// import { useEffect, useState } from "react";
// import { RapidApiFinanceData } from "../../../../api/test";
import "../BlogContent/Styles.css";
// import CanvasJSReact from "@canvasjs/react-charts";
import { ContainerBox } from "../../styled";
import { useState } from "react";

const FinanceService = () => {
  const [isLoading] = useState(true);
  return (
    <>
      <ContainerBox height={"400px"} width={"300px"} scrollable={true}>
        {isLoading ? (
          <>
            <div className="shimmerClass"></div>
            <div className="shimmerClass"></div>
            <div className="shimmerClass"></div>
            <div className="shimmerClass"></div>
          </>
        ) : (
          <div>Finance Service</div>
        )}
      </ContainerBox>
    </>
  );
};

export default FinanceService;
