import { View, Text, SafeAreaView, StatusBar, StyleSheet, Image, FlatList} from 'react-native';
import { ProductItem } from './components/product-item';

import { Product } from './types/Product';

import {list} from './data';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('./assets/hero.jpg')}
        resizeMode='cover'
        style={styles.hero}
       />
       <View style={styles.area}>
        <Text style={styles.h1}>Produtos</Text>
        <FlatList 
          data={list}
          renderItem={({item}:{item:Product}) => (
            <ProductItem key={item.id} product={item} />
          )}
          keyExtractor={item => item.id.toString()}
        />
       </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container:{
    marginTop:StatusBar.currentHeight || 0
  },
  hero: {
    width: '100%',
    height:120
  },
  area: {
    padding: 10
  },
  h1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  }
});