import React from 'react';
import { Text, View } 

export default function Apropos() {
    return (
        <View style={styles.container}>
            <Text>
                Allô Group est la solution à vos besoins. Elle est l’application qui de référence de l’Afrique.
            </Text>
            <Text>
                Elle vous permet :
            </Text>
            <Text>
                -	De vous déplacer en commandant des zémidjans et des taxis ou que vous soyez et ce depuis votre téléphone
            </Text>
            <Text>
                - De faire vos courses auprès des boutiques en ligne qui vous proposent un large catalogue de produits tels que la restauration, l’épicerie, l’électroménager, etc….
            </Text>
            <Text>
                -	De proposer vos produits à votre cible clientèle
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
)}