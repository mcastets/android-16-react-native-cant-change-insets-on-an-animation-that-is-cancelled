import React, {memo, useEffect} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSequence,
    withTiming,
} from 'react-native-reanimated';

export const Loader = memo(({ loading }: { loading: boolean }) => {
    const translateX = useSharedValue(0);
    const opacity = useSharedValue(0);
    const DURATION = 1000;

    // Animated style for the loader bar
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
            opacity: opacity.value,
            backgroundColor: '#FE5716',
        };
    });

    // Trigger the animation effect when the loader is loading
    useEffect(() => {
        if (loading) {
            opacity.value = 1;
            translateX.value = 0;
            translateX.value = withRepeat(
                withSequence(
                    // Go to the right
                    withTiming(loaderWidth, { duration: DURATION, easing: Easing.inOut(Easing.ease) }),
                    // Go to the left
                    withTiming(0, { duration: DURATION, easing: Easing.inOut(Easing.ease) }),
                ),
                -1, // Infinite repetitions
            );
        } else {
            // Fadeout the loader
            opacity.value = withTiming(0, { duration: 50 });
        }
    }, [loading]);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.loader, animatedStyle]} />
        </View>
    );
});

const loaderWidth = Dimensions.get('window').width + 100;

const styles = StyleSheet.create({
    container: {
        height: 2,
        width: '100%',
        flex: 1,
        overflow: 'hidden',
    },
    loader: {
        height: '100%',
        width: 100,
        marginHorizontal: -100, // The loader starts outside the component
    },
});
