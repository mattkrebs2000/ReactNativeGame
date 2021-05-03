// import React, { useEffect, useState } from 'react';
// import { StyleSheet, View, LogBox, ImageBackground, Dimensions} from 'react-native';
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


 

//     return (
  
//       <View style={styles.container}>
//         <GameEngine
//           ref={ref => {
//             this.gameEngine = ref;
//           }}
//           style={styles.gameContainer}
//           entities={Entities()}
//           running={running}
//           systems={Systems}
//           >
         
    



//         </GameEngine>
//         <View style={[styles.container2]}>
//         <View style={[styles.fixed]}>
//           <ImageBackground source={image} style={styles.image} resizeMode={'stretch'} ></ImageBackground>
//         </View>
//       </View>
//       </View>
//     );
//   }

// export default App; 


// const win = Dimensions.get('window');

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "green",
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

import React, {useState} from 'react';
import {StatusBar, StyleSheet, View,  LogBox, Dimensions, ImageBackground} from 'react-native';
import Entities from './src/entities';
import {GameEngine} from 'react-native-game-engine';
import Systems from './src/systems';


LogBox.ignoreAllLogs(true)

const image = {
  uri:
    "https://www.html.am/templates/downloads/bryantsmith/nightbeach/images/main.jpg",
};

const App = () => {

  const [running, setRunning] = useState(true);
  const [gameEngine, setGameEngine] = useState(null);
 
    return (
      <View style={styles.container}>
        <GameEngine
          ref={ref => {
            this.gameEngine = ref;
          }}
          style={styles.gameContainer}
          entities={Entities()}
          running={running}
          systems={Systems}
          >
          <StatusBar hidden={true} />
        
          
          </GameEngine>

        

      </View>
    );
  }

  export default App; 

  const win = Dimensions.get('window');

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
  container2: {
    position: 'relative',
    flex: 1,
  },
  fixed: {
    position: 'absolute',
    top: 800,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    flexDirection:"column",
    backgroundColor:"red",
  },
  image: {
      flex: 1,
      width: win.width,
      height: win.height,
  },


});