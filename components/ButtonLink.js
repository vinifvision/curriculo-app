import { TouchableOpacity, Text, Linking, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ButtonLink({ url, title, icon, corFundo }) {
    const handlePress = () => {
        Linking.openURL(url);
    };

    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: corFundo }]} onPress={handlePress}>
            {icon && <Ionicons name={icon} size={20} color="#fff" style={{ marginRight: 8 }} />}
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 120,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2e2e2eff',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
