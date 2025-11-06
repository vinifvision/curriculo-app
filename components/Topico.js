import { View, Text, StyleSheet } from "react-native";

export default function Experiencia({ descricao }) {
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.descricao}>{descricao}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 16,
    marginBottom: 12,
  },
  descricao: {
    fontSize: 16,
    textAlign: "justify",
    color: "#555",
  },
});
