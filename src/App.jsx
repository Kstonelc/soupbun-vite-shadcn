import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Layout from "@/components/layout";
import { Question, NewQuestion, Exam, ExamPaper } from "@/screens";
import { ThemeProvider } from "@/components/theme-provider";
import soupBunHelper from "@/SoupBunHelper";
import Login from "@/screens/user/Login.jsx";
import Register from "@/screens/user/Register.jsx";

export default function App() {
  const NavigationInitializer = () => {
    const navigate = useNavigate();
    soupBunHelper.setNavigate(navigate);
    return null;
  };

  return (
    <ThemeProvider>
      <Router>
        <NavigationInitializer />
        <Routes>
          {/* 不需要在 Layout 中的路由 */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* 需要在 Layout 中的路由 */}
          <Route
            path="/*"
            element={
              <Layout>
                <Routes>
                  <Route path="/" element={<Question />} />
                  <Route path="/question" element={<Question />} />
                  <Route path="/exam" element={<Exam />} />
                  <Route path="/exam-paper" element={<ExamPaper />} />
                  <Route path="/question/new" element={<NewQuestion />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
