import { Toaster } from "sonner";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
