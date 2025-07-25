import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import AppLayout from "./layout/AppLayout";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppLayout />
      </ThemeProvider>
    </>
  );
}

export default App;
