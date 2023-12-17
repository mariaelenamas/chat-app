import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import { getAuth, signInAnonymously } from "firebase/auth";

const Start = ({ navigation }) => {
    const [name, setName] = useState("");
    const [selectedColor, setSelectedColor] = useState("#DDDDDD");

    const auth = getAuth();

    const signInUser = () => {
        signInAnonymously(auth)
            .then((result) => {
                navigation.navigate("Chat", {
                    userID: result.user.uid,
                    name: name,
                    color: selectedColor,
                });
                Alert.alert("signed in successfully");
            })
            .catch((error) => {
                Alert.alert("unable to sign in, try again later");
                console.log(error);
            });
    };

    return (
        <View style={[styles.container, { backgroundColor: selectedColor }]}>
            <Text>Hello Start!</Text>
            <TextInput
                style={styles.textInput}
                value={name}
                onChangeText={setName}
                placeholder="Type your username here"
            />
            <View style={styles.Box}  >
                <TouchableOpacity
                    style={[styles.circle, styles.circleColor1, styles.colorInput1]}
                    onPress={() => setSelectedColor("#090C08")}
                ></TouchableOpacity>
                <TouchableOpacity
                    style={[styles.circle, styles.circleColor2, styles.colorInput2]}
                    onPress={() => setSelectedColor("#474056")}
                ></TouchableOpacity>
                <TouchableOpacity
                    style={[styles.circle, styles.circleColor3, styles.colorInput3]}
                    onPress={() => setSelectedColor("#8A95A5")}
                ></TouchableOpacity>
                <TouchableOpacity
                    style={[styles.circle, styles.circleColor4, styles.colorInput4]}
                    onPress={() => setSelectedColor("#B9C6AE")}
                ></TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.button} onPress={signInUser}>
                <Text style={styles.buttonText}>Start Chatting</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        width: "88%",
        padding: 15,
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 15
    },
    button: {
        alignItems: "center",
        padding: 10,
    },
    circle: {
        width: 50,
        borderRadius: 25,
        height: 50,

    },
    Box: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "90%",
        marginBottom: 10
    },
    circleColor1: {
        backgroundColor: "#DDDDDD"
    },
    colorInput1: {
        backgroundColor: "#090C08"
    },

    circleColor2: {
        backgroundColor: "#DDDDDD"
    },
    colorInput2: {
        backgroundColor: "#474056"
    },

    circleColor3: {
        backgroundColor: "#DDDDDD"
    },
    colorInput3: {
        backgroundColor: "#8A95A5"
    },

    circleColor4: {
        backgroundColor: "#DDDDDD"
    },
    colorInput4: {
        backgroundColor: "#B9C6AE"
    },

});

export default Start;
