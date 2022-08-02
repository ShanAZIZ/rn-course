import {StyleSheet, Text, View} from "react-native";
import {purpleBase, white} from "../constants/colors";
import React from "react";

type GoalItemProps = {
  text: string;
}

const GoalItem: React.FC<GoalItemProps> = ({ text }) => {
  return (
    <View style={styles.GoalItem}>
      <Text  style={styles.GoalText}>{ text }</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  GoalItem: {
    backgroundColor: purpleBase,
    borderRadius: 6,
    margin: 8,
    padding: 5,
    width: '100%'
  },
  GoalText: {
    color: white,
  }
})

export default GoalItem;
