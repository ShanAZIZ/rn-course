import {Button, StyleSheet, TextInput, View} from "react-native";
import {purpleBg, white} from "../constants/colors";
import React, {useState} from "react";

type GoalInputProp = {
  onAddGoal: (text: string) => void;
}


const GoalInput: React.FC<GoalInputProp> = ({onAddGoal}) => {

  const [enteredGoalText, setEnteredGoalText] = useState('');

  function onAddGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput}
                 onChangeText={(enteredText) => setEnteredGoalText(enteredText)}
                 value={enteredGoalText}
                 placeholder="Votre objectif"/>
      <Button title="Ajouter" onPress={onAddGoalHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    color: white,
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingTop: 20
  },
  textInput: {
    borderColor: purpleBg,
    borderWidth: 1,
    marginRight: 8,
    padding: 5,
    width: '80%',
  },
})

export default GoalInput;