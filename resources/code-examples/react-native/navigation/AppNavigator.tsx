import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/PreLogin/Login/LoginScreen';

import ForgotPasswordScreen from '../screens/PreLogin/ForgotPassword/ForgotPasswordScreen';
import SignUpScreen from '../screens/PreLogin/SignUp/SignUpScreen';
import VerifyEmailScreen from '../screens/PreLogin/VerifyEmail/VerifyEmailScreen';
import DrawerNavigator from './DrawerNavigator';
import TermsAndConditionsScreen from '../screens/PreLogin/Legal/TermsAndConditionsScreen';
import PrivacyPolicyScreen from '../screens/PreLogin/Legal/PrivacyPolicyScreen';
import { withNavigationWrapper } from './NavigationWrapper';

const Stack = createNativeStackNavigator();

// Wrap components with navigation wrapper
const WrappedLoginScreen = withNavigationWrapper(LoginScreen);
const WrappedSignUpScreen = withNavigationWrapper(SignUpScreen);
const WrappedForgotPasswordScreen = withNavigationWrapper(ForgotPasswordScreen);
const WrappedVerifyEmailScreen = withNavigationWrapper(VerifyEmailScreen);
const WrappedTermsAndConditionsScreen = withNavigationWrapper(TermsAndConditionsScreen);
const WrappedPrivacyPolicyScreen = withNavigationWrapper(PrivacyPolicyScreen);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          animation: 'default'
        }}>
        <Stack.Screen
          name="Login"
          component={WrappedLoginScreen}
        />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
        />
        <Stack.Screen
          name="SignUp"
          component={WrappedSignUpScreen}
          options={{
            presentation: 'card'
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={WrappedForgotPasswordScreen}
          options={{
            presentation: 'card'
          }}
        />
        <Stack.Screen
          name="VerifyEmail"
          component={WrappedVerifyEmailScreen}
          options={{
            presentation: 'card'
          }}
        />
        <Stack.Screen
          name="TermsAndConditions"
          component={WrappedTermsAndConditionsScreen}
          options={{
            presentation: 'modal'
          }}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={WrappedPrivacyPolicyScreen}
          options={{
            presentation: 'modal'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
