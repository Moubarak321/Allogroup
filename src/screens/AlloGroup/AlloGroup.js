import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Presentation = () => {
    const navigation = useNavigation();


    const onPressApropos = () => {
        navigation.navigate('Apropos');
    };
    const onPressPourquoi = () => {
        navigation.navigate('Pourquoi');
    };
    const onPressParrain = () => {
        navigation.navigate('Parrain');
    };
    const onPressReserver = () => {
        navigation.navigate('Reserver');
    };
    const onPressTypedepaiement = () => {
        navigation.navigate('Typesdepaiement');
    };
    const onPressRetardconsiderable = () => {
        navigation.navigate('Retardconsiderable');
    };
    const onPressReceptiondecolis = () => {
        navigation.navigate('Receptiondecolis');
    };
    const onPressAutreadressedelivraison = () => {
        navigation.navigate('AutreAddresseDelivraison');
    };
    const onPressPlatsendommages = () => {
        navigation.navigate('Platsendommages');
    };
    const onPressReceptionPlatdifferent = () => {
        navigation.navigate('ReceptionPlatdifferent');
    };
    const onPressInscriptionFAQ = () => {
        navigation.navigate('InscriptionFAQ');
    }

    return (
        <ScrollView>
            <SafeAreaView>
                <View>
                    <Text>A propos de Allô Group</Text>

                    <TouchableOpacity onPress={onPressApropos}>
                        <Text> C’est quoi Allô Group ? </Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={onPressPourquoi}>

                        <Text>Pourquoi choisir Allô Group ? </Text>
                    </TouchableOpacity>


                    {/* not working */}
                    <TouchableOpacity>
                        <Text>Etes-vous assuré pendant votre course ?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPressParrain}>
                        <Text>Parrainer un nouvel utilisateur</Text>
                    </TouchableOpacity>

                    {/* <Text>L’application Allô Group </Text> */}


                    {/* not working */}
                    {/* <TouchableOpacity>
                        <Text>Retrouver mes notifications Allô Group</Text>
                    </TouchableOpacity> */}


                    <TouchableOpacity onPress={onPressReserver}>
                        <Text>Réserver la course Allô Group</Text>
                    </TouchableOpacity>

                    {/* not working */}
                    <TouchableOpacity onPress={onPressInscriptionFAQ}>
                        <Text>Comment télécharger l’application Allogroup ?</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={onPressTypedepaiement}>
                        <Text>Quels types de paiements acceptez-vous ?</Text>
                    </TouchableOpacity>



                    <TouchableOpacity onPress={onPressRetardconsiderable}>
                        <Text>Ma commande a été livré avec un retard considérable, que faire ?</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={onPressReceptiondecolis}>
                        <Text> J’ai reçu une commande de colis différente de celle que j’ai commandée, que dois-je faire ?</Text>
                    </TouchableOpacity>



                    <TouchableOpacity onPress={onPressAutreadressedelivraison}>
                        <Text>Je veux faire commander et faire livrer à une adresse différente que la mienne, que dois-je faire ?</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={onPressReceptionPlatdifferent}>
                        <Text>J’ai reçu une commande de plat différente
                            de celle que j’ai commandée, que dois-je faire ?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPressPlatsendommages}>
                        
                            <Text>Les plats sont arrivés
                                endommagés, que dois-je faire ?</Text>
                    </TouchableOpacity>
                  
                </View>
            </SafeAreaView>
        </ScrollView >


    )
}

export default Presentation;
