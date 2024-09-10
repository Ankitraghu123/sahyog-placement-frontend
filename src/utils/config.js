// Retrieve and clean token from localStorage
const getTokenFromLocalStorage = localStorage.getItem("token");

// Remove any extra quotes and escape characters
const cleanToken = getTokenFromLocalStorage ? getTokenFromLocalStorage.replace(/^"|"$/g, '').replace(/\\/g, '') : "";

// Set up config headers with the cleaned token
export const config = {
  headers: {
    Authorization: `Bearer ${cleanToken}`,
    Accept: "application/json",
  },
};

// console.log(getTokenFromLocalStorage) 

export const isLoggedIn = ()=>{
  return getTokenFromLocalStorage == null ? false : true
}


