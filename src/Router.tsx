import { Routes, Route } from 'react-router-dom'
import { PostsList } from './pages/PostsList'
import { PostPage } from './pages/PostPage'
import { DefaultLayout } from './layouts/DefaultLayout'
import { PostProvider } from './contexts/PostContext'

export function Router() {
  return (
    <PostProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<PostsList />} />
          <Route path="/details/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </PostProvider>
  )
}
