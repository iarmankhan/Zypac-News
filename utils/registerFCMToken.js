import { PushNotificationAndroid } from '@cryptoticket/react-native-push-notification';

export const registerFCMToken = async () => {
    try {
        const channelId = "zypac_news_channel";
        const channelName = "zypac_news";
        const channelDesc = "news channel for zypac";
        const channelImportance = PushNotificationAndroid.CHANNEL_IMPORTANCE_DEFAULT;
        PushNotificationAndroid.createChannel(channelId, channelName, channelDesc, channelImportance);
        const token = await PushNotificationAndroid.getDeviceToken();
        await fetch(`https://zypacinfotech.com/app/wp-json/zypac/fcm/subscribe?user_email=arman.zypac@gmail.com&device_token=${token}&subscribed=newnot`);
        return true;
    } catch (err) {
        console.log("Error", err);
        return false;
    }
};
