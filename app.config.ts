import {ConfigContext, ExpoConfig} from 'expo/config';
import bootsplash from 'react-native-bootsplash/expo';

export default ({config}: ConfigContext): ExpoConfig => ({
    ...config,
    name: 'Android 16 ISE',
    slug: 'android-16-ise',
    platforms: ['ios', 'android'],
    runtimeVersion: '1.0.0',
    newArchEnabled: true,
    orientation: 'portrait',
    userInterfaceStyle: 'light',
    androidStatusBar: {
        barStyle: 'dark-content',
    },
    assetBundlePatterns: ['**/*'],
    android: {
        package: `fr.mcastets.android16ise`,
        softwareKeyboardLayoutMode: 'pan'
    },
    extra: {
        eas: {
            projectId: "f3433040-f925-4252-b495-1aefd4c1c31a"
        }
    }
});
