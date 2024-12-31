import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import PageLayout from './components/layout/PageLayout'
import { CssBaseline } from '@mui/material'
import { ThemeContextProvider } from './styles/ThemeContext'
import Events from './pages/Events'
import Posts from './pages/Posts'
import "@fontsource/quicksand"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const routes= createBrowserRouter([
  {
    element: <PageLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/event',
        element: <Events/>,
      },
      {
        path: '/post',
        element: <Posts/>,
      }
    ]
  },
])
const client = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={client}>
    <ThemeContextProvider>
    <CssBaseline/>
    <RouterProvider router={routes}/>
    </ThemeContextProvider>
    </QueryClientProvider>
  )
}

export default App
