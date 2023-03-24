import { gql, useQuery} from '@apollo/client'
import { View, Text, StyleSheet } from "react-native"

const GET_EVENT = gql`
    query getEvent {
        event(id: 10) {
            name,
            source,
            description
          } 
    }
`;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundcolor:"purple",
        alignItems:'center',
        justufyContent:'center',
        textDecorationColor:'white',
        fontWeight:'italic',
        textAlign:'center'
    }
})

function Loadingg() {
    const { loading, error, data} = useQuery(GET_EVENT);
    let i = 0;

    if (loading) return 'Загрузка';
    if (error) return `Ошибка ${error.message}`;

    const text = data.event.description

    return (
        <View>
            <Text style = {{fontWeight: 'bold'}}>
                Вывод информации:
            </Text>
            <Text>
                {text}
            </Text>
        </View>
    )
}

export const WelcomeScreen = () => {

    const data = useQuery(GET_EVENT);

    console.log(data);

    return <View style={styles.container}>
        <Loadingg/>
    </View>
}