import * as React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import Scooteur from '../../../../../assets/images/scooteur.gif';
import CustomButton from '../../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const AttenteClient = () => {
    const { height } = useWindowDimensions();

    const navigation = useNavigation();

    const onPressRetour = () => {
        navigation.navigate('Services');
    };


    return (
        <View style={styles.root}>
            <Image
                source={Scooteur}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode='contain'
            />

            <Text style={styles.title}>
                Notre livreur le plus proche vous contactera dans quelques instants...
            </Text>
            <Text>
                Une notification vous sera envoyée dans les plus brefs délais.
            </Text>
            <Text>
                Slogan!!!
            </Text>


            <CustomButton
                text='Retour'
                onPress={onPressRetour}
                bgColor='#ff6d00'
                fgColor='white'
            />

        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        width: '100%',
        height: '100%',
        

    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 10,
    },


});
export default AttenteClient; 
