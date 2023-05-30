import CustomButton from '../CustomButton';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
	handleNotification: async () => ({
	  shouldShowAlert: true,
	  shouldPlaySound: true,
	  shouldSetBadge: true,
	}),
  });

  export default function NotificationButton() {
  
  const handleNotification = async () => {
	  await Notifications.scheduleNotificationAsync({
	  content: {
		  title: 'Hello',
		  body: 'This is a notification from your app',
	  },
	  trigger: null,
	  });
  };
  
	return (
		<CustomButton title="Send Notification" onPress={handleNotification} />
	);
}
