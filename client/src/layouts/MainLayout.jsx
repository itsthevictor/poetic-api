import { Outlet } from "react-router-dom";

const MainLayout = ({ theme }) => {
  console.log("layout", theme);

  return (
    <>
      <Outlet themee={theme} />
    </>
  );
};
export default MainLayout;
