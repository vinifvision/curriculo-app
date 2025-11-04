import { StyleSheet, Text, View, Image } from 'react-native';
import Experiencia from './components/Experiencia';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/foto.png')} style={styles.foto}></Image>
      <Text style={styles.nome}>Vinícius Fernandes</Text>
      <Text style={styles.subtitulo}>Desenvolvedor Full-Stack</Text>

      <Text style={styles.tituloSecao}>Experiências</Text>

      <Experiencia
        cargo="Estagiário Full-Stack"
        empresa="Flagr"
        periodo="2025 - Atual"
        descricao="Plataforma jurídica que automatiza a análise de documentos. No estágio, desenvolvo aplicações com Docker e React, além de implementar automações de Data Room utilizando n8n Cloud e Python. Também colaboro em projetos open source e na manutenção de ambientes baseados em Nextcloud, sempre buscando otimizar fluxos de trabalho e melhorar a performance das soluções. Tenho contribuído ativamente em discussões técnicas e decisões de arquitetura dentro da equipe."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 5,
    marginBottom: 16,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 16,
    color: '#555'
  },
  tituloSecao: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 12,
  },
});
