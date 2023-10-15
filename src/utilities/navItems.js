import {
  VerticalLeftOutlined,
  RetweetOutlined,
  VerticalRightOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom"   


const navItems = [
  // {
  //   key: "deposit",
  //   label: "Deposit",
  //   icon: <VerticalLeftOutlined />,
  // },
  // {
  //   key: "loan",
  //   label: "Loan",
  //   icon: <VerticalRightOutlined />,
  // },
  // {
  //   key: "logout",
  //   label: "Logout",
  //   icon: <RetweetOutlined />,
  // },
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <RetweetOutlined />,
  },
  {
    key: "client",
    label: "Manage Clients",
    icon: <RetweetOutlined />,
  },
  {
    key: "manage-loan",
    label: "Manage Loans",
    icon: <RetweetOutlined />,
  },
  {
    key: "deposit",
    label: "Manage Deposits",
    icon: <RetweetOutlined />,
  },
];

export default navItems;
