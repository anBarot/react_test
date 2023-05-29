import React from 'react';
import { View, Button, Text } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as LocalAuthentication from 'expo-local-authentication';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
	const handleAuthentication = async () => {
		const { success, error } = await LocalAuthentication.authenticateAsync();
	
		if (success) {
		  alert('Authentication successful');
		} else {
		  alert('Authentication failed');
		  console.log('Authentication error:', error);
		}
	  };

	const handleNotification = async () => {
    	await Notifications.scheduleNotificationAsync({
    	content: {
        	title: 'Hello!',
        	body: 'This is a notification from your app!',
    	},
    	trigger: null,
    	});
	};

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		    <Text>Press the button to authenticate with fingerprint</Text>
    		<Button title="Authenticate" onPress={handleAuthentication} />
			<Button title="Send Notification" onPress={handleNotification} />
		</View>
	);
}
