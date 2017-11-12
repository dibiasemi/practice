
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  // import components you're going to use
  TextInput,
  // don't want keyboard overlapping text inputs
  KeyboardAvoidingView,
  // for buttons
  TouchableOpacity,
  // for storing user data (in our case hopefully URLs)
  AsyncStorage,
} from 'react-native';
import { StackNavigator } from 'react-navigation'

export default class Login extends Component<{}> {
  // start by constructing constructor for login component
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    }
  }
// check if the user has already logged in previously.
  componentDidMount() {
    this._loadInitialState().done;
  }

// adding username to async storage
  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user');
    if (value !== null) {
      this.props.navigation.navigate('Profile');
    }
  }

  render() {
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
          <View style={styles.container}>
          <Image
            source={require('../images/panda.jpg')} style={styles.backgroundImage} />
              <Text style={styles.header}>- LOGIN -</Text>
              <TextInput
                style={styles.textInput} placeholder='url' onChangeText={ (url) => this.setState({url}) }
              />

              <TouchableOpacity
                style={styles.button}
                onPress={this.login}>
                <Text>Submit</Text>
                </TouchableOpacity>


          </View>
        </KeyboardAvoidingView>
    );
  }

  login = () => {
      // alert('test');
      // use react fetch method to send username and password to backend
      // getting and posting data to the route 'users'

      // submit request to server, process request, create record in the database and have it show up on our front end
      fetch('https://desolate-oasis-97513.herokuapp.com/scrollios/1/articles', {
        method: 'POST',
        headers: {
          'Accept' : 'application/json',
          'Content-Type': 'application/json',
        },
        // this sends values of states which we declared above
        body: JSON.stringify({
          url: this.state.url,
        })
      })

      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      })
      .done();
  }
}

const styles = StyleSheet.create({
   backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#565656',
    paddingLeft: 40,
    paddingRight: 40,
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: '#fff',
    fontWeight: 'bold',
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#99321b',
    padding: 20,
    alignItems: 'center',
  }
});




