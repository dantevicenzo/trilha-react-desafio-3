import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './theme/globalStyle.jsx'
import { ThemeProvider } from "styled-components"
import theme from "./theme/theme"
import { createHashRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Feed from './pages/Feed'
import Register from './pages/Register'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/feed',
        element: <Feed />
      },
      {
        path: '/register',
        element: <Register />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={ router } />
      </ThemeProvider>
  </React.StrictMode>,
)
