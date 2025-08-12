import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { TodoPage } from "./pages/TodoPage"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { createBrowserRouter, RouterProvider } from "react-router"
import { Home } from "./pages/Home"
import { div } from "motion/react-client"

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        path: "todo",
        Component: TodoPage
      },
      {
        path: "contact",
        element: <div>Contact</div>
      }
    ]
  }
])

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
