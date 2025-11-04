import { View, Text, StyleSheet } from 'react-native';

export default function Experiencia({ cargo, empresa, periodo, descricao }) {
    return (
        <View style={styles.card}>
            <Text style={styles.cargo}>{cargo}</Text>
            <Text style={styles.empresa}>{empresa}</Text>
            <Text style={styles.periodo}>{periodo}</Text>
            <Text style={styles.descricao}>{descricao}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        width: '90%',
        elevation: 2,
        shadowCOlor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
    },
    cargo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
    },
    empresa: {
        fontSize: 16,
        color: '#555',
    },
    periodo: {
        fontSize: 14,
        color: '#777',
        marginBottom: 8,
    },
    descricao: {
        fontSize: 14,
        color: '#333',
    },
});