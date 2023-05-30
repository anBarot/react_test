import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#FFA500',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOpacity: 0.3,
		shadowRadius: 4,
		shadowOffset: {
		  width: 0,
		  height: 2,
		},
		elevation: 4,
	  },
	  buttonText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	  },
});

export default CustomButton;
