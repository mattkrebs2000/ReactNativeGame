import { Dimensions } from 'react-native';

import Plane from '../components/Plane';
import Matter from 'matter-js';
import Floor from '../components/Floor';
import Ceiling from '../components/Ceiling';


Matter.Common.isElement = () => false; //-- Overriding this function because the original references HTMLElement

export default restart => {
  //-- Cleanup existing entities..
  if (restart) {
    Matter.Engine.clear(restart.physics.engine);
  }

  let engine = Matter.Engine.create({enableSleeping: false});
  let world = engine.world;
  world.gravity.y = 0.25;
  const boxSize = 50;

  const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;




  return {
    physics: {engine: engine, world: world},
    Plane: Plane(
      world,
      'pink',
      {x: 220, y: 400},
      {height: boxSize, width: boxSize},
    ),
    Floor: Floor(world,'white',{x: width / 2, y: height - 50},{height: 100, width: width}),
Ceiling: Ceiling(world,'white',{x: width / 2, y: 0},{height: 100, width: width}),
   
  };
};