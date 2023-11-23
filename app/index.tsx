import { StyleSheet } from 'react-native';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from '../src/components/Themed';
import { fetchProducts } from '../src/logic/slices/productsSlice';

export default function Products() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const products = useSelector((state) => state.content.products)
  const isLoading = useSelector((state) => state.content.isLoading)
  const error = useSelector((state) => state.content.error)
  if (isLoading) {
    return <Text>{'loading...'}</Text>
  }

  if (error) {
    return error
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
