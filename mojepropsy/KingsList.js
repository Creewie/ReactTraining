import {Text,View} from 'react-native';

const KingsList = ({kingsList})=>{
    const {id,name,reignDate} = kingsList[0]

    return(
        <Text>Kigs List {id}{name}{reignDate}</Text>
    )
}
export default KingsList;