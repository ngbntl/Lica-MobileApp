import React, { useState, useRef } from 'react';
import { View, Text, Animated, PanResponder, Dimensions, TouchableWithoutFeedback } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const cards = [
  {
    "_id": "666e96461cca5e59f630e5b1",
    "vocabulary": "father",
    "definition": "Bố",
    "pronunciation": "fäT͟Hər",
  },
  {
    "_id": "666e96461cca5e59f630e5b1",
    "vocabulary": "father",
    "definition": "Bố",
    "pronunciation": "fäT͟Hər",
  },
];
const Card = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: pan.x }
    ]),
  onPanResponderRelease: (_, gestureState) => {
  if (Math.abs(gestureState.dx) > SCREEN_WIDTH * 0.3) {
    let newIndex = currentCardIndex + (gestureState.dx > 0 ? -1 : 1); // Change here
    // Check if the new index is within the bounds of the cards array
    if (newIndex >= 0 && newIndex < cards.length) {
      Animated.timing(pan, {
        toValue: { x: gestureState.dx > 0 ? SCREEN_WIDTH : -SCREEN_WIDTH, y: 0 }, // And here
        duration: 200,
        useNativeDriver: false
      }).start(() => {
        setCurrentCardIndex(newIndex);
        pan.setValue({ x: 0, y: 0 });
      });
    } else {
      // If the new index is out of bounds, reset the position of the card
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        friction: 5,
        useNativeDriver: false
      }).start();
    }
  } else {
    Animated.spring(pan, {
      toValue: { x: 0, y: 0 },
      friction: 5,
      useNativeDriver: false
    }).start();
  }
}
  });

  const { vocabulary, definition, pronunciation } = cards[currentCardIndex]; // Extract vocabulary and definition from the current card
  
  return (
    <Animated.View
      style={{
        transform: [{ translateX: pan.x }] // Remove the multiplication by -1
      }}
      {...panResponder.panHandlers}
    >
      <TouchableWithoutFeedback onPress={() => setIsFlipped(!isFlipped)}>
      <View className = 'bg-white items-center justify-center h-4/5 w-5/6 mt-16 ml-8'>
          <Text className='font-psemibold text-3xl'>{isFlipped ? (definition ): (vocabulary)}</Text>
          <Text className='font-regular text-xl'>{isFlipped ? (pronunciation ): ''}</Text>
         
        </View>
      
      </TouchableWithoutFeedback>
      <View className='items-center mt-4'>
      <Text>{currentCardIndex + 1} / {cards.length}</Text>
      </View>
    </Animated.View>
  );
};
export default Card;