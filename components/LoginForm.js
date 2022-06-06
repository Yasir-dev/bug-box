import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';

const LoginForm = ({onSubmit, validCredentials, emailDefault, passwordDefault}) => {
    const [email, setEmail] = useState(emailDefault);
    const [password, setPassword] = useState(passwordDefault);

    const handleSubmit = () => {
        onSubmit({
            email,
            password
        });
    }

    const handleInputChange = (type, value) => {
        switch (type) {
          case 'email':
            setEmail(value);
            break;
          case 'password':
            setPassword(value);
            break;  
        }
    }

  return (
    <View>
      <View>
        <Input
          label="Email Address"
          textInputConfig={{
            onChangeText: (value) => handleInputChange('email', value),
            value: email,
            keyboardType: "email-address",
          }}  
          isValid={validCredentials.email}
        />
        <Input
          label="Password"
          textInputConfig={{
            onChangeText: (value) => handleInputChange('password', value),
            secureTextEntry: true,
            value: password,
          }}
          isValid={validCredentials.password}
        />
        <View>
          <Button onPress={handleSubmit}>
            Log In
          </Button>
        </View>
      </View>
    </View>
  )
}

export default LoginForm

const styles = StyleSheet.create({})