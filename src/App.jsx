import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout";
import { Question } from "@/app/question";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/question" element={<Question />} />
        </Routes>
      </Layout>
    </Router>
  );
}
