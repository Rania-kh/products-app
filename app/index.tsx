import { ThunkDispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingError } from '../src/components/LoadingError';
import { Skeleton } from '../src/components/Skeleton';
import { StyledView } from '../src/components/Themed';
import { fetchProducts } from '../src/logic/slices/productsSlice';
import { RootState } from '../src/logic/store';
import { ProductsList } from '../src/screens/products/ProductsList';

export default function Products() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const getProductsList = () => dispatch(fetchProducts())

  //fetching products from the api
  useEffect(() => {
    getProductsList()
  }, [dispatch])


  const products = useSelector((state: RootState) => state.content.products)
  const isLoading = useSelector((state: RootState) => state.content.isLoading)
  const error = useSelector((state: RootState) => state.content.error)
  if (isLoading) {
    return <StyledView style={{ height: '100%' }}><Skeleton /></StyledView>
  }

  if (error) {
    return <LoadingError reloadFunction={getProductsList} />
  }
  return (
    <StyledView style={styles.container}>
      <ProductsList products={products} />
    </StyledView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },
});
