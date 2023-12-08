import { Outlet } from "react-router-dom";

const StyledAppLayout = `
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = `
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`;

function AppLayout() {
  return (
    <div className={StyledAppLayout}>
      <div className={Main}>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
