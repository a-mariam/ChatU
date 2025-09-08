import '@/global.css'
import {View, Text, TouchableOpacity} from "react-native";

function Index () {
    return (
        <View  id={'view'} testID={'view'} className={` w-full h-full android:bg-[#9333ea]   ios:bg-[#9333ea]  `}>
            <Text id={'chatU'} testID={'chatU'} className={` w-fit h-fit ios:text-white android:text-white ios:text-[24px] android:text-[24px]  mt-auto mb-auto mr-auto ml-auto text-[#9333ea]  `}>Chat U</Text>
            <TouchableOpacity testID={'getStartedButton'}  className={` ios:w-fit android:w-fit  ios:border-1 ios:mt-auto ios:mb-auto ios:mr-auto ios:ml-auto android:mt-auto android:mb-auto android:mr-auto android:ml-auto  android:border-1  ios:border-white android:border-white `}>
                <Text className={`ios:text-white android:text-white g`}>Get started </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Index;