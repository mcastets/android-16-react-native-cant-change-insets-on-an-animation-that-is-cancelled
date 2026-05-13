import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {KeyboardAwareScrollView, KeyboardProvider} from 'react-native-keyboard-controller';
import {Loader} from "./src/Loader";
import {TextInputs} from "./src/TextInputs";
import {View} from "react-native";

const App = () => (
    <SafeAreaProvider>
        <KeyboardProvider>
            <NavigationContainer>
                <GestureHandlerRootView style={{flex: 1}}>
                    <BottomSheetModalProvider>
                        <KeyboardAwareScrollView bottomOffset={50}>
                            <View style={{margin: 50}}>
                                <Loader loading={true}/>

                                <TextInputs/>
                            </View>
                        </KeyboardAwareScrollView>
                    </BottomSheetModalProvider>
                </GestureHandlerRootView>
            </NavigationContainer>
        </KeyboardProvider>
    </SafeAreaProvider>
);


export default App;