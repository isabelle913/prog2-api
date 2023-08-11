
import ApiVanilla from './components/ApiVanilla'
import ApiTanStack from'./components/ApiTanStack'
import './app.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export function App() {
  
  const queryClient = new QueryClient()

  return (
    <>
      <ApiVanilla></ApiVanilla>
      <QueryClientProvider client={queryClient}>
        <ApiTanStack/>
      </QueryClientProvider>
    </>
  )
}
