import {Pressable, StyleSheet, Text, View} from "react-native";
import {purpleBase, white} from "../constants/colors";
import React from "react";

type GoalItemProps = {
  text: string;
  onDeleteItem: (id: string) => void;
}

const GoalItem: React.FC<GoalItemProps> = ({text, onDeleteItem }) => {
  return (
    <Pressable
      onPress={onDeleteItem.bind(this, text)}
      style={({pressed}) => pressed && styles.PressedItem} // return pressed if falsy else styles.xxx
    >
      <View style={styles.GoalItem}>
        <Text  style={styles.GoalText}>{ text }</Text>
      </View>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  GoalItem: {
    backgroundColor: purpleBase,
    borderRadius: 6,
    margin: 8,
    padding: 5,
    width: '90%'
  },
  GoalText: {
    color: white,
  },
  PressedItem: {
    opacity: 0.5
  }
})

export default GoalItem;
