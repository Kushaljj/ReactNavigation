import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "react-native";

class HomeScreen extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <Text>You have (undefined) friends.</Text>
            <Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('Friends')
          }
        />
        </View>  
        );
    }    
}
export default HomeScreen;