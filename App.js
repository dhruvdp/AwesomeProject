import React from 'react';
import { StyleSheet, Text, View , Image, TextInput, Button, Alert, ScrollView} from 'react-native';
import ScrollToTop from 'react-native-scroll-to-top';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//         <Text>YOLO1</Text>
//       </View>
//     );
//   }
// }

class Bananas extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

// export default class LotsOfGreetings extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         {/* <Greeting name='Dhruv' />
//         <Greeting name='Sunday' />
//         <Greeting name='TV' />
//         <Bananas></Bananas>
//         <Blink text="YOLO"></Blink> */}
//         <View style={{backgroundColor: 'orange', height: 150, width: 150}} />
//         <View style={{backgroundColor: '#f2f2f2', height: 150, width: 150}} />
//         <View style={{backgroundColor: 'green', height: 150, width: 150}} />
//       </View>
//     );
//   }
// }

class Greeting extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class PizzaTranslator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  Dhruv() {
    Alert.alert('You tapped the button, bitch!')
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    let dp = {
      uri: '/diwali.png'
    }
    return (
      <ScrollView style={{marginBottom:60}}>
      <View style={{alignItems:'center', flexDirection:'column'}}>
           <Button
               onPress={this.Dhruv}
               title="Scroll me plz"
               color="#841584"
             />
           <Image source={require('/Applications/AMPPS/www/AwesomeProject/diwali.jpg')} style={styles.picImage}/>
      </View>
      <View style={{alignItems:'center', flexDirection:'column'}}>
           <Button
               onPress={this.Dhruv}
               title="Scroll me plz"
               color="#841584"
             />
           <Image source={require('/Applications/AMPPS/www/AwesomeProject/1.jpg')} style={styles.picImage}/>
      </View>
      <View style={{alignItems:'center', flexDirection:'column'}}>
           <Button
               onPress={this.Dhruv}
               title="Scroll me plz"
               color="#841584"
             />
           <Image source={require('/Applications/AMPPS/www/AwesomeProject/2.jpg')} style={styles.picImage}/>
      </View>
      <View style={{alignItems:'center', flexDirection:'column'}}>
           <Button
               onPress={this.Dhruv}
               title="Scroll me plz"
               color="#841584"
             />
           <Image source={require('/Applications/AMPPS/www/AwesomeProject/3.jpg')} style={styles.picImage}/>
      </View>
      <View style={{alignItems:'center', flexDirection:'column'}}>
           <Button
               onPress={this.Dhruv}
               title="Scroll me plz"
               color="#841584"
             />
           <Image source={require('/Applications/AMPPS/www/AwesomeProject/4.jpg')} style={styles.picImage}/>
      </View>
      <View style={{alignItems:'center', flexDirection:'column'}}>
           <Button
               onPress={this.Dhruv}
               title="Scroll me plz"
               color="#841584"
             />
           <Image ssource={require('/Applications/AMPPS/www/AwesomeProject/5.jpg')} style={styles.picImage}/>
      </View>
      <View style={{alignItems:'center', flexDirection:'column'}}>
           <Button
               onPress={this.Dhruv}
               title="Scroll me plz"
               color="#841584"
             />
           <Image source={require('/Applications/AMPPS/www/AwesomeProject/6.jpg')} style={styles.picImage}/>
      </View>
      <View style={{alignItems:'center', flexDirection:'column'}}>
           <Button
               onPress={this.Dhruv}
               title="Scroll me plz"
               color="#841584"
             />
           <Image source={require('/Applications/AMPPS/www/AwesomeProject/7.jpg')} style={styles.picImage}/>
      </View>
      <View style={{alignItems:'center', flexDirection:'column'}}>
           <Button
               onPress={this.Dhruv}
               title="Scroll me plz"
               color="#841584"
             />
           <Image source={require('/Applications/AMPPS/www/AwesomeProject/8.jpg')} style={styles.picImage}/>
      </View>
      <View style={{alignItems:'center', flexDirection:'column'}}>
           <Button
               onPress={this.Dhruv}
               title="Scroll me plz"
               color="#841584"
             />
           <Image source={require('/Applications/AMPPS/www/AwesomeProject/9.jpg')} style={styles.picImage}/>
      </View>
      <View style={{alignItems:'center', flexDirection:'column'}}>
           <Button
               onPress={this.Dhruv}
               title="Scroll me plz"
               color="#841584"
             />
           <Image source={require('/Applications/AMPPS/www/AwesomeProject/10.jpg')} style={styles.picImage}/>
      </View>
      <View style={{alignItems:'center', flexDirection:'column'}}>
           <Button
               onPress={this.Dhruv}
               title="Scroll me plz"
               color="#841584"
             />
           <Image source={require('/Applications/AMPPS/www/AwesomeProject/11.jpg')} style={styles.picImage}/>
      </View>
      <View style={{alignItems:'center', flexDirection:'column'}}>
           <Button
               onPress={this.Dhruv}
               title="Scroll me plz"
               color="#841584"
             />
           <Image source={require('/Applications/AMPPS/www/AwesomeProject/12.jpg')} style={styles.picImage}/>
      </View>
    </ScrollView>
    );
  }
}

export default class Dhruv extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.sectionHeader}>My Instagram</Text>
        <PizzaTranslator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    margin: 20
  },
  picImage: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeader: {
    borderLeftColor: 'white',
    borderRightColor:'white',
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    paddingTop: 20,
    paddingBottom: 2,
    fontSize: 20,
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
    textAlign: 'center'
  }
});
