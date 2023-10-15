import ClientAdd from "../../components/Client/Add";

const ClientsAddRoute = {
  name: "clientAdd",
  exact: true,
  protected: true,
  path: "/add-client",
  component: <ClientAdd />,
};

export default ClientsAddRoute;
