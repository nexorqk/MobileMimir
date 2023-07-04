import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export const Signin = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '698008851431-rff0gg5d85d7qqi22ejbgqueqfhkprla.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  });

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      console.log(userInfo);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User canceled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing in');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available');
      } else {
        console.log('Some other happened');
        console.log(error.message);
        console.log(error.code);
      }
    }
  };

  return (
    <View style={styles.view}>
      <GoogleSigninButton
        style={styles.googleButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flex: 1,
  },
  googleButton: {
    width: 192,
    height: 48,
    marginTop: 30,
  },
});
