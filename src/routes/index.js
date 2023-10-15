import dashboard from "./dashboard";
import deposit from "./deposit";
import loan from "./loan";
import login from "./login";
import signup from "./signup";
import manage_loan from "./manage_loan";
import create_loan from "./create_loan"

import Client from "./Client/ClientViewRoute"
import ClientAdd from "./Client/ClientAddRoute"

import Deposit from "./Deposit/DepositViewRoute"
import DepositAdd from "./Deposit/DepositAddRoute"



const routes = [
                    signup, login, 
                    dashboard, 
                    loan, 
                    manage_loan, 
                    create_loan,
                    Client,
                    ClientAdd,
                    Deposit,
                    DepositAdd
                ];

export default routes;
