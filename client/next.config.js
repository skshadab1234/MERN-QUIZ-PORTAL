// module.exports = () => {
//   const rewrites = () => {
//     return [
//       {
//         source: "/login",
//         destination: "http://localhost:3001/login",
//       },
//       {
//         source: "/profile",
//         destination: "http://localhost:3001/profile",
//       },
//       {
//         source: "/getdata",
//         destination: "http://localhost:3001/getdata",
//       },
//       {
//         source: "/logout",
//         destination: "http://localhost:3001/logout",
//       },
//       {
//         source: "/register",
//         destination: "http://localhost:3001/register",
//       },
//       {
//         source: "/uploadTest",
//         destination: "http://localhost:3001/uploadTest",
//       },
//     ];
//   };
//   return {
//     rewrites,
//   };
// };


// Server

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/login",
        destination: "https://ciiyc-cesa.herokuapp.com/login",
      },
      {
        source: "/profile",
        destination: "https://ciiyc-cesa.herokuapp.com/profile",
      },
      {
        source: "/getdata",
        destination: "https://ciiyc-cesa.herokuapp.com/getdata",
      },
      {
        source: "/logout",
        destination: "https://ciiyc-cesa.herokuapp.com/logout",
      },
      {
        source: "/register",
        destination: "https://ciiyc-cesa.herokuapp.com/register",
      },
      {
        source: "/uploadTest",
        destination: "https://ciiyc-cesa.herokuapp.com/uploadTest",
      },
      
    ];
  };
  return {
    rewrites,
  };
};