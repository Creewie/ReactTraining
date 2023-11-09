import {Text,View,StyleSheet} from 'react-native';
import KingsList from './KingsList';

const PolishKing = ({name,reignDate})=>{
    return(
        <View style={styles.container}>
            <Text>Polish King {name} {reignDate}</Text>
            <KingsList />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#abc111",
        alignItems: "center",
        justifyContent: "center",
    }
})

export default PolishKing;