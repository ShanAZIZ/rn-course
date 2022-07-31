import {useState} from 'react'
import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {purpleBase, purpleBg, white} from "./constants/colors";

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');

  const [goalList, addGoalToList] = useState<string[]>([]);

  function addGoalHandler(){
    addGoalToList((currentGoalList) => [...currentGoalList, enteredGoalText])
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
                   onChangeText={(enteredText) => setEnteredGoalText(enteredText)}
                   placeholder="Votre objectif"/>
        <Button title="Ajouter" onPress={addGoalHandler}/>
      </View>
      <View style={styles.objectifsContainer}>
        <FlatList
          data={goalList}
          renderItem={ (itemData) => {
            return (
              <View style={styles.objectifItem}>
                <Text>{ itemData.item }</Text>
              </View>
            )
          }}
          alwaysBounceVertical={false}>
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: purpleBg,
    flex: 1,
    padding: 50,
  },
  inputContainer: {
    alignItems: "center",
    color: white,
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingTop: 20
  },
  objectifItem: {
    backgroundColor: purpleBase,
    borderRadius: 6,
    color: white,
    margin: 8,
    padding: 5,
    width: '100%'
  },
  objectifsContainer: {
    flex: 5,
    flexDirection: "column",
    width: '100%'
  },
  textInput: {
    borderColor: white,
    borderWidth: 1,
    color: white,
    marginRight: 8,
    padding: 5,
    width: '80%',
  },

});
