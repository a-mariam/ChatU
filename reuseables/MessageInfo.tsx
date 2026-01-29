import {Pressable,StyleSheet, Text, TextInput, View} from "react-native";


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
            className={` w-full h-[8vh]  p-4 border-b border-b-grey500  `}
            style={styles.container}
        >
            <Text>{message}</Text>
            <Text>{userName}</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        paddingHorizontal: 6,
    }
})


export default MessageInfo;