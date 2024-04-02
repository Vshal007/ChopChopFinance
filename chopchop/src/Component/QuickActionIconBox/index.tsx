import { QuickActionContainer, QuickActionElement } from "./styled";

const ele = [
  {
    name: "QuickActionIconBox",
    path: "chopchop/src/Component/QuickActionIconBox/index.tsx",
    code: `// Path: chopchop/src/Component/QuickActionIconBox/index.tsx"`,
    img: `https://picsum.photos/10`,
  },
  {
    name: "main.tsx",
    path: "chopchop/src/main.tsx",
    code: "react-dom/client",
    img: `https://picsum.photos/123`,
  },
  {
    name: "router.tsx",
    path: "chopchop/src/routes/router.tsx",
    code: "react-router-dom",
    img: `https://picsum.photos/555`,
  },
  {
    name: "Home.tsx",
    path: "chopchop/src/pages/Home/index.tsx",
    code: "NavBar, QuickAction, LayoutStyled",
    img: `https://picsum.photos/33`,
  },
  {
    name: "styled.tsx",
    path: "chopchop/src/Component/QuickActionIconBox/styled.tsx",
    code: "Box, styled",
    img: "https://picsum.photos/90",
  },

  {
    name: "router.tsx",
    path: "chopchop/src/routes/router.tsx",
    code: "react-router-dom",
    img: `https://picsum.photos/100`,
  },
  {
    name: "Home.tsx",
    path: "chopchop/src/pages/Home/index.tsx",
    code: "NavBar, QuickAction, LayoutStyled",
    img: `https://picsum.photos/45`,
  },
];
const QuickAction = () => {
  return (
    <>
      <QuickActionContainer>
        {ele.map((item) => {
          return (
            <QuickActionElement>
              <img
                src={
                  item.img ? item.img : "https://example.com/random-icon.png"
                }
                alt="icon"
                style={{ width: "30px", height: "30px" }}
              />
            </QuickActionElement>
          );
        })}
      </QuickActionContainer>
    </>
  );
};

export default QuickAction;
