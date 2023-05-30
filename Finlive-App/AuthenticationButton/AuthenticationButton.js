import CustomButton from '../CustomButton';
import * as LocalAuthentication from 'expo-local-authentication';

export default function AuthenticationButton() {
	const handleAuthentication = async () => {
		const { success, error } = await LocalAuthentication.authenticateAsync();

		if (success) {
		  alert('Authentication successful');
		} else {
		  alert('Authentication failed');
		  console.log('Authentication error:', error);
		}
	  };
	
	  return (
    	<CustomButton title="Authenticate" onPress={handleAuthentication} />
	);
}