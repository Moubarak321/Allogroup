import * as React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/navigation';
import NavigationTabFood from './src/screens/Office/AlloFood/NavigationTabFood';
import Amplify from "@aws-amplify/core";
import config from './src/aws-exports';
import interfaceClient from './src/screens/Office/AlloLivreur/Interface/InterfaceClient'

Amplify.configure(config);

const App = () => {
 
	return (
    <SafeAreaView style={styles.root}>
			<Navigation />
			{/* <NavigationTabFood /> */}
      {/* <interfaceClient/> */}
    </SafeAreaView>
		);

}


const styles = StyleSheet.create({
  root : {
    flex:1,
    backgroundColor : '#F9F8FC',
  },
});

export default App; 



// g$SQXO*MFAPl5cB09r