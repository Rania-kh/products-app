import { Entypo } from "@expo/vector-icons";
import { FC } from "react";
import { StyleSheet } from "react-native";
import StyledButton from "./StyledButton";
import { StyledView, Text } from "./Themed";


export const LoadingError: FC<{ reloadFunction: Function }> = ({ reloadFunction }) => {
    return (
        <StyledView style={styles.container}>
            <Entypo
                name="warning"
                size={200}
                color="#4FBA4C"
                style={{ marginBottom: 10 }}
            />
            <Text style={styles.warningText}>Sorry, we're having some trouble.</Text>
            <Text style={[styles.warningText, { marginBottom: 20 }]}>Try reloading the page</Text>
            <StyledButton title="Reload" onPress={() => reloadFunction()} color={'#4FBA4C'} />
        </StyledView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    warningText: {
        fontSize: 20
    }
});