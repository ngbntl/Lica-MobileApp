import React, { useState, useRef,useEffect } from 'react';
import { View, Text, Animated, PanResponder, Dimensions, TouchableWithoutFeedback } from 'react-native';
import card from '../../apis/card';
import { useLocalSearchParams } from 'expo-router';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Card = () => {
  const params = useLocalSearchParams();
  const { id } = params;
console.log(id);

  const [cards, setCard] = useState([]);
  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await card.getCardsByTopic(id);
        console.log(response);
        setCard(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCard();
  }, []);



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
    let newIndex = currentCardIndex + (gestureState.dx > 0 ? -1 : 1); 
   
    if (newIndex >= 0 && newIndex < cards.length) {
      Animated.timing(pan, {
        toValue: { x: gestureState.dx > 0 ? SCREEN_WIDTH : -SCREEN_WIDTH, y: 0 }, 
        duration: 200,
        useNativeDriver: false
      }).start(() => {
        setCurrentCardIndex(newIndex);
        pan.setValue({ x: 0, y: 0 });
      });
    } else {
     
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

  const currentCard = cards.length > 0 && currentCardIndex < cards.length ? cards[currentCardIndex] : null; 
  
  return (
    <View className='mt-10'>
    {currentCard ? (
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }],
        }}
        {...panResponder.panHandlers}
      >
        <TouchableWithoutFeedback onPress={() => setIsFlipped(!isFlipped)}>
          <View className='bg-white items-center justify-center h-4/5 w-5/6 mt-16 ml-8 p-5'>
            <Text className='font-psemibold text-4xl p-4'>{isFlipped ? currentCard.definition : currentCard.vocabulary}</Text>
            <Text className=' font-pregular text-lg'>{isFlipped ? currentCard.pronunciation : ''}</Text>

          </View>
        </TouchableWithoutFeedback>
        <Text className='left-1/2 -ml-4 mt-4'>{currentCardIndex + 1} / {cards.length}</Text>

      </Animated.View>
    ) : (
      <Text>No cards available</Text>
    )}
  </View>
  );
};
export default Card;