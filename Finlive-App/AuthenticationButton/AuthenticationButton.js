import CustomButton from '../CustomButton';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import * as LocalAuthentication from 'expo-local-authentication';
import React, { useEffect } from 'react';
import { Alert } from 'react-native';

const authenticateWithFingerprint = async () => {
	const hasHardware = await LocalAuthentication.hasHardwareAsync();
	const hasEnrolledFingerprints = await LocalAuthentication.isEnrolledAsync();
  
	if (hasHardware && hasEnrolledFingerprints) {
	  const { success, error } = await LocalAuthentication.authenticateAsync({
		promptMessage: 'Scan your fingerprint',
	  });
	  if (success) {
		Alert.alert('Success', 'Fingerprint authentication successful');
	  } else {
		Alert.alert('Error', 'Fingerprint authentication failed');
	  }
	} else {
	  Alert.alert('Error', 'Fingerprint authentication is not available on this device');
	}
  };

export default function AuthenticationButton() {
	
	  return (
    	<CustomButton title="Authenticate" onPress={authenticateWithFingerprint} />
	);
}