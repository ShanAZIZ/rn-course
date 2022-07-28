import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {purpleBg, white} from "./constants/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputText} placeholder="Votre objectif"/>
        <Button title="Ajouter"/>
      </View>
      <View>
        <Text style={styles.text}>
          Liste des objectifs
        </Text>
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
    color: white,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingTop: 40
  },
  inputText: {
    borderColor: white,
    borderWidth: 1,
    color: white,
    marginRight: 8,
    width: '80%',
  },
  text: {
    color: white,
  },
});
