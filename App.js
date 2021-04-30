import React, { useEffect, useState } from 'react';
import {StatusBar, StyleSheet, View, LogBox} from 'react-native';
import Entities from './src/entities';
import {GameEngine} from 'react-native-game-engine';

LogBox.ignoreAllLogs(true)

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
          running={running}>
          <StatusBar hidden={true} />
        </GameEngine>
      </View>
    );
  }

export default App; 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  gameContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

