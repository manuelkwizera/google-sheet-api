import DepositAdd from "../../components/Deposit/Add";

const DepositAddRoute = {
  name: "depositAdd",
  exact: true,
  protected: true,
  path: "/add-deposit",
  component: <DepositAdd />,
};

export default DepositAddRoute;
