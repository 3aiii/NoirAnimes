import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import PeoplePage from './pages/people.page.jsx'
import GamePage from './pages/game.page.jsx'
import EventPage from './pages/event.page.jsx'
import MangaPage from './pages/manga.page.jsx'
import LoginPage from './pages/login.page.jsx'
import Register from './pages/register.page.jsx'
import SinglePageAnime from './pages/single.page.jsx'
import SinglePageNews from './pages/single.page.news.jsx'
import SettingUser from './pages/setting.page.jsx'


const router = createBrowserRouter(
  [
    {
      path : "/",
      element : <App />
    },
    {
      path : "/people",
      element : <PeoplePage />
    },
    {
      path : "/game",
      element : <GamePage />
    },
    {
      path : "/event",
      element : <EventPage />
    },
    {
      path : "/manga",
      element : <MangaPage />
    },
    {
      path : "/login",
      element : <LoginPage />
    },
    {
      path : "/register",
      element : <Register />
    },
    {
      path : "/anime/:id",
      element : <SinglePageAnime />
    },
    {
      path : "/news/:id",
      element : <SinglePageNews />
    },
    {
      path : "/setting/:id",
      element : <SettingUser />
    },
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>
)
