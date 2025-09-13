import { Routes, Route } from "react-router-dom";
import Home from "./componnets/pages/Home";
import PageContainer from "./componnets/layout/PageContainer";
import About from "./componnets/pages/About";
import { SnackbarProvider } from "./store/context/SnackbarProvider";

function App() {
  return (
    <PageContainer>
      <SnackbarProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </SnackbarProvider>
    </PageContainer>
  );
}

export default App;
