import React, { useState, useEffect } from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from  '../screens/NewPasswordScreen';
import Setting from '../screens/Setting/Setting';

import AlloGroup from '../screens/AlloGroup/AlloGroup';
import Food from '../screens/Office/AlloFood/Food';
import Office from '../screens/Office/Office';
import InscriptionFastGerant from '../screens/Office/AlloFood/Gerant/inscriptionFastGerant';
import InscriptionCardFood from '../screens/Office/AlloFood/Gerant/inscriptionProduit';
import NavigationTab from './navigation';
import DebutLivraison from '../screens/Office/AlloLivreur/DebutLivraison';
import DetailLivraison from '../screens/Office/AlloLivreur/Details';
// import interfaceClient from '../screens/Office/AlloLivreur/Interface';
import InterfaceClient from '../screens/Office/AlloLivreur/Interface/InterfaceClient';
import SelectionLieuDepart from '../screens/Office/AlloLivreur/SelectionLieuDepart';
import SelectionLieuRetrait from '../screens/Office/AlloLivreur/SelectionLieuRetrait';
import inscriptionLivreur from '../screens/Office/AlloLivreur/Backlivreur/inscriptionLivreur';
import FinLivraison from '../screens/Office/AlloLivreur/FinLivraison';
import PresentationCoursier from '../screens/Office/AlloLivreur/PresentationCoursier';
import navigationTabFood from '../screens/Office/AlloFood/NavigationTabFood';
import AttenteClient from '../screens/Office/AlloLivreur/attenteClient/attenteClient';
import { Auth, Hub } from '@aws-amplify/core';


import Apropos from '../screens/aide/apropos';
import AutreAddresseDelivraison from '../screens/aide/autreadedressedelivraison';
import Autredesti from '../screens/aide/autredesti';
import InscriptionFAQ from '../screens/aide/inscription';
import Paiements from '../screens/aide/paiements';
import Parrain from '../screens/aide/parrain';
import Platsendommages from '../screens/aide/platsendommages';
import Pourquoi from '../screens/aide/pourquoi';
import Receptiondecolis from '../screens/aide/receptiondecolis';
import Receptionplatdifferent from '../screens/aide/receptionplatdifferent';
import Reserver from '../screens/aide/reserver';
import Resolutionretard from '../screens/aide/resolutionretard';
import Retardconsiderable from '../screens/aide/retardconsiderable';
import Typesdepaiement from '../screens/aide/typesdepaiement';


const Stack = createNativeStackNavigator();

const Navigation = () => {

	const [user, setUser] = useState(undefined);


	const checkUser = async () => {
		try {
			const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
			setUser(authUser);
		} catch (e) {
			setUser(null);
		}	
	};
	useEffect(() => {
		checkUser();
	}, []);

	useEffect(() => {
		const listener = data => {
			if (data.payload.event === 'signIn' || data.payload.event == 'signOut')
			{
				checkUser();
			}
		};
		Hub.listen('auth', listener);
		return () => Hub.remove('auth', listener);
	}, []);

	if (user === undefined) {
		return (
			<View style = {{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
				<ActivityIndicator/>
			</View>
		)
	}
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Bienvenue'>
			{/* <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='NavigationTab'> */}
			
				
				{ user ? (
					
					<Stack.Screen name='Bienvenue' component={Home}/>
					
				) : (
				<>
					<Stack.Screen name='Services' component={Office}/>
					<Stack.Screen name='Bienvenue' component={Home}/>
					<Stack.Screen name='Detail' component={DetailLivraison}/>
					<Stack.Screen name='inscriptionLivreur' component={inscriptionLivreur}/>
					<Stack.Screen name='Setting' component={Setting}/>
					
					<Stack.Screen name='Connexion' component={SignInScreen}/>	
					<Stack.Screen name='NavigationTab' component={NavigationTab}/>
					<Stack.Screen name='navigationTabFood'  screenOptions={{headerShown:false}} component={navigationTabFood}/>
					{/* <Stack.Screen name='InscriptionGerantFood' component={inscriptionGerantFood}/> */}
					<Stack.Screen name='DebutLivraison' component={DebutLivraison}/>
					<Stack.Screen name='InscriptionCardFood' component={InscriptionCardFood}/>
	
					<Stack.Screen name='InterfaceClient' component={InterfaceClient}/>
					<Stack.Screen name='AlloGroup' component={AlloGroup}/>
					<Stack.Screen name='Food' component={Food}/>
					
					<Stack.Screen name='livraison' component={DebutLivraison}/>		
					<Stack.Screen name='Inscription' component={SignUpScreen}/>
					<Stack.Screen name='Confirmation' component={ConfirmEmailScreen}/>
					<Stack.Screen name='Mot de passe oublie' component={ForgotPasswordScreen}/>
					<Stack.Screen name='Nouveau mot de passe' component={NewPasswordScreen}/>
					<Stack.Screen name='SelectionLieuDepart' component={SelectionLieuDepart}/>
					<Stack.Screen name='SelectionLieuRetrait' component={SelectionLieuRetrait}/>
					<Stack.Screen name='Fin de Livraison' component={FinLivraison}/>
					<Stack.Screen name='PresentationCoursier' component={PresentationCoursier}/>
					<Stack.Screen name='AttenteClient' component={AttenteClient}/>
					<Stack.Screen name='InscriptionFastGerant' component={InscriptionFastGerant}/>

					<Stack.Screen name='AutreAddresseDelivraison' component={AutreAddresseDelivraison}/> 
					<Stack.Screen name='Apropos' component={Apropos}/> 
					<Stack.Screen name='Autredesti' component={Autredesti}/> 
					<Stack.Screen name='Paiements' component={Paiements}/> 
					<Stack.Screen name='InscriptionFAQ' component={InscriptionFAQ}/> 
					<Stack.Screen name='Platsendommages' component={Platsendommages}/> 
					<Stack.Screen name='Pourquoi' component={Pourquoi}/>
					<Stack.Screen name='Receptiondecolis' component={Receptiondecolis}/> 
					<Stack.Screen name='Receptionplatdifferent' component={Receptionplatdifferent}/> 
					<Stack.Screen name='Reserver' component={Reserver}/> 
					<Stack.Screen name='Typesdepaiement' component={Typesdepaiement}/> 
					<Stack.Screen name='Retardconsiderable' component={Retardconsiderable}/> 
					<Stack.Screen name='Parrain' component={Parrain}/> 
					<Stack.Screen name='Resolutionretard' component={Resolutionretard}/>
				</>
				)}
				
				

			</Stack.Navigator>		


		</NavigationContainer>

	
);
}

export default Navigation;