# android-16-react-native-cant-change-insets-on-an-animation-that-is-cancelled

Reproduction of the Android 16 `IllegalStateException` when using `react-native-keyboard-controller` alongside 
another running animation with `react-native-reanimated`.

## Setup

1. Build a custom dev build with `npm run build:android:dev:local` or fetch the existing one from my [Google Drive](https://drive.google.com/file/d/1uh5-UPMaM_F_p6CRR4W6Qm03_P7obsG-/view?usp=drive_link).
2. Install the custom dev build on your device (emulator or physical). Use Orbit from Expo for easier setup.
3. `npm install`
4. `npm run start`
5. Pair your device (scan the QR code or enter the IP address)

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