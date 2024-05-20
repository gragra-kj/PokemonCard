import { StyleSheet, View ,SafeAreaView,Platform,ScrollView} from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {
  const charmanderData={
    image:require("./assets/charmander.jpg"),
    name:"Charmander",
    type:"fire",
    hp:39,
    moves:["Scratch","Ember","Growl","Leer"],
    weaknesses:["Water","Rock"]

  }
  const squirtleData={
    image:require("./assets/squirtle.png"),
    name:"Squirtle",
    type:"Water",
    hp:44,
    moves:["Tackle","Water Gun","Tail Whip","Withdraw"],
    weaknesses:["Electric","Grass"]

  }
  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasur.jpeg"), 
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };
  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.jpg"),
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };




  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...pikachuData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop:Platform.OS ==='android' ? 25:0
  },
});
