import {useState} from 'react'
import { FlatList, StyleSheet, View} from 'react-native';
import GoalItem from "./components/GoalItem";
import { white } from "./constants/colors";
import GoalInput from "./components/GoalInput";

export default function App() {


  const [goalList, setGoalList] = useState<string[]>([]);

  function addGoalHandler(enteredGoalText: string){
    setGoalList((currentGoalList) => {
      if(currentGoalList.includes(enteredGoalText)){
        return currentGoalList;
      }
      if(enteredGoalText.length === 0) {
        return currentGoalList;
      }
      return [...currentGoalList, enteredGoalText]
    })
  }

  function deleteGoalHandler(text: string) {
    setGoalList((currentGoalList) => {
      return currentGoalList.filter((goal) => goal !== text);
    })
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler}></GoalInput>
      <View style={styles.objectifsContainer}>
        <FlatList
          data={goalList}
          renderItem={ (itemData) => {
            return <GoalItem onDeleteItem={deleteGoalHandler} text={itemData.item}></GoalItem>;
          }}
          alwaysBounceVertical={false}>
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flex: 1,
    padding: 50,
  },


  objectifsContainer: {
    flex: 5,
    flexDirection: "column",
    width: '100%'
  },


});
