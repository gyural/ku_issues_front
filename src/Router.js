import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserProfilePage from './pages/UserProfilePage';
import PostCreationForm from './pages/post/Post';
import MainPageList from './pages/main/MainPageList';
import ProfileEditPage from './pages/ProfileEditPage';
import Survey from './component/Survey';
import Test from './pages/Test';


const AppRouter = ({ setIsLoggedIn }) => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/' element={<UserProfilePage />} />
        <Route path='/createpost' element={<PostCreationForm />} />
        <Route path='/mainpage' element={<MainPageList />} />
        <Route path='/profileedit' element={<ProfileEditPage />} />
        <Route path='/survey' element={<Survey />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
