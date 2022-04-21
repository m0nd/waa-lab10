import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPost from './components/AddPost/AddPost';
import PostDetails from './components/PostDetails/PostDetails';
import Dashboard from './components/containers/Dashboard/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="posts" element={<Dashboard />}>
            <Route path=":postId" element={<PostDetails />} />
          </Route>
          <Route path="create-post" element={<AddPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

