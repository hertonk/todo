import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#0D0D0D'
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        flex: 4,
        backgroundColor: '#1A1A1A'
    },
    form: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: -25
    },
    input: {
        backgroundColor: '#262626',
        borderRadius: 5,
        padding: 16,
        flex: 1,
        color: '#FFFFFF'
    },
    button: {
        width: 52,
        height: 52,
        backgroundColor: '#1E6F9F',
        color: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginLeft: 10
    },
    stats: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 25,
        marginRight: 25,
    },
    stats1: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    stats2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    textCreates: {
        color: '#4EA8DE',
        fontSize: 16,
        fontWeight: 'bold'
    },
    number: {
        marginLeft: 10,
        backgroundColor: '#333333',
        borderRadius: 10,
        padding: 5,
        paddingLeft: 8,
        paddingRight: 8,
        textAlign: 'center'
    },
    textDones: {
        color: '#8184F9',
        fontSize: 16,
        fontWeight: 'bold'
    },
    items: {
        flex: 1,
        marginTop: 30,
        marginLeft: 25,
        marginRight: 25,
    },
    textNumber: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    textNoItemsBold: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 20
    },
    textNoItems: {
        color: '#808080',
        fontSize: 16,
        marginTop: 5
    },
    noItems: {
        alignItems: 'center',
        borderTopColor: '#424242',
        borderTopWidth: 1,
        paddingTop: 30
    }
});