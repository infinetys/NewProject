import React from 'react';
import {Text, View, Button} from 'react-native';

export default class MainScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>หน้า Main</Text>
        <Button
          title="ไปหน้า SettingsScreen"
          onPress={() => navigate('SettingsScreen')}
        />
      </View>
    );
  }
}
