import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {Avatar, Accessory} from "react-native-elements";


interface IMessageInfo {
    id: string;
    message: string;
    userName: string;
}

function MessageInfo({id, message, userName}: IMessageInfo) {


    return (
        <View
            id={id}
            testID={id}
            className={` flex-row gap-4 border-b border-b-gray-300 items-center bg-red- 300  overflow-hidden `}
            style={styles.container}
        >
            <View
                style={{flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                    <Avatar
                        size="medium"
                        rounded
                        title="MT"
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.8}
                        containerStyle={{backgroundColor: 'purple'}}
                    />
            </View>
            <View
                style={{flex: 8, backgroundColor: 'white', paddingVertical: 'auto'}}
            >
                <View className={`flex-row bg-red-300 justify-between w-full  `}>
                    <Text style={styles.userName}>{userName}</Text>
                    <Text style={styles.time}>2:30am</Text>
                </View>
                <Text
                    numberOfLines={1}
                    style={styles.message}
                    className={` text-ellipsis    `}>{message}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        paddingHorizontal: 12,
    },
    message: {
        color: 'black',
    },
    userName: {
        fontSize: 30,
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