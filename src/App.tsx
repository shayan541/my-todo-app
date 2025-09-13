import { Routes, Route } from "react-router-dom";
import Home from "./componnets/pages/Home";
import { SnackbarProvider } from "./componnets/store/SnackbarProvider";
import PageContainer from "./componnets/layout/PageContainer";

function App() {
  return (
    <PageContainer>
      <SnackbarProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>درباره ما</h1>} />
        </Routes>
      </SnackbarProvider>
    </PageContainer>
  );
}

export default App;
