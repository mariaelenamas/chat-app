import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";

const Start = ({ navigation }) => {
    const [name, setName] = useState("");

    const [selectedColor, setSelectedColor] = useState("#DDDDDD");

    const handleColorChange = (color) => {
        setSelectedColor(color);
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
                    onPress={() => handleColorChange("#DDDDDD")}
                ></TouchableOpacity>
                <TouchableOpacity
                    style={[styles.circle, styles.circleColor2, styles.colorInput2]}
                    onPress={() => handleColorChange("#008000")}
                ></TouchableOpacity>
                <TouchableOpacity
                    style={[styles.circle, styles.circleColor3, styles.colorInput3]}
                    onPress={() => handleColorChange("#FFFF00")}
                ></TouchableOpacity>
                <TouchableOpacity
                    style={[styles.circle, styles.circleColor4, styles.colorInput4]}
                    onPress={() => handleColorChange("#FF0000")}
                ></TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Chat", { name: name, backgroundColor: selectedColor })}
            >
                <Text>Go to Chat</Text>
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
        backgroundColor: "#DDDDDD"
    },

    circleColor2: {
        backgroundColor: "#DDDDDD"
    },
    colorInput2: {
        backgroundColor: "#008000"
    },

    circleColor3: {
        backgroundColor: "#DDDDDD"
    },
    colorInput3: {
        backgroundColor: "#FFFF00"
    },

    circleColor4: {
        backgroundColor: "#DDDDDD"
    },
    colorInput4: {
        backgroundColor: "#FF0000"
    },

});

export default Start;
