import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ButtonLink from "./ButtonLink";
// import ButtonLink from './ButtonLink';

export default function Perfil({ nome, email, number, profissao, fotoUrl }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: fotoUrl }} style={styles.foto} />
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Text style={styles.nome}>{nome}</Text>
        <MaterialIcons name="verified" size={25} color="#0069e0ff" />
      </View>
      <Text style={styles.profissao}>{profissao}</Text>

      <View
        style={{
          flexDirection: "row",
          gap: 5,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        <MaterialIcons name="local-phone" size={20} color="#3f3f3fff" />
        <Text style={styles.email}>{number}</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 5, textAlign: "center" }}>
        <MaterialIcons name="alternate-email" size={20} color="#3f3f3fff" />
        <Text style={styles.email}>{email}</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 10 }}>
        <ButtonLink
          url="https://github.com/vinifvision"
          title="GitHub"
          icon="logo-github"
          corFundo="#2e2e2e"
        />

        <ButtonLink
          url="https://www.linkedin.com/in/euviniciusfernandes/"
          title="LinkedIn"
          icon="logo-linkedin"
          corFundo="#2874e7ff"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 50,
  },
  foto: {
    alignSelf: "center",
    width: 350,
    height: 350,
    borderRadius: 40,
    marginBottom: 20,
  },
  nome: {
    fontSize: 28,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
    color: "#3f3f3fff",
    marginBottom: 20,
  },
  profissao: {
    fontSize: 20,
    color: "#555",
    marginTop: 4,
  },
});
