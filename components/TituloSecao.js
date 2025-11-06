import { View, Text, StyleSheet } from 'react-native';

export default function TituloSecao({ tituloSecao }) {
    return (
        <Text style={styles.tituloSecao}>{tituloSecao}</Text>
    );
}

const styles = StyleSheet.create({
    tituloSecao: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 12,
    },
});
