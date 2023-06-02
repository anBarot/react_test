import CustomButton from '../CustomButton';
// import FingerprintScanner from 'react-native-fingerprint-scanner';
import * as LocalAuthentication from 'expo-local-authentication';
import React, {useEffect} from 'react';

export default function AuthenticationButton() {

	useEffect(() => {
		checkFingerprintCompatibility();
	  }, []);
	  
	  const checkFingerprintCompatibility = async () => {
		try {
		  const isCompatible = await LocalAuthentication.hasHardwareAsync() && await LocalAuthentication.isEnrolledAsync();
		  if (!isCompatible) {
			alert('Fingerprint not available');
		  }
		} catch (error) {
		  alert('Error');
		}
	  };

	const handleAuthentication = async () => {
		const { success } = await LocalAuthentication.authenticateAsync();

		if (success) {
	  		alert('Authentication successful');
		} else {
	  		alert('Authentication failed');
		}
	};

	return (
    	<CustomButton title="Authenticate" onPress={handleAuthentication} />
	);
}