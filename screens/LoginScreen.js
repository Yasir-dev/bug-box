import { StyleSheet, Alert, View } from 'react-native';
import React, { useState } from 'react';
import Loader from "../components/Loader";
import { login } from '../utils/authentication';
import { useDispatch } from 'react-redux';
import { saveToken } from '../store/redux/authenticationToken';
import { GlobalStyles } from '../constants/styles';
import LoginForm from '../components/LoginForm';

const LoginScreen = () => {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [validCredentials, setValidCredentials] = useState({
      email: true,
      password: true,
    });
    const [emailDefault, setEmailDefault] = useState('');
    const [passwordDefault, setPasswordDefault] = useState('');
    const dispatch = useDispatch();

    const handleLogin = async ({email, password}) => {
        setIsAuthenticating(true);
        try {
            const token = await login(email, password);
            dispatch(saveToken({token: token}));
           
          } catch (error) {
            Alert.alert(
              'Authentication failed!',
              'Please recheck your credentials and try again!'
            );
          }
          setIsAuthenticating(false);
          setEmailDefault(email);
          setPasswordDefault(password);
     }

     const handleSubmit = ({ email, password }) => {
      email = email.trim();
      password = password.trim();
  
      const isEmailValid = email.includes("@");// just a dummy check ;-)
      const isPasswordValid = password.length > 6;
  
      if (!isEmailValid || !isPasswordValid) {
        Alert.alert("Invalid input", "Please check your entered credentials.");
  
        setValidCredentials({
          email: isEmailValid,
          password: isPasswordValid,
        });
  
        return;
      }
  
      handleLogin({ email, password });
    };

    if (isAuthenticating) {
        return <Loader/>;
    }

    return (
      <View style={styles.container}>
        <LoginForm
          onSubmit={handleSubmit} 
          validCredentials={validCredentials}
          emailDefault={emailDefault}
          passwordDefault={passwordDefault}
          />
      </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
      marginTop: 64,
      marginHorizontal: 32,
      padding: 16,
      borderRadius: 8,
      backgroundColor: GlobalStyles.colors.primary200,
      elevation: 2,
      shadowColor: GlobalStyles.colors.black,
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.35,
      shadowRadius: 4,
    },
});