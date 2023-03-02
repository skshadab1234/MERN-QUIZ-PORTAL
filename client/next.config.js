module.exports = () => {
 const Base_Url = "https://ciiyc-backend.onrender.com"
  // const Base_Url = 'http://localhost:3001/'
  const rewrites = () => {
    return [
      {
        source: "/settings",
        destination: `${Base_Url}/settings`,
      },
      {
        source: "/login",
        destination: `${Base_Url}/login`,
      },
      {
        source: "/profile",
        destination: `${Base_Url}/profile`,
      },
      {
        source: "/getdata",
        destination: `${Base_Url}/getdata`,
      },
      {
        source: "/logout",
        destination: `${Base_Url}/logout`,
      },
      {
        source: "/register",
        destination: `${Base_Url}/register`,
      },
      {
        source: "/uploadTest",
        destination: `${Base_Url}/uploadTest`,
      },
      {
        source: "/EndTest",
        destination: `${Base_Url}/EndTest`,
      },
      {
        source: "/getWinnersList",
        destination: `${Base_Url}/getWinnersList`,
      },
      {
        source: "/GetUserScore",
        destination: `${Base_Url}/GetUserScore`,
      },
      {
        source: "/UserFullList",
        destination: `${Base_Url}/UserFullList`,
      },

    ];
  };
  return {
    rewrites,
  };
};

