import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import { RecoilRoot } from "recoil";
import router from "./routes/router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    {/* <RecoilRoot> */}
    <RouterProvider router={router} />
    {/* </RecoilRoot> */}
  </>
);
