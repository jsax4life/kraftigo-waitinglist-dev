import { Toaster } from "sonner";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <main>
        <Home />
      </main>
    </>
  );
};

export default App;
