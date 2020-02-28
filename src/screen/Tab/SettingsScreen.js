import React from 'react';
import {Text, View, Button} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>หน้า Settings</Text>
        <Button
          title="ไปหน้า ProfileScreen"
          onPress={() => navigate('ProfileScreen')}
        />
      </View>
    );
  }
}
