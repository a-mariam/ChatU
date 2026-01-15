import React, {useState} from 'react';
import {Pressable, Text, TextInput, View} from "react-native";
import { Home2Outlined , MenuMeatballs1Outlined} from '@lineiconshq/free-icons';
// import { MenuMeatballs1Outlined } from '@lineiconshq/react-native-lineicons';
import { Lineicons } from '@lineiconshq/react-native-lineicons';

function Home  ()  {
    const [searchTerm, setSearchTerm] = useState('');

    {/*<View className={` flex  px-2 mt-auto w-full h-[5rem]  bg-red-300  `}>*/}
    {/*    <Lineicons icon={Home2Outlined} size={32} color="#007AFF" strokeWidth={2} />*/}
    {/*    <Lineicons icon={Home2Outlined} size={32} color="#007AFF" strokeWidth={2} />*/}
    {/*    <Lineicons icon={Home2Outlined} size={32} color="#007AFF" strokeWidth={2} />*/}
    {/*    <Lineicons icon={Home2Outlined} size={32} color="#007AFF" strokeWidth={2} />*/}

    {/*</View>*/}

    {/*<View className={`  justify-self-center w-[50%] bg-purple-100 `}>*/}
    {/*    <Lineicons className={` mr-auto ml-auto `} icon={ChatBubble2Outlined} size={32} color="#007AFF" strokeWidth={2} />*/}
    {/*</View>*/}
    {/*<View className={` mt-auto h-[5rem]  flex-row justify-between  w-full bg-red-200  `}>*/}
    {/*    <View className={` w-[50%] hover:bg-purple-300 `}>*/}
    {/*        <View className={` w-fit mt-auto mb-auto mr-auto ml-auto `}>*/}
    {/*            <Lineicons className={` mr-auto ml-auto `} icon={Home2Outlined} size={32} color="#007AFF" strokeWidth={2} />*/}
    {/*        </View>*/}
    {/*    </View>*/}
    {/*    <View className={` w-[50%] hover:bg-purple-300 `}>*/}
    {/*        <View className={` w-fit mt-auto mb-auto  mr-auto ml-auto `}>*/}
    {/*            <Lineicons className={` mr-auto ml-auto `} icon={ChatBubble2Outlined} size={32} color="#007AFF" strokeWidth={2} />*/}
    {/*        </View>*/}
    {/*    </View>*/}
    {/*</View>*/}

    return (
        <View className={` bg-r300  w-full h-full  `}>
            <View
                data-testid={`homeHeader`}
                className={` grid px-6 pb-3 fixed pt-8 border-b border-b-gray-300 w-full h-[15vh] bg-p urple-200 `}>
                <View className={` mb-4 w-full bg-re d-200 flex-row justify-between `}>
                    <Text className={` text-4xl font-bold text-gray-500 `} >Message</Text>
                    <Lineicons icon={MenuMeatballs1Outlined} size={38} color="#b8b9be" strokeWidth={2} />
                </View>
                <TextInput
                    placeholder="Search ..."
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                    className={` w-full px-2 bg-[#f3f4f6]   placeholder:text-gray-500  rounded-xl on h-fit py-6   `}
                    autoFocus
                    placeholderTextColor={'#CDD1D0'}
                />
            </View>
            <View
                data-testid={`homeBody`}
                className={` w-full h-[85vh] bg-red-300 `}
            >

            </View>
        </View>
    );
};

export default Home;
