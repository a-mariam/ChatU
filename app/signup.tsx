import {View, Text, TextInput, Button, Pressable, TouchableWithoutFeedback, Keyboard} from "react-native";
import React, {useState} from 'react';
import {Link} from "expo-router";

function Signup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const isButtonDisabled = password?.length < 4 && email?.length < 5

    const handlePasswordChange = (input: string) => {
        const checks = /^\S{4,}$/.test(input);
        if (!checks) {
            // set
        }

    }

    // const collectUserEmailInput = (input) =>
    //
    // const tap = Gesture.Tap()
    //     // Dismiss on tap end to avoid being triggered when scrolling
    //     .onEnd(() => {
    //         if (!isTargetTextInput.current) {
    //             Keyboard.dismiss();
    //         }
    //     })
    //     .runOnJS(true);

    return (
        <View className={` bg-white grid grid-cols-1   h-full w-full px-3 py-2    `}>
            <View className={` w-full  bg-purple-200  `}>
                <Link href={`/`} className={`text-[#9333ea] ios:hidden android:grid `}>Back</Link>
                <Text className={` mr-auto ml-auto text-[#9333ea] text-2xl font-bold  `}>Sign up </Text>
                {/*<Text className={`text-[#9333ea] `}>Get chatting with friends and family today by signing up for our chat app!</Text>*/}
            </View>
            <View className={` grid gap-6 h-fit  bg-rend-300 `}>
                {/*<TextInput*/}
                {/*    autoFocus*/}
                {/*    placeholder="Enter your username"*/}
                {/*    value={username}*/}
                {/*    placeholderTextColor={'#CDD1D0'}*/}
                {/*    onChangeText={setUsername}*/}
                {/*    className={` w-full px-2  border placeholder:text-[#CDD1D0]   rounded-md  h-fit py-4  border-[#CDD1D0] `}*/}
                {/*/>*/}
                {/*<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>*/}
                    <TextInput
                        placeholder="Email"
                        // secureTextEntry={true}
                        value={email}
                        // onChangeText={collectUserEmailInput}
                        className={` w-full px-2 ring-[#CDD1D0]  border placeholder:text-[#CDD1D0] rounded-md on h-fit py-4  border-[#CDD1D0] `}
                        autoFocus
                        placeholderTextColor={'#CDD1D0'}
                    />
                {/*</TouchableWithoutFeedback>*/}
                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    className={` w-full px-2  border placeholder:text-[#CDD1D0]   rounded-md  h-fit py-4  border-[#CDD1D0] `}
                    autoFocus
                    placeholderTextColor={'#CDD1D0'}

                />
                <TextInput
                    autoFocus
                    placeholder="Confirm password"
                    value={confirmPassword}
                    placeholderTextColor={'#CDD1D0'}
                    onChangeText={setConfirmPassword}
                    className={` w-full px-2  border placeholder:text-[#CDD1D0]  rounded-md  h-fit py-4  border-[#CDD1D0] `}
                />
            </View>
            <View className={` mb-0   `}>
                <Pressable
                    disabled={isButtonDisabled}
                    className={` ${isButtonDisabled ? `bg-[#CDD1D0] ` : `bg-[#9333ea]`} w-[80%] grid self-center h-fit  px-6 py-2 rounded-full `}
                    onPress={() => alert("Tailwind Button Pressed!")}
                >
                    <Text className="text-white mr-auto ml-auto  text-[16px] fontsemibold ">Continue</Text>
                </Pressable>
                <Text className={` mt-1 mr-auto ml-auto text-[10px] `}>Already have an account? <Link href={`/`}
                                                                                                      className={` text-[#9333ea]  `}>Login
                    instead.</Link>
                </Text>
            </View>


        </View>
    )
}

export default Signup;