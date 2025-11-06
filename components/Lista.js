import { View, Text, StyleSheet } from "react-native";
import TituloSecao from "./TituloSecao";

export default function Lista({ listItem }) {
  return (
    <View>
      <View style={styles.card}>
        {listItem.map((item, index) => (
          <Text key={index} style={styles.listItem}>
            • {item}
          </Text>
        ))}
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
  listItem: {
    fontSize: 14,
    color: "#222",
  },
});
