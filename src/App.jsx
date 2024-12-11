import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout";
import { Question } from "@/app/question";
import { Home } from "@/app/home";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<Question />} />
        </Routes>
      </Layout>
    </Router>
  );
}
