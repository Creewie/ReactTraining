import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PolishKing from './PolishKings';
import KingsList from './KingsList';

export default function App() {
  let kings = [
    {id:1, name:"Bolesław Chrobry", reignDate:"992-1025"},
    {id:2, name:"Mieszko II Lambert", reignDate:"1025-1031"},
    {id:3, name:"Bolesław Smiały", reignDate:"1058-1079"},
    {id:4, name:"Przemysław II", reignDate:"1295-1306"},
  ]

  return (
    <View style={styles.container}>
      <PolishKing name="Bolesław Chrobry" reignDate="992-1025 Bolek"/>
      <PolishKing name="Przemysław II" reignDate="1295-1296 Przemuś"/>
      <KingsList kingsList={kings}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
