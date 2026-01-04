// import React, { useState } from "react";

// const LoginSignupOverlay = ({ onLogin }) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setError("");
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateLogin = () => {
//     if (!formData.username || !formData.password) {
//       setError("Please fill in all fields.");
//       return false;
//     }
//     return true;
//   };

//   const validateSignup = () => {
//     if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
//       setError("Please fill in all fields.");
//       return false;
//     }
//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match.");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isLogin && validateLogin()) {
//       onLogin({ username: formData.username });
//     }
//     if (!isLogin && validateSignup()) {
//       onLogin({ username: formData.username });
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[9999]">
//       <div className="bg-white rounded-xl p-8 w-96 shadow-lg relative">
//         <h2 className="text-2xl font-bold mb-4">{isLogin ? "Login" : "Sign Up"}</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={formData.username}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             autoFocus
//           />

//           {!isLogin && (
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           )}

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           {!isLogin && (
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           )}

//           {error && <p className="text-red-600 text-sm">{error}</p>}

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//           >
//             {isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-600 mt-4">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//           <button
//             onClick={() => {
//               setError("");
//               setIsLogin(!isLogin);
//               setFormData({
//                 username: "",
//                 email: "",
//                 password: "",
//                 confirmPassword: "",
//               });
//             }}
//             className="text-blue-600 hover:underline"
//           >
//             {isLogin ? "Sign Up" : "Login"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginSignupOverlay;











import React, { useState } from "react";
import { motion } from "framer-motion";

const LoginSignupOverlay = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateLogin = () => {
    if (!formData.username || !formData.password) {
      setError("Please fill in all fields.");
      return false;
    }
    return true;
  };

  const validateSignup = () => {
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin && validateLogin()) {
      onLogin({ username: formData.username });
    }
    if (!isLogin && validateSignup()) {
      onLogin({ username: formData.username });
    }
  };

  return (
    <div className="fixed inset-0 bg-purple-900 bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-[9999]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl p-8 w-96 shadow-lg relative"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            autoFocus
          />

          {!isLogin && (
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />

          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          )}

          {error && (
            <p className="text-center text-red-600 text-sm select-none animate-fadeIn">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded hover:shadow-lg transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6 select-none">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => {
              setError("");
              setIsLogin(!isLogin);
              setFormData({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
              });
            }}
            className="text-purple-600 hover:underline focus:outline-none"
            aria-label={isLogin ? "Switch to Sign Up" : "Switch to Login"}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginSignupOverlay;












// // // import React, { useState } from "react";

// // // const LoginSignupOverlay = ({ onLogin }) => {
// // //   const [isLogin, setIsLogin] = useState(true);
// // //   const [formData, setFormData] = useState({
// // //     username: "",
// // //     email: "",
// // //     password: "",
// // //     confirmPassword: "",
// // //   });
// // //   const [error, setError] = useState("");

// // //   const handleChange = (e) => {
// // //     setError("");
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const validateLogin = () => {
// // //     if (!formData.username || !formData.password) {
// // //       setError("Please fill in all fields.");
// // //       return false;
// // //     }
// // //     return true;
// // //   };

// // //   const validateSignup = () => {
// // //     if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
// // //       setError("Please fill in all fields.");
// // //       return false;
// // //     }
// // //     if (formData.password !== formData.confirmPassword) {
// // //       setError("Passwords do not match.");
// // //       return false;
// // //     }
// // //     return true;
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (isLogin && validateLogin()) {
// // //       onLogin({ username: formData.username });
// // //     }
// // //     if (!isLogin && validateSignup()) {
// // //       onLogin({ username: formData.username });
// // //     }
// // //   };

// // //   return (
// // //     <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 bg-opacity-95 flex justify-center items-center z-[9999] p-4">
// // //       <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-10 sm:p-12">
// // //         <div className="mb-8 text-center">
// // //           <h1 className="text-4xl font-extrabold text-indigo-700 mb-2">Vedas College</h1>
// // //           <p className="text-indigo-500 font-semibold tracking-wide">Teachers Portal</p>
// // //         </div>

// // //         <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
// // //           {isLogin ? "Login to your account" : "Create a new account"}
// // //         </h2>

// // //         <form onSubmit={handleSubmit} className="space-y-6">
// // //           <div>
// // //             <label htmlFor="username" className="block mb-1 font-medium text-gray-700">
// // //               Username
// // //             </label>
// // //             <input
// // //               id="username"
// // //               type="text"
// // //               name="username"
// // //               placeholder="Enter your username"
// // //               value={formData.username}
// // //               onChange={handleChange}
// // //               autoFocus
// // //               className="w-full rounded-xl border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
// // //             />
// // //           </div>

// // //           {!isLogin && (
// // //             <div>
// // //               <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
// // //                 Email Address
// // //               </label>
// // //               <input
// // //                 id="email"
// // //                 type="email"
// // //                 name="email"
// // //                 placeholder="Enter your email"
// // //                 value={formData.email}
// // //                 onChange={handleChange}
// // //                 className="w-full rounded-xl border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
// // //               />
// // //             </div>
// // //           )}

// // //           <div>
// // //             <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
// // //               Password
// // //             </label>
// // //             <input
// // //               id="password"
// // //               type="password"
// // //               name="password"
// // //               placeholder="Enter your password"
// // //               value={formData.password}
// // //               onChange={handleChange}
// // //               className="w-full rounded-xl border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
// // //             />
// // //           </div>

// // //           {!isLogin && (
// // //             <div>
// // //               <label htmlFor="confirmPassword" className="block mb-1 font-medium text-gray-700">
// // //                 Confirm Password
// // //               </label>
// // //               <input
// // //                 id="confirmPassword"
// // //                 type="password"
// // //                 name="confirmPassword"
// // //                 placeholder="Confirm your password"
// // //                 value={formData.confirmPassword}
// // //                 onChange={handleChange}
// // //                 className="w-full rounded-xl border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
// // //               />
// // //             </div>
// // //           )}

// // //           {error && (
// // //             <p className="text-center text-red-600 font-medium">{error}</p>
// // //           )}

// // //           <button
// // //             type="submit"
// // //             className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition-shadow shadow-md hover:shadow-lg"
// // //           >
// // //             {isLogin ? "Login" : "Sign Up"}
// // //           </button>
// // //         </form>

// // //         <p className="mt-6 text-center text-gray-600 text-sm">
// // //           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
// // //           <button
// // //             onClick={() => {
// // //               setError("");
// // //               setIsLogin(!isLogin);
// // //               setFormData({
// // //                 username: "",
// // //                 email: "",
// // //                 password: "",
// // //                 confirmPassword: "",
// // //               });
// // //             }}
// // //             className="text-indigo-600 font-semibold hover:underline"
// // //           >
// // //             {isLogin ? "Sign Up" : "Login"}
// // //           </button>
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LoginSignupOverlay;









// // // import React, { useState, useEffect } from "react";

// // // const FloatingLabelInput = ({ label, type, name, value, onChange, autoFocus }) => {
// // //   const [isFocused, setIsFocused] = useState(false);

// // //   return (
// // //     <div className="relative z-0 w-full mb-6 group">
// // //       <input
// // //         type={type}
// // //         name={name}
// // //         id={name}
// // //         value={value}
// // //         onChange={onChange}
// // //         onFocus={() => setIsFocused(true)}
// // //         onBlur={() => setIsFocused(false)}
// // //         autoComplete="off"
// // //         autoFocus={autoFocus}
// // //         placeholder=" "
// // //         className="block py-3 px-4 w-full text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 peer"
// // //       />
// // //       <label
// // //         htmlFor={name}
// // //         className={`absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-4 z-10 origin-[0] bg-white px-1 
// // //           peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400
// // //           peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-indigo-600
// // //           rounded select-none cursor-text
// // //         `}
// // //       >
// // //         {label}
// // //       </label>
// // //     </div>
// // //   );
// // // };

// // // const LoginSignupOverlay = ({ onLogin }) => {
// // //   const [isLogin, setIsLogin] = useState(true);
// // //   const [formData, setFormData] = useState({
// // //     username: "",
// // //     email: "",
// // //     password: "",
// // //     confirmPassword: "",
// // //   });
// // //   const [error, setError] = useState("");

// // //   // Reset form on toggle
// // //   useEffect(() => {
// // //     setError("");
// // //     setFormData({
// // //       username: "",
// // //       email: "",
// // //       password: "",
// // //       confirmPassword: "",
// // //     });
// // //   }, [isLogin]);

// // //   const handleChange = (e) => {
// // //     setError("");
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const validateLogin = () => {
// // //     if (!formData.username || !formData.password) {
// // //       setError("Please fill in all fields.");
// // //       return false;
// // //     }
// // //     return true;
// // //   };

// // //   const validateSignup = () => {
// // //     if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
// // //       setError("Please fill in all fields.");
// // //       return false;
// // //     }
// // //     if (formData.password !== formData.confirmPassword) {
// // //       setError("Passwords do not match.");
// // //       return false;
// // //     }
// // //     return true;
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (isLogin && validateLogin()) {
// // //       onLogin({ username: formData.username });
// // //     }
// // //     if (!isLogin && validateSignup()) {
// // //       onLogin({ username: formData.username });
// // //     }
// // //   };

// // //   return (
// // //     <div className="fixed inset-0 bg-gradient-to-tr from-indigo-900/90 via-purple-900/90 to-indigo-800/90 backdrop-blur-md flex justify-center items-center z-[9999] p-4">
// // //       <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl max-w-md w-full p-10 sm:p-12 border border-indigo-200">
// // //         <div className="mb-10 text-center">
// // //           <h1 className="text-4xl font-extrabold text-indigo-700 tracking-wide mb-1 select-none">Vedas College</h1>
// // //           <p className="text-indigo-500 font-semibold tracking-wide uppercase text-sm select-none">Teachers Portal</p>
// // //         </div>

// // //         <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center select-none">
// // //           {isLogin ? "Welcome Back! Please Login" : "Create Your Account"}
// // //         </h2>

// // //         <form onSubmit={handleSubmit} className="space-y-6">
// // //           <FloatingLabelInput
// // //             label="Username"
// // //             type="text"
// // //             name="username"
// // //             value={formData.username}
// // //             onChange={handleChange}
// // //             autoFocus
// // //           />

// // //           {!isLogin && (
// // //             <FloatingLabelInput
// // //               label="Email Address"
// // //               type="email"
// // //               name="email"
// // //               value={formData.email}
// // //               onChange={handleChange}
// // //             />
// // //           )}

// // //           <FloatingLabelInput
// // //             label="Password"
// // //             type="password"
// // //             name="password"
// // //             value={formData.password}
// // //             onChange={handleChange}
// // //           />

// // //           {!isLogin && (
// // //             <FloatingLabelInput
// // //               label="Confirm Password"
// // //               type="password"
// // //               name="confirmPassword"
// // //               value={formData.confirmPassword}
// // //               onChange={handleChange}
// // //             />
// // //           )}

// // //           {error && (
// // //             <p className="text-center text-red-600 font-medium select-none">{error}</p>
// // //           )}

// // //           <button
// // //             type="submit"
// // //             className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
// // //           >
// // //             {isLogin ? "Login" : "Sign Up"}
// // //           </button>
// // //         </form>

// // //         <p className="mt-8 text-center text-gray-600 text-sm select-none">
// // //           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
// // //           <button
// // //             onClick={() => setIsLogin(!isLogin)}
// // //             className="text-indigo-600 font-semibold hover:underline focus:outline-none"
// // //             aria-label={isLogin ? "Switch to Sign Up" : "Switch to Login"}
// // //           >
// // //             {isLogin ? "Sign Up" : "Login"}
// // //           </button>
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LoginSignupOverlay;












// // import React, { useState, useEffect } from "react";

// // const FloatingLabelInput = ({ label, type, name, value, onChange, autoFocus, error }) => {
// //   const [isFocused, setIsFocused] = useState(false);
// //   const [isTouched, setIsTouched] = useState(false);

// //   return (
// //     <div className="relative z-0 w-full mb-8 group">
// //       <input
// //         type={type}
// //         name={name}
// //         id={name}
// //         value={value}
// //         onChange={onChange}
// //         onFocus={() => setIsFocused(true)}
// //         onBlur={() => {
// //           setIsFocused(false);
// //           setIsTouched(true);
// //         }}
// //         autoComplete="off"
// //         autoFocus={autoFocus}
// //         placeholder=" "
// //         className={`block py-4 px-5 w-full text-gray-800 bg-white/70 backdrop-blur-sm rounded-xl border-2 appearance-none focus:outline-none focus:ring-3 transition-all duration-300 peer
// //           ${error && isTouched ? 'border-rose-400 focus:ring-rose-100 focus:border-rose-500' : 'border-gray-200 focus:ring-indigo-100 focus:border-indigo-400'}
// //         `}
// //       />
// //       <label
// //         htmlFor={name}
// //         className={`absolute text-sm font-medium duration-300 transform -translate-y-8 scale-90 top-4 left-5 z-10 origin-[0] bg-white/80 backdrop-blur-sm px-2 rounded-lg select-none cursor-text transition-all
// //           ${error && isTouched ? 'text-rose-500' : 'text-gray-500'}
// //           peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400
// //           peer-focus:-translate-y-8 peer-focus:scale-90 ${isFocused ? (error ? 'peer-focus:text-rose-500' : 'peer-focus:text-indigo-500') : ''}
// //           ${isFocused || value ? '-translate-y-8 scale-90' : ''}
// //         `}
// //       >
// //         {label}
// //       </label>
// //       {error && isTouched && (
// //         <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
// //           <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
// //             <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
// //           </svg>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // const LoginSignupOverlay = ({ onLogin }) => {
// //   const [isLogin, setIsLogin] = useState(true);
// //   const [isAnimating, setIsAnimating] = useState(false);
// //   const [formData, setFormData] = useState({
// //     username: "",
// //     email: "",
// //     password: "",
// //     confirmPassword: "",
// //   });
// //   const [error, setError] = useState("");
// //   const [fieldErrors, setFieldErrors] = useState({
// //     username: false,
// //     email: false,
// //     password: false,
// //     confirmPassword: false,
// //   });

// //   // Reset form on toggle
// //   useEffect(() => {
// //     setIsAnimating(true);
// //     const timer = setTimeout(() => setIsAnimating(false), 500);
    
// //     setError("");
// //     setFormData({
// //       username: "",
// //       email: "",
// //       password: "",
// //       confirmPassword: "",
// //     });
// //     setFieldErrors({
// //       username: false,
// //       email: false,
// //       password: false,
// //       confirmPassword: false,
// //     });

// //     return () => clearTimeout(timer);
// //   }, [isLogin]);

// //   const handleChange = (e) => {
// //     setError("");
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
    
// //     // Clear field-specific error when user starts typing
// //     if (fieldErrors[name]) {
// //       setFieldErrors({ ...fieldErrors, [name]: false });
// //     }
// //   };

// //   const validateLogin = () => {
// //     const errors = {};
// //     let isValid = true;

// //     if (!formData.username.trim()) {
// //       errors.username = true;
// //       isValid = false;
// //     }
// //     if (!formData.password) {
// //       errors.password = true;
// //       isValid = false;
// //     }

// //     setFieldErrors(errors);
// //     if (!isValid) {
// //       setError("Please fill in all required fields.");
// //     }
// //     return isValid;
// //   };

// //   const validateSignup = () => {
// //     const errors = {};
// //     let isValid = true;

// //     if (!formData.username.trim()) {
// //       errors.username = true;
// //       isValid = false;
// //     }
// //     if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
// //       errors.email = true;
// //       isValid = false;
// //     }
// //     if (!formData.password || formData.password.length < 6) {
// //       errors.password = true;
// //       isValid = false;
// //     }
// //     if (formData.password !== formData.confirmPassword) {
// //       errors.confirmPassword = true;
// //       setError("Passwords do not match.");
// //       return false;
// //     }

// //     setFieldErrors(errors);
// //     if (!isValid) {
// //       setError("Please fill in all fields correctly.");
// //     }
// //     return isValid;
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (isLogin && validateLogin()) {
// //       onLogin({ username: formData.username });
// //     }
// //     if (!isLogin && validateSignup()) {
// //       onLogin({ username: formData.username });
// //     }
// //   };

// //   return (
// //     <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 backdrop-blur-lg flex justify-center items-center z-[9999] p-4">
// //       {/* Animated background elements */}
// //       <div className="absolute inset-0 overflow-hidden">
// //         <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
// //         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
// //       </div>

// //       {/* Main card */}
// //       <div className={`relative bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-lg w-full p-8 sm:p-12 border border-white/30 
// //         ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'} transition-all duration-500`}>
        
// //         {/* Decorative top border */}
// //         <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-3xl"></div>
        
// //         {/* Header section */}
// //         <div className="mb-10 text-center">
// //           <div className="relative inline-block mb-6">
// //             <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-lg opacity-50"></div>
// //             <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-2xl shadow-lg">
// //               <h1 className="text-4xl font-bold text-white tracking-tight select-none">Vedas College</h1>
// //             </div>
// //           </div>
// //           <p className="text-indigo-600 font-semibold tracking-wider uppercase text-sm select-none bg-indigo-50 px-4 py-2 rounded-full inline-block">
// //             Teachers Portal
// //           </p>
// //         </div>

// //         {/* Toggle switch */}
// //         <div className="flex items-center justify-center mb-10">
// //           <div className="relative bg-gray-100 rounded-full p-1 flex items-center">
// //             <button
// //               onClick={() => setIsLogin(true)}
// //               className={`relative px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 z-10 ${
// //                 isLogin ? 'text-white' : 'text-gray-600 hover:text-gray-900'
// //               }`}
// //             >
// //               Login
// //             </button>
// //             <button
// //               onClick={() => setIsLogin(false)}
// //               className={`relative px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 z-10 ${
// //                 !isLogin ? 'text-white' : 'text-gray-600 hover:text-gray-900'
// //               }`}
// //             >
// //               Sign Up
// //             </button>
// //             <div className={`absolute top-1 bottom-1 w-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg transition-all duration-500 ${
// //               isLogin ? 'left-1' : 'left-1/2'
// //             }`}></div>
// //           </div>
// //         </div>

// //         {/* Form title */}
// //         <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center select-none">
// //           {isLogin ? (
// //             <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
// //               Welcome Back! Please Login
// //             </span>
// //           ) : (
// //             <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// //               Create Your Account
// //             </span>
// //           )}
// //         </h2>

// //         <form onSubmit={handleSubmit} className="space-y-2">
// //           <FloatingLabelInput
// //             label="Username"
// //             type="text"
// //             name="username"
// //             value={formData.username}
// //             onChange={handleChange}
// //             autoFocus
// //             error={fieldErrors.username}
// //           />

// //           {!isLogin && (
// //             <FloatingLabelInput
// //               label="Email Address"
// //               type="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               error={fieldErrors.email}
// //             />
// //           )}

// //           <FloatingLabelInput
// //             label="Password"
// //             type="password"
// //             name="password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             error={fieldErrors.password}
// //           />

// //           {!isLogin && (
// //             <FloatingLabelInput
// //               label="Confirm Password"
// //               type="password"
// //               name="confirmPassword"
// //               value={formData.confirmPassword}
// //               onChange={handleChange}
// //               error={fieldErrors.confirmPassword}
// //             />
// //           )}

// //           {error && (
// //             <div className="flex items-center justify-center gap-2 p-4 bg-rose-50 border border-rose-100 rounded-xl animate-pulse">
// //               <svg className="w-5 h-5 text-rose-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
// //                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
// //               </svg>
// //               <p className="text-rose-600 font-medium text-sm text-center select-none">{error}</p>
// //             </div>
// //           )}

// //           <button
// //             type="submit"
// //             className="w-full group relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden mt-6"
// //           >
// //             <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// //             <span className="relative flex items-center justify-center gap-2">
// //               {isLogin ? (
// //                 <>
// //                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
// //                   </svg>
// //                   Login
// //                 </>
// //               ) : (
// //                 <>
// //                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
// //                   </svg>
// //                   Create Account
// //                 </>
// //               )}
// //             </span>
// //           </button>
// //         </form>

// //         {/* Switch between login/signup */}
// //         <div className="mt-10 pt-8 border-t border-gray-100 text-center">
// //           <p className="text-gray-600 text-sm select-none">
// //             {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
// //             <button
// //               onClick={() => setIsLogin(!isLogin)}
// //               className="relative text-indigo-600 font-semibold hover:text-purple-600 focus:outline-none group transition-colors duration-300"
// //               aria-label={isLogin ? "Switch to Sign Up" : "Switch to Login"}
// //             >
// //               <span>{isLogin ? "Sign Up" : "Login"}</span>
// //               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
// //             </button>
// //           </p>
// //         </div>

// //         {/* Footer note */}
// //         <div className="mt-8 text-center">
// //           <p className="text-xs text-gray-400 select-none">
// //             By continuing, you agree to our Terms & Privacy Policy
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginSignupOverlay;














// import React, { useState, useEffect } from "react";

// const FloatingLabelInput = ({ label, type, name, value, onChange, autoFocus }) => {
//   const [isFocused, setIsFocused] = useState(false);

//   return (
//     <div className="relative z-0 w-full mb-6 group">
//       <input
//         type={type}
//         name={name}
//         id={name}
//         value={value}
//         onChange={onChange}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//         autoComplete="off"
//         autoFocus={autoFocus}
//         placeholder=" "
//         className="block py-3 px-4 w-full text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 peer transition"
//       />
//       <label
//         htmlFor={name}
//         className={`absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-4 z-10 origin-[0] bg-white px-1 
//           peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400
//           peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600
//           rounded select-none cursor-text
//         `}
//       >
//         {label}
//       </label>
//     </div>
//   );
// };

// const LoginSignupOverlay = ({ onLogin }) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState("");

//   useEffect(() => {
//     setError("");
//     setFormData({
//       username: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     });
//   }, [isLogin]);

//   const handleChange = (e) => {
//     setError("");
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateLogin = () => {
//     if (!formData.username || !formData.password) {
//       setError("Please fill in all fields.");
//       return false;
//     }
//     return true;
//   };

//   const validateSignup = () => {
//     if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
//       setError("Please fill in all fields.");
//       return false;
//     }
//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match.");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isLogin && validateLogin()) {
//       onLogin({ username: formData.username });
//     }
//     if (!isLogin && validateSignup()) {
//       onLogin({ username: formData.username });
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-gradient-to-tr from-purple-900 via-purple-800 to-indigo-900 backdrop-blur-sm flex justify-center items-center z-[9999] p-6">
//       <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-10 sm:p-12 border border-purple-300">
//         <div className="mb-10 text-center">
//           <h1 className="text-4xl font-extrabold text-purple-700 tracking-wide mb-1 select-none">Vedas College</h1>
//           <p className="text-purple-500 font-semibold tracking-wide uppercase text-sm select-none">Teachers Portal</p>
//         </div>

//         <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center select-none">
//           {isLogin ? "Welcome Back! Please Login" : "Create Your Account"}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6" noValidate>
//           <FloatingLabelInput
//             label="Username"
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             autoFocus
//           />

//           {!isLogin && (
//             <FloatingLabelInput
//               label="Email Address"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           )}

//           <FloatingLabelInput
//             label="Password"
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />

//           {!isLogin && (
//             <FloatingLabelInput
//               label="Confirm Password"
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//             />
//           )}

//           {error && (
//             <p className="text-center text-red-600 font-medium select-none animate-fadeIn">{error}</p>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
//           >
//             {isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>

//         <p className="mt-8 text-center text-gray-600 text-sm select-none">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//           <button
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-purple-600 font-semibold hover:underline focus:outline-none"
//             aria-label={isLogin ? "Switch to Sign Up" : "Switch to Login"}
//           >
//             {isLogin ? "Sign Up" : "Login"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginSignupOverlay;
