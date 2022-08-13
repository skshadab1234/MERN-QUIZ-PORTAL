module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/login",
        destination: "https://ciiyc-2022.herokuapp.com/login",
      },
      {
        source: "/profile",
        destination: "https://ciiyc-2022.herokuapp.com/profile",
      },
      {
        source: "/getdata",
        destination: "https://ciiyc-2022.herokuapp.com/getdata",
      },
      {
        source: "/logout",
        destination: "https://ciiyc-2022.herokuapp.com/logout",
      },
      {
        source: "/register",
        destination: "https://ciiyc-2022.herokuapp.com/register",
      },
      {
        source: "/uploadTest",
        destination: "https://ciiyc-2022.herokuapp.com/uploadTest",
      },
    ];
  };
  return {
    rewrites,
  };
};