import React, { useState } from 'react';
import {Text, View, Image, Dimensions,
    StyleSheet, Button,} from 'react-native';
import {AntDesign} from '@expo/vector-icons';


const ProductCard = ({
    image,
    category,
    title,
    price,
    description,
}) => {
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        setCount(count + 1);
      };
    
      const handleRemove = () => {
        if (count > 0) {
            setCount(count - 1);
        }
      };
    const onPressFunctionCart = () => {
        warn.console('Ajout au panier');
    }
  return (
    <View style={[styles.container, styles.shadowProp]}>
        <View style = {{marginBottom: 25
            }}>
            {/* <Text style={{fontWeight:'bold', fontSize:18}}>
                        Carte d'identité du produit
            </Text> */}
            <Image
                source={{ uri : image}}
                  style={{
                    height: 300,
                    width:'100%',
                          }}
            />
            <Text>
                <Text style= {{color:'orange', fontSize:25}}>{category}</Text>
            </Text>  

            <Text>             
                <Text style={{ 
                    fontSize:15,
                    fontWeight:'bold',
                    }}>
                Restaurant : </Text>
                <Text>{title}</Text>
            </Text>

            <View
                style={{
                flexDirection: 'row',
                height: 50,
                padding: 5,
            }}>
                <View style={{flex: 0.2}}>
                    <Text>Unite: {price} F</Text>
                </View>

                <View style={{flex: 0.2}}>
                
                    <AntDesign
                        name="pluscircleo"
                        size={15}
                        onPress={handleAdd}/>
                </View>
                <View style={{flex: 0.2}}>
                    <Text>Nbres : {count}</Text>
                </View>    
                <View style={{flex: 0.2}}>
                    <AntDesign
                        name="minuscircleo"
                        size={15}
                        onPress={handleRemove}
                    />
                </View>

                <View style={{flex:0.2}}>
                    <Text>Somme : {price * count} F</Text>
                </View>
            </View>

            <View style={{marginBottom:15}}>
                <Text style={{ 
                    fontSize:15,
                    fontWeight:'bold',
                    }}>
                Description</Text>
                <Text numberOfLines={5}>{description}</Text>
            </View>

            <Button
                onPress={onPressFunctionCart}
                title="Ajoutez au panier !"
                color="#ff6d00"
                />
            </View>    
    </View>
   
  )
}

const styles = StyleSheet.create({
    container: {
        //  flex:1,
        //  backgroundColor: '#fff',
        //  alignItems: 'center',
        //  justifyContent: 'center',
        backgroundColor: '#ccc',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        width: '100%',
        marginVertical: 10,  
        
       },
       shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
});

export default ProductCard;