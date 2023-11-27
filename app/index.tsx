import { ThunkDispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsScreenDetails } from '../src/components/ProductsScreen';
import { StyledView, Text } from '../src/components/Themed';
import { fetchProducts } from '../src/logic/slices/productsSlice';
import { RootState } from '../src/logic/store';

export default function Products() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const products = useSelector((state: RootState) => state.content.products)
  const isLoading = useSelector((state: RootState) => state.content.isLoading)
  const error = useSelector((state: RootState) => state.content.error)
  if (isLoading) {
    return <Text>{'loading...'}</Text>
  }

  if (error) {
    return error
  }
  return (
    <StyledView style={styles.container}>
      {/* <StyledView style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <ProductsScreenDetails products={products} />
    </StyledView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
});
