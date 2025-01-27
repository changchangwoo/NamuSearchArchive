import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Mainpage from "./pages/Mainpage";
import Detailpage from "./pages/Detailpage";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/details/:title" element={<Detailpage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
