# android-16-react-native-cant-change-insets-on-an-animation-that-is-cancelled

Reproduction of the Android 16 `IllegalStateException` when using `react-native-keyboard-controller` alongside 
another running animation with `react-native-reanimated`.

## Setup

1. Install the dev build (`devbuild.apk`) on any Android device (emulator or physical device). You can use Expo Orbit for a quick setup.
2. `npm install`
3. `npm run start`
4. Pair your device (scan the QR code or enter the IP address)

## How to reproduce the issue

1. Focus the first input on Android 16 — the keyboard should appear.
2. Tap the return key to switch to the second input — the app crashes.

You should see the following error:
```
Your app just crashed. See the error below.
java.lang.IllegalStateException: Can't change insets on an animation that is cancelled.
  android.view.InsetsAnimationControlImpl.setInsetsAndAlpha(InsetsAnimationControlImpl.java:292)
  android.view.InsetsAnimationControlImpl.setInsetsAndAlpha(InsetsAnimationControlImpl.java:282)
  android.view.InsetsController$InternalAnimationControlListener.lambda$onReady$0(InsetsController.java:433)
  android.view.InsetsController$InternalAnimationControlListener.$r8$lambda$BJTEi7zfHhP2W08t256nzVrDzao(Unknown Source:0)
  android.view.InsetsController$InternalAnimationControlListener$$ExternalSyntheticLambda0.onAnimationUpdate(D8$$SyntheticClass:0)
```