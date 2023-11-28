import { Feather } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { StyledTextField, TextFieldProps } from './Themed';

export function SearchTextField(props: TextFieldProps) {
    return <View style={styles.container}>
        <Feather
            name="search"
            size={20}
            color="black"
            style={{ marginRight: 3 }}
        />
        <View style={{ width: '94%' }}>
            <StyledTextField {...props} />
        </View>
    </View>
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
});
