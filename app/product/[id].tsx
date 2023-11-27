
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Image } from '../../src/components/StyledImage';
import { MonoText } from '../../src/components/StyledText';
import { StyledView, Text } from '../../src/components/Themed';
import { RootState } from '../../src/logic/store';


export default function Products() {
    const productDetails = useSelector((state: RootState) => state.content.productDetails)

    return (
        <StyledView style={styles.container}>
            <Image source={{ uri: productDetails?.image }} />
            <MonoText>{productDetails?.price} $</MonoText>
            <Text style={styles.title}>{productDetails?.title}</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <Text style={styles.subTitle}>category</Text>
                <Text>{productDetails?.category}</Text>
            </View>
            <Text style={{ marginTop: 15 }}>{productDetails?.description}</Text>
        </StyledView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 5,
        paddingTop: 40,
    },
    title: {
        fontSize: 18,
    },
    subTitle: {
        fontWeight: '600'
    },
});
