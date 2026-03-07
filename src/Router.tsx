import { Routes, Route } from 'react-router-dom'
import { PostsList } from './pages/PostsList'
import { PostDetails } from './pages/PostDetails'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router () {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<PostsList />}></Route>
        <Route path="/details" element={<PostDetails />}></Route>
      </Route>
    </Routes>
  )
}
