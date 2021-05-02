import React, { useEffect, useState } from 'react';
import { StyleSheet, View, LogBox, ImageBackground, Dimensions} from 'react-native';
import Entities from './src/entities';
import {GameEngine} from 'react-native-game-engine';
import Systems from './src/systems';

LogBox.ignoreAllLogs(true)

const image = {
  uri:
    "",
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
         
    



        </GameEngine>

    

      </View>
    );
  }

export default App; 


const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "green",
  },
  gameContainer: {
    flex: .8,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container2: {
    position: 'relative',
    flex: .2,
  },
  fixed: {
    position: 'absolute',
    top: 500,
    left: 0,
    right: 0,
    bottom: 0,
    flex: .1,
    flexDirection:"column",
    backgroundColor:"red",
  },
  image: {
   
      width: win.width,
      height: win.height,
  },

});

