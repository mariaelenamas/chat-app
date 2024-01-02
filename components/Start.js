import { useState } from "react";
import { Platform, StyleSheet, View, Text, TouchableOpacity, TextInput, Alert, ImageBackground, KeyboardAvoidingView } from "react-native";
import { getAuth, signInAnonymously } from "firebase/auth";

const Start = ({ navigation }) => {
    const [name, setName] = useState("");
    // const [selectedColor, setSelectedColor] = useState("");
    const [background, setBackground] = useState("");

    const auth = getAuth();

    const signInUser = () => {
        signInAnonymously(auth)
            .then((result) => {
                navigation.navigate("Chat", {
                    userID: result.user.uid,
                    name: name,
                    background: background,
                });
                Alert.alert("signed in successfully");
            })
            .catch((error) => {
                Alert.alert("unable to sign in, try again later");
                console.log(error);
            });
    };

    const setSelectedColor = (color) => {
        setBackground(color);
    };

    return (
        <View style={[styles.container, { backgroundColor: background }]}>
            <ImageBackground source={require('../assets/Background-Image.png')} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>Chat App</Text>
                <View style={styles.Box}>
                    <TextInput
                        style={styles.textInput}
                        value={name}
                        onChangeText={setName}
                        placeholder="Type your username here"
                    />
                    <Text style={styles.chooseBackgroundColor}>Choose Background Color:</Text>
                    <View style={styles.buttonsBox}>
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
            </ImageBackground>
            {Platform.OS === "ios" ? (
                <KeyboardAvoidingView behavior="padding" />
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    Box: {
        height: "44%",
        width: "88%",
        backgroundColor: "white",
        alignItems: "center",
        marginBottom: 30,
        justifyContent: "space-evenly",
    },
    image: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    title: {
        flex: 2,
        fontSize: 45,
        fontWeight: "600",
        color: "#FFFFFF",
        alignSelf: "center",
        paddingTop: 60,
    },
    textInput: {
        width: "88%",
        padding: 15,
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 15,
        fontSize: 16,
        fontWeight: "400",
        color: "#000",
        opacity: 0.5,
    },
    button: {
        backgroundColor: "#757083",
        width: "88%",
        borderRadius: 5,
        alignItems: "center",
        padding: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    chooseBackgroundColor: {
        fontSize: 16,
        fontWeight: "400",
        color: "#757083",
        textAlign: "center",
        alignSelf: "flex-start",
        marginLeft: 24,
        opacity: 1,
    },
    buttonsBox: {
        display: "flex",
        flexDirection: "row",
        width: "90%",
        margin: 10,
        justifyContent: "space-evenly",
    },
    chooseColorBackground: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-evenly",
        width: "90%",
        marginBottom: 10
    },
    circle: {
        width: 50,
        borderRadius: 25,
        height: 50,
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
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        borderRadius: 5,
        color: "#FFFF",
        margin: 10,
        alignSelf: "center",
    }
});

export default Start;
