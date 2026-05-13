import {useRef} from "react";
import {TextInput} from "react-native";

export const TextInputs = () => {
    const input1 = useRef<TextInput>(null);
    const input2 = useRef<TextInput>(null);

    return (
        <>
            <TextInput
                ref={input1}
                keyboardType={"default"}
                placeholder={`TextInput#1`}
                onSubmitEditing={() => input2.current?.focus()}
                returnKeyType="next"
                style={{paddingVertical: 10, marginVertical: 10, borderColor: "black", borderWidth: 1}}
            />
            <TextInput
                ref={input2}
                keyboardType={"default"}
                placeholder={`TextInput#2}`}
                returnKeyType="next"
                style={{paddingVertical: 10, marginVertical: 10, borderColor: "black", borderWidth: 1}}
            />
        </>
    );
}