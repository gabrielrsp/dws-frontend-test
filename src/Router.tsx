import { Routes, Route } from 'react-router-dom'
import { PostsList } from './pages/PostsList'
import { PostPage } from './pages/PostPage'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router () {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<PostsList />}></Route>
        <Route path={'/details/:id'} element={<PostPage />}></Route>
      </Route>
    </Routes>
  )
}
