import { useRouter } from "expo-router";
import React from "react";
import { TouchableHighlight } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Product } from "../logic/slices/productsSlice";
import { Image } from "./StyledImage";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

const RenderCard = ({ item }: { item: Product }) => {
    const router = useRouter();

    return (
        <TouchableHighlight style={{ marginVertical: 10 }} onPress={() => router.push(`/product/${item.id}`)}>
            <View>
                <Image source={{ uri: item.image }} />
                <Text>{item.title}</Text>
                <MonoText>{item.price} $</MonoText>
            </View>
        </TouchableHighlight>
    );
};

export const ProductsScreenDetails: React.FC<{ products: Product[] }> = ({ products }) => {
    return (
        <FlatList
            data={products}
            renderItem={({ item, index, separators }) => <RenderCard item={item} />}
            keyExtractor={(item) => item.id.toString()} // Use your unique identifier
        />
    )
}