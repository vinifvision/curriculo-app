import { View, Text, StyleSheet } from 'react-native';
import TituloSecao from './TituloSecao';

export default function Experiencia({ cargo, empresa, periodo, descricao }) {
    return (
        <View>
            <TituloSecao
                tituloSecao="Experiência"
            />

            <View style={styles.card}>
                <Text style={styles.cargo}>{cargo}</Text>
                <Text style={styles.empresa}>{empresa}</Text>
                <Text style={styles.periodo}>{periodo}</Text>
                <Text style={styles.descricao}>{descricao}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        padding: 16,
        marginBottom: 12,
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