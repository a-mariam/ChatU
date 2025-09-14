import {View, Text, TextInput, Button, Pressable} from "react-native";
import React, {useState} from 'react';
import {Link} from "expo-router";

function Signup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePasswordChange = (input: string) => {
        const checks  =  /^\S{4,}$/.test(input);
        if (!checks) {
            // set
        }

    }

    return (
        // <signUp/>
        <View
            className={` bg-white grid grid-cols-1 gap-[15%]  content-between   h-full w-full px-6 py-2    `}
        >

            <View
                className={` w-full   `}
            >
                <Text className={`text-[#9333ea]  `}>Back</Text>

                <Text className={` mr-auto ml-auto text-[#9333ea] text-2xl font-bold  `}>Sign up </Text>
                <Text className={`text-[#9333ea] `}>Get chatting with friends and family today by signing up for our chat app!</Text>
            </View>

            <View className={` grid gap-10  `}>
                <TextInput
                    placeholder="Enter your username"
                    value={username}
                    onChangeText={setUsername}
                    className={` w-full px-2  border t  rounded-md  h-fit py-4  border-[#CDD1D0] `}
                />
                <TextInput
                    placeholder="Email"
                    secureTextEntry={true}
                    value={email}
                    onChangeText={setEmail}
                    className={` w-full px-2  border   rounded-md  h-fit py-4  border-[#CDD1D0] `}

                />
                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    className={` w-full px-2  border ]  rounded-md  h-fit py-4  border-[#CDD1D0] `}

                />
                <TextInput
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    className={` w-full px-2  border tex  rounded-md  h-fit py-4  border-[#CDD1D0] `}
                />
            </View>


            <View
                className={` mb-0   `}
            >
                <Pressable
                    className={`bg-[#9333ea] w-full h-fit  px-6 py-4 rounded-md `}
                    onPress={() => alert("Tailwind Button Pressed!")}
                >
                    <Text className="text-white mr-auto ml-auto  text-lg font-semibold">Create an account </Text>
                </Pressable>
                <Text className={` mt-1 mr-auto ml-auto  `}>
                    Already have an account? <Link href={`/`} className={` text-[#9333ea]  `} >Login instead.</Link>
                </Text>
            </View>

        </View>
    )
}

export default Signup;