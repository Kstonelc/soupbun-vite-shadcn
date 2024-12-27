import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Layout from "@/components/layout";
import { Question, NewQuestion, Exam, ExamPaper } from "@/app/index.jsx";
import { ThemeProvider } from "@/components/theme-provider";
import soupBunHelper from "@/SoupBunHelper.js";
import LoginPage from "@/app/user/login.jsx";

export default function App() {
  const NavigationInitializer = () => {
    const navigate = useNavigate();
    soupBunHelper.setNavigate(navigate);
    return null;
  };

  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <NavigationInitializer />
          <Routes>
            {/*TODO 配置文件驱动*/}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Question />} />
            <Route path="/question" element={<Question />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/exam-paper" element={<ExamPaper />} />
            <Route path="/question/new" element={<NewQuestion />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
