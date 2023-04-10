import React from 'react'
import {Text, View, StyleSheet} from 'react-native';

export default function Parrain() {
  return (
    <View style={styles.container}>
    <Text>
    L’application Allô Group
    </Text>

    <Text>
    Parrainer un nouvel utilisateur
    </Text>

    <Text>
    Pour parrainer un nouvel utilisateur, prière 
            entrer dans l’application et suivre les différentes 
            étapes ci-dessous :
    </Text>

    <Text>
    1- Entrez dans le Menu de l’application 
            situé au niveau des paramètres.
    </Text>

    <Text>
    2- Appuyez sur le boutton de parrainage 
            pour générer un code 
    </Text>  
    
    <Text>
    3- Partagez votre code de parrainage à votre 
            ami qui vient juste de créer son compte Allô Group
    </Text> 
    
    <Text>
    4- Votre ami saisit le code chez lui
    </Text>  

    <Text>
    Attention : 
    </Text>  

    <Text>
    La limite du parrainage est fixée à 15 
                    personnes, passé ce nombre, votre code 
                    devient obsolète
    </Text>  

    <Text>
    Bénéficier un code promo généré en 
                    parrainant un(e) ami(e) qui effectue une 
                    course avec l’application Allô Group dans 
                    un délai de 30 jours.
    </Text>  

    <Text>
    </Text>  

    <Text>
    </Text>  

</View >
  )
}


const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    })