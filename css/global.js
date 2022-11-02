import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultado: {
        width: '100%',
        height: 300,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: '#2e3738'
    },
    container_botoes: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    botao: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        minWidth: 80,
        minHeight: 96
    },
    texto_botao: {
        color: "#5b5b5b",
        fontSize: 25
    },
    texto_antigo: {
        fontSize: 22,
        marginBottom: 0,
        marginRight: 10,
        alignSelf: 'flex-end',
        color: '#fff'
    },
    resultado_calc: {
        fontWeight: '100',
        fontSize: 80,
        margin: 10,
        color: '#fff',
        alignSelf: 'flex-end',
    }
})

export default styles