import ClientView from "../../components/Client/View";

const ClientViewRoute = {
  name: "client",
  exact: true,
  protected: true,
  path: "/client",
  component: <ClientView />,
};

export default ClientViewRoute;
