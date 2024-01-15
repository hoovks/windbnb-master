import { Apartments } from "./pages/apartments/Apartments";
import { theme } from "./theme.js";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Apartments />
    </ThemeProvider>
  );
}

export default App;
