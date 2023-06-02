import CustomButton from '../CustomButton';
// import FingerprintScanner from 'react-native-fingerprint-scanner';
import * as LocalAuthentication from 'expo-local-authentication';
import React from 'react';

export default function AuthenticationButton() {
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