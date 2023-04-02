import React from 'react';
import {View} from 'react-native';





export const notification_livraison = () => {
  return (
    <View style={styles.container}>
           
            <Text style={styles.titleText}> {navigation.getParam('title')}</Text>
            <Text style={styles.titleText}> {navigation.getParam('body')}</Text>    
         
        </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  accordContainer: {
    paddingBottom: 4
  },
  accordHeader: {
    padding: 12,
    backgroundColor: '#666',
    color: '#eee',
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  accordTitle: {
    fontSize: 20,
  },
  accordBody: {
    padding: 12
  },
  textSmall: {
    fontSize: 16
  },
  seperator: {
    height: 12
  }
});
