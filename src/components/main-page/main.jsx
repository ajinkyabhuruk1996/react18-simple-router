import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Expenses from "../../routes/expenses";
import Invoices from "../../routes/invoices";
import LoginPage from '../login/login-page';

//https://reactrouter.com/docs/en/v6/getting-started/tutorial
export default function MainContent() {
    return (
      <BrowserRouter>
            <nav
                style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
                }}
            >
                <Link to="/invoices">Invoices</Link> |{" "}
                <Link to="/expenses">Expenses</Link>
            </nav>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} />
        </Routes>
      </BrowserRouter>
    );
  }