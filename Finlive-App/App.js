import React from 'react';
import { View, StyleSheet } from 'react-native';
import NotificationButton from './NotificationButton/NotificationButton';
import AuthenticationButton from './AuthenticationButton/AuthenticationButton';

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  paddingHorizontal: 20,
	},
	componentWrapper: {
	  marginBottom: 110,
	},
	text: {
	  fontSize: 16,
	  fontWeight: 'bold',
	},
  });

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.componentWrapper}>
				< AuthenticationButton/>
			</View>
			<View style={styles.componentWrapper}>
				< NotificationButton/>
			</View>
		</View>
	);
}
