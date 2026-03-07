import { Routes, Route } from 'react-router-dom'
import { PostsList } from './pages/PostsList'
import { PostDetails } from './pages/PostDetails'

export function Router () {
  return (
    <Routes>
      <Route path="/" element={<PostsList />}></Route>
      <Route path="/details" element={<PostDetails />}></Route>
    </Routes>
  )
}
