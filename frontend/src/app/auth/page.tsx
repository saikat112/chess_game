// "use client";

// import React, { useState } from 'react';
// import LoginForm from '../components/LoginForm';
// import SignUpForm from '../components/SignUpForm';
// import NavBar from '../components/NavBar';

// const LoginSignUpPage: React.FC = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-hero-pattern bg-cover">
//       <NavBar />
//       <div className="flex flex-1 justify-center items-center">
//         {isLogin ? <LoginForm toggleForm={toggleForm} /> : <SignUpForm toggleForm={toggleForm} />}
//       </div>
//     </div>
//   );
// };

// export default LoginSignUpPage;

import React from 'react';

const AuthPage = () => {
  return (
    <div className="auth-page">
      <h1>Auth Page</h1>
      <p>This is the authentication page.</p>
    </div>
  );
};

export default AuthPage;
