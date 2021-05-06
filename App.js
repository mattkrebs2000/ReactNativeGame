import React, {PureComponent} from 'react';
import {StatusBar, View, Text, StyleSheet, LogBox, Image, YellowBox} from 'react-native';
import Systems from './src/systems';
import Entities from './src/entities';
import {GameEngine} from 'react-native-game-engine';
import FastImage from 'react-native-fast-image';
import GameOver from './src/components/GameOver';
import {height, width} from './src/utils/styleSheet';

const backgroundImage = require('./src/assets/nature.jpg');

LogBox.ignoreLogs(['Animated: `useNativeDriver`']);


export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      running: true,
      score: 0,
    };
    this.gameEngine = null;
    LogBox.ignoreAllLogs(true)
  }

  onEvent = e => {
    if (e.type === 'gameOver') {
      this.setState({
        running: true,
      });
    } else if (e.type === 'score') {
      this.setState(prevState => {
        return {score: prevState.score + 1};
      });
    }
  };

  restart = () => {
    this.setState({running: true, score: 0});
    this.gameEngine.swap(Entities());
  };

  render() {
    const {state} = this;
    return (
      <View style={styles.container}>
        <Image style={styles.imageBackground} source={backgroundImage} />
        <GameEngine
          ref={ref => {
            this.gameEngine = ref;
          }}
          style={styles.gameContainer}
          systems={Systems}
          onEvent={this.onEvent}
          entities={Entities()}
          running={state.running}>
          <StatusBar hidden={true} />
        </GameEngine>
        {state.running ? (
          <Text style={styles.score}>{state.score}</Text>
        ) : (
          <GameOver score={state.score} restart={this.restart} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  gameContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  score: {
    color: '#ffffff',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 100,
   
  },
  imageBackground: {
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  gameOverContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});





// import React, {useState} from 'react';
// import {StatusBar, StyleSheet, View,  LogBox, Dimensions, ImageBackground} from 'react-native';
// import Entities from './src/entities';
// import {GameEngine} from 'react-native-game-engine';
// import Systems from './src/systems';


// LogBox.ignoreAllLogs(true)

// const image = {
//   uri:
//     "https://www.html.am/templates/downloads/bryantsmith/nightbeach/images/main.jpg",
// };




// const App = () => {

//   const [running, setRunning] = useState(true);
//   const [gameEngine, setGameEngine] = useState(null);


//   const onEvent = e => 
//  {
//   if (e.type === 'gameOver') {
//    Alert.alert('Game Over');
//    setRunning(false);
//   } 
//  };


 
//     return (
//       <View style={styles.container}>
//         <GameEngine
//           ref={ref => {
//             this.gameEngine = ref;
//           }}
//           style={styles.gameContainer}
//           onEvent={onEvent()}
//           entities={Entities()}
//           running={running}
//           systems={Systems}
//           >
//           <StatusBar hidden={true} />
        
          
//           </GameEngine>

        

//       </View>
//     );
//   }

//   export default App; 

//   const win = Dimensions.get('window');

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
//   gameContainer: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//   },
//   container2: {
//     position: 'relative',
//     flex: 1,
//   },
//   fixed: {
//     position: 'absolute',
//     top: 800,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     flex: 1,
//     flexDirection:"column",
//     backgroundColor:"red",
//   },
//   image: {
//       flex: 1,
//       width: win.width,
//       height: win.height,
//   },


// });