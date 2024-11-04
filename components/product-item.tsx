import { View, Text, Image, StyleSheet, Button} from 'react-native';

import { Product } from '../types/Product';

type Props = {
  product: Product
}


export const ProductItem = (props:Props) => {
  return (
    <View style={styles.container}>
      <Image 
        source={{uri: props.product.image}}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{props.product.name}</Text>
        <Text style={styles.price}>R$ {props.product.price.toFixed(2)}</Text>
        <Button 
          title="Comprar"
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    marginButtom: 15
  },
  image:{
    width:100,
    height:100
  },
  info:{
    flex:1,
    padding:10,
    marginBottom:10
  },
  name:{
    fontSize: 15
  },
  price:{
    fontSize:18,
    fontWeight:'bold',
    marginButtom: 10
  }
});