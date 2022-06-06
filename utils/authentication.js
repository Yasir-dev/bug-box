import axios from 'axios';

const FIREBASE_AUTHENTICATION_URL = 'https://identitytoolkit.googleapis.com/v1/accounts';
const API_KEY = 'ADD_SECRET_HERE';

export const login = async (email, password) => {
    const response = await axios.post(
        `${FIREBASE_AUTHENTICATION_URL}:signInWithPassword?key=${API_KEY}`, 
        {
            email: email,
            password: password,
            returnSecureToken: true,
        }
      );

      const token = response.data.idToken;
    
      return token;
};