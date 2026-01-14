import React from 'react';
import {Pressable, Text, TextInput, View} from "react-native";
import { Home2Outlined , ChatBubble2Outlined} from '@lineiconshq/free-icons';
import { Lineicons } from '@lineiconshq/react-native-lineicons';

function Home  ()  {

    {/*<View className={` flex  px-2 mt-auto w-full h-[5rem]  bg-red-300  `}>*/}
    {/*    <Lineicons icon={Home2Outlined} size={32} color="#007AFF" strokeWidth={2} />*/}
    {/*    <Lineicons icon={Home2Outlined} size={32} color="#007AFF" strokeWidth={2} />*/}
    {/*    <Lineicons icon={Home2Outlined} size={32} color="#007AFF" strokeWidth={2} />*/}
    {/*    <Lineicons icon={Home2Outlined} size={32} color="#007AFF" strokeWidth={2} />*/}

    {/*</View>*/}

    {/*<View className={`  justify-self-center w-[50%] bg-purple-100 `}>*/}
    {/*    <Lineicons className={` mr-auto ml-auto `} icon={ChatBubble2Outlined} size={32} color="#007AFF" strokeWidth={2} />*/}
    {/*</View>*/}


    return (
        <View className={` bg w-full h-full  `}>
            <View className={` mt-auto h-[5rem]  flex-row justify-between  w-full bg-red-200  `}>
                <View className={` w-[50%] hover:bg-purple-300 `}>
                    <View className={` w-fit mt-auto mb-auto mr-auto ml-auto `}>
                        <Lineicons className={` mr-auto ml-auto `} icon={Home2Outlined} size={32} color="#007AFF" strokeWidth={2} />
                    </View>
                </View>
                <View className={` w-[50%] hover:bg-purple-300 `}>
                    <View className={` w-fit mt-auto mb-auto  mr-auto ml-auto `}>
                        <Lineicons className={` mr-auto ml-auto `} icon={ChatBubble2Outlined} size={32} color="#007AFF" strokeWidth={2} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Home;
