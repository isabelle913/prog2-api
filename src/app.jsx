import ApiVanilla from "./components/ApiVanilla";
import ApiTanStack from "./components/ApiTanStack";
import ApiTanStackSuite from "./people/components/ApiTanStackSuite";
import "./app.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <h2>------- Appel API vanilla ---------</h2>
      <ApiVanilla></ApiVanilla>
      <QueryClientProvider client={queryClient}>
        <h2>------- Utilisation données ---------</h2>
        <ApiTanStack />
        <h2>------- La suite ---------</h2>
        <ApiTanStackSuite />
      </QueryClientProvider>
    </>
  );
}
