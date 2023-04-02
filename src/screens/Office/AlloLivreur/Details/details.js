import React, { useState } from 'react';
import {
  View, Text,
  StyleSheet, TextInput,
  Button, AsyncStorage
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const details = () => {
  const navigation = useNavigation();
  const onPressTerminerLivraison = async () => {
    navigation.navigate('AttenteClient')
    // try {
    //   await AsyncStorage.multiSet([
    //     ['titre', setTitre],
    //     ['message', setMessage]]);
      
    // } catch (error) {

    // }

  };
  const [titre, setTitre] = useState('');
  const [message, setMessage] = useState('');

  return (
    <View style={styles.root}>
      <View style={styles.Titrelivraison}>
        <View style= {{alignItems:'center'}}> 
        <Text style={{color:'orange'}}>Titre de la livraison</Text>
        </View>
        <TextInput
          style={{ marginBottom: 10, paddingTop: 50 }}
          value={titre}
          onChangeText={setTitre}
          placeholder="Titre de la livraison"
          required={true}
          errorMessage="Donne un titre pour rendre le tracage facile"
        />
      </View>

      <View style={styles.Titrelivraison}>
      <View style= {{alignItems:'center'}}> 
      <Text style={{color:'orange'}}>Détails de la livraison</Text>
      </View>

      <TextInput
        style={{ marginBottom: 10, height: 50 }}
        value={message}
        onChangeText={setMessage}
        multiline
        placeholder="Détails sur livraison"
        required={true}
        errorMessage="Nous vous invitons à donner ces détails 
            pour la sécurité la marchandisse"
      />
      </View>

      <Button
        title='Terminez le processus'
        onPress={onPressTerminerLivraison} />
    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 10,
  },
  Titrelivraison:{
    marginTop:50,
    
  }
});
export default details;