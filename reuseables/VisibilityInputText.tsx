import React from 'react';
import {TextInput, TouchableOpacity, View, Text} from "react-native";

type MyButtonProps = {
    placeholder: string;
    isSecureText?: boolean;
    value: string;
    onChange: (value: string) => void;

};

const VisibilityInputText: React.FC<MyButtonProps>  = ({placeholder, isSecureText, value, onChange}) => {
    const [secure, setSecure] = React.useState(isSecureText || false)
    return (
        <View>
            <TextInput
                autoFocus
                testID={'inputElement'}
                placeholder={placeholder}
                secureTextEntry={secure}
                value={value}
                placeholderTextColor={'#CDD1D0'}
                onChangeText={onChange}
                className={` w-full px-2  border placeholder:text-[#CDD1D0]   rounded-md  h-fit py-4  border-[#CDD1D0] `}
            />
            <TouchableOpacity
                onPress={() => setSecure(!secure)}
                accessibilityLabel={secure ? "Show password" : "Hide password"}
                testID="toggleInputVisibility"
            >
                <Text>{secure ? "👁️" : "🙈"}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default VisibilityInputText;