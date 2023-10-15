import DepositView from "../../components/Deposit/View";

const DepositViewRoute = {
  name: "deposit",
  exact: true,
  protected: true,
  path: "/deposit",
  component: <DepositView />,
};

export default DepositViewRoute;
