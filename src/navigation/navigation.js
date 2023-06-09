
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Office from '../screens/Office/Office';
import Setting from '../screens/Setting/Setting';
import Historique from '../screens/Historique/Historique';
import Food from '../screens/Office/AlloFood/Food';
import Home from '../screens/Home';
import AlloGroup from '../screens/AlloGroup/AlloGroup';
import DetailLivraison from '../screens/Office/AlloLivreur/Details';
import InterfaceClient from '../screens/Office/AlloLivreur/Interface/InterfaceClient';
import DebutLivraison from '../screens/Office/AlloLivreur/DebutLivraison/DebutLivraison';
import inscriptionLivreur from '../screens/Office/AlloLivreur/Backlivreur/inscriptionLivreur';
import navigationTabFood from '../screens/Office/AlloFood/NavigationTabFood';
import SelectionLieuDepart from '../screens/Office/AlloLivreur/SelectionLieuDepart';
import SelectionLieuRetrait from '../screens/Office/AlloLivreur/SelectionLieuRetrait';
import { createStackNavigator } from '@react-navigation/stack';
import PresentationCoursier from '../screens/Office/AlloLivreur/PresentationCoursier';
import AttenteClient from '../screens/Office/AlloLivreur/attenteClient/attenteClient';
import InscriptionFastGerant from '../screens/Office/AlloFood/Gerant/inscriptionFastGerant';

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

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function StackScreen() {
	return (
		<Stack.Navigator >
			<Stack.Screen
				options={{
					headerShown: false
				}}
				name='Services'
				component={Office}

			/>
			<Stack.Screen name='Bienvenue' component={Home} options={{
				headerShown: false
			}} />

			<Stack.Screen name='Detail' component={DetailLivraison} options={{
				headerShown: false
			}} />
			<Stack.Screen name='DebutLivraison' component={DebutLivraison} options={{
				headerShown: false
			}} />
			<Stack.Screen name='Setting' component={Setting} options={{
				headerShown: false
			}} />
			<Stack.Screen name='InterfaceClient' component={InterfaceClient} options={{
				headerShown: false
			}} />
			<Stack.Screen name='navigationTabFood' component={navigationTabFood} options={{
				headerShown: false
			}} />
			<Stack.Screen name='AlloGroup' component={AlloGroup} options={{
				headerShown: false
			}} /><Stack.Screen name='SelectionLieuDepart' component={SelectionLieuDepart} options={{
				headerShown: false
			}} />
			<Stack.Screen options={{
				headerShown: false,
			}} name='Food' component={Food} />

			<Stack.Screen options={{ headerShown: false, }} name='SelectionLieuRetrait' component={SelectionLieuRetrait} />
			<Stack.Screen options={{ headerShown: false, }} name='PresentationCoursier' component={PresentationCoursier} />
			<Stack.Screen options={{ headerShown: false, }} name='AttenteClient' component={AttenteClient} />
			<Stack.Screen options={{ headerShown: false, }} name='inscriptionLivreur' component={inscriptionLivreur} />
			<Stack.Screen options={{ headerShown: false, }} name='InscriptionFastGerant' component={InscriptionFastGerant} />



			<Stack.Screen options={{
				headerShown: false,
			}} name='Apropos' component={Apropos} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='AutreAddresseDelivraison' component={AutreAddresseDelivraison} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='Autredesti' component={Autredesti} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='InscriptionFAQ' component={InscriptionFAQ} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='Paiements' component={Paiements} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='Parrain' component={Parrain} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='Platsendommages' component={Platsendommages} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='Pourquoi' component={Pourquoi} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='Receptiondecolis' component={Receptiondecolis} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='ReceptionPlatdifferent' component={Receptionplatdifferent} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='Reserver' component={Reserver} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='Resolutionretard' component={Resolutionretard} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='Retardconsiderable' component={Retardconsiderable} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='Typesdepaiement' component={Typesdepaiement} />




		</Stack.Navigator>
	)

}






const NavigationTab = () => {

	return (
		<NavigationContainer independent={true} style={{}}>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Services') {
							iconName = focused ? 'earth-outline' : 'earth-outline';
						}
						else if (route.name === 'Paramètres') {
							iconName = 'ios-options-outline';
						}
						else if (route.name === 'Mes Activités') {
							iconName = 'construct-outline';
						}

						return <Ionicons name={iconName} size={size} color={color} />;
					},
					tabBarActiveTintColor: '#ff6d00',
					tabBarInactiveTintColor: '#07528a',
				})}>

				<Tab.Screen name='Services' component={StackScreen} />
				<Tab.Screen name='Paramètres' component={Setting} />
				<Tab.Screen name='Mes Activités' component={Historique} />


			</Tab.Navigator>
		</NavigationContainer>

	);


}

export default NavigationTab;