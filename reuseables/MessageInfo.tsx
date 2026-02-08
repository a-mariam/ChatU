import {Pressable,StyleSheet, Text, TextInput, View} from "react-native";
import { Avatar, Accessory } from "react-native-elements";


interface IMessageInfo {
    id:string;
    message:string;
    userName:string;
}
function MessageInfo ({id, message,userName}: IMessageInfo) {


    return(
        <View
            id={id}
            testID={id}
            className={` flex-row gap-4  items-center bg-red-300  overflow-hidden `}
            style={styles.container}
        >

            <Avatar
                size="medium"
                rounded
                title="MT"
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={{backgroundColor: 'purple'}}
            />

            <View className={` w-full grid bg-red-200`}>
                {/*<Text style={styles.userName} >{userName}</Text>*/}
                {/*<Text>{message}</Text>*/}
                {/*<Text style={styles.time}>2:30am</Text>*/}
                {/*<Text>{userName}</Text>*/}
                <View className={`flex-row justify-between w-full  `}>
                    <Text style={styles.userName} >{userName}</Text>
                    <Text style={styles.time}>2:30am</Text>
                </View>
                <Text>{message}</Text>

            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        // paddingHorizontal:10,
        paddingVertical: 10,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    time: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#9333ea',
    }

})


export default MessageInfo;