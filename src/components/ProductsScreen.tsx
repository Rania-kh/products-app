import { ThunkDispatch } from "@reduxjs/toolkit";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableHighlight } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { Product, setProductDetails } from "../logic/slices/productsSlice";
import { Image } from "./StyledImage";
import { MonoText } from "./StyledText";
import { StyledView, Text } from "./Themed";

const RenderCard = ({ item }: { item: Product }) => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const router = useRouter();

    return (
        <TouchableHighlight
            style={{ marginVertical: 10, width: '45%' }}
            onPress={() => {
                dispatch(setProductDetails(item))
                router.push(`/product/${item.id}`)
            }}>
            <StyledView>
                <Image source={{ uri: item.image }} />
                <MonoText>{item.price} $</MonoText>
                <Text>{item.title}</Text>
            </StyledView>
        </TouchableHighlight>
    );
};

export const ProductsScreenDetails: React.FC<{ products: Product[] }> = ({ products }) => {
    return (
        <FlatList
            data={products} numColumns={2} horizontal={false} style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}
            renderItem={({ item, index, separators }) => <RenderCard item={item} />}
            keyExtractor={(item, index) => item.id.toString() + index} // Use your unique identifier
        />
    )
}