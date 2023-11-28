import { ThunkDispatch } from "@reduxjs/toolkit";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { TouchableOpacity } from "react-native";
import { FlatList, RefreshControl } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { SearchTextField } from "../../components/SearchTextField";
import { Image } from "../../components/StyledImage";
import { MonoText } from "../../components/StyledText";
import { StyledView, Text } from "../../components/Themed";
import { Product, fetchProducts, setProductDetails } from "../../logic/slices/productsSlice";

const RenderCard = ({ item }: { item: Product }) => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const router = useRouter();

    return (
        <TouchableOpacity
            style={{ paddingVertical: 10, width: '50%' }}
            onPress={() => {
                dispatch(setProductDetails(item))
                router.push(`/product/${item.id}`)
            }}>
            <StyledView>
                <Image source={{ uri: item.image }} />
                <MonoText>{item.price} $</MonoText>
                <Text>{item.title}</Text>
            </StyledView>
        </TouchableOpacity>
    );
};

export const ProductsList: React.FC<{ products: Product[] }> = ({ products }) => {
    const [searchText, setSearchText] = useState('')
    const [filteredProducts, setFilteredProducts] = useState(products)
    const [refresh, setrefresh] = useState(false)
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    //useMemo for handling the search functionality
    useMemo(() => {
        if (searchText == '') setFilteredProducts(products)
        else {
            let newFilteredProducts = products.filter((product => product.title.toLowerCase().includes(searchText.toLowerCase())))
            setFilteredProducts(newFilteredProducts)
        }
    }, [searchText])

    return (
        <>
            <SearchTextField value={searchText} onChangeText={((newText: string) => setSearchText(newText))} />
            <FlatList
                data={filteredProducts}
                numColumns={2}
                horizontal={false}
                style={{ width: '100%', paddingTop: 10 }}
                renderItem={({ item, index, separators }) => <RenderCard item={item} />}
                keyExtractor={(item, index) => item.id.toString() + index} // Use your unique identifier
                onRefresh={() => setrefresh(true)}
                showsVerticalScrollIndicator={false}
                refreshing={refresh}
                refreshControl={
                    <RefreshControl
                        refreshing={refresh}
                        onRefresh={() => {
                            dispatch(fetchProducts())
                            setrefresh(false)
                        }}
                    />
                }
            />
        </>
    )
}