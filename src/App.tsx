import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
