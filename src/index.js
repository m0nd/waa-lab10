import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './components/containers/Posts/Posts';
import AddPost from './components/AddPost/AddPost';
import PostDetails from './components/PostDetails/PostDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Posts />} />
          <Route path="posts" element={<Posts />}>
            <Route path=":postId" element={<PostDetails />} />
          </Route>
          <Route path="create-post" element={<AddPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

