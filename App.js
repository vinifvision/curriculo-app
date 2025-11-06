import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Experiencia from './components/Experiencia';
import Perfil from './components/Perfil';
import TituloSecao from './components/TituloSecao';
import Lista from './components/Lista';
import Topico from './components/Topico';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Perfil
          nome="Vinícius Fernandes"
          profissao="Desenvolvedor Full-Stack"
          fotoUrl="https://avatars.githubusercontent.com/u/119247208?v=4"
          email="viniciusflrezende1@gmail.com"
          number="+55 (81) 98342-2096"
        />

        <TituloSecao tituloSecao="Habilidades Técnicas"/>
        <View style={{ flexDirection: 'row', marginTop: 10, gap: 15 }}>
          <FontAwesome5 name="react" size={40} color="#69a7eeff" />
          <FontAwesome5 name="docker" size={40} color="#4898f3ff" />
          <FontAwesome5 name="python" size={40} color="#ffce2cff" />
          <FontAwesome5 name="git" size={40} color="#ff7300ff" />
          <FontAwesome5 name="github" size={40} color="#000000ff" />
        </View>

        <View>
          <TituloSecao
            tituloSecao="Objetivo"
          />
          <Topico
            descricao="Estagiar como Desenvolvedor Full-Stack"
          />
        </View>

        <View>
          <TituloSecao
            tituloSecao="Resumo Profissional"
          />
          <Topico
            descricao="Estudante de  Desenvolvimento de Sistemas com experiência prática como estagiário full-stack na Flagr, atuando com desenvolvimento de aplicações utilizando React, Docker, n8n Cloud e Python. Na Flagr, participo da automação do Data Room e da integração de sistemas utilizando ferramentas de código aberto. Lidero também a startup CriticLevel, aplicando habilidades de desenvolvimento, gestão de empreendedorismo. Tenho perfil proativo, colaborativo e focado em resultados, com facilidade para aprender novas tecnologias e trabalhar em equipes ágeis."
          />
        </View>

        <TituloSecao tituloSecao="Formação Acadêmica"/>
        <Lista
          listItem={[
            'Tecnólogo em Análise e Desenvolvimento de Sistemas – Faculdade Senac Pernambuco (2025–2026)',
            'Técnico em Desenvolvimento de Sistemas – Mediotec Senac (2022–2024)',
          ]}
        />

        <TituloSecao tituloSecao="Idioma"/>
        <Lista
          listItem={[
            'Inglês Intermediário (capaz de compreender textos e conversas, identificando contexto e sentido geral).',
          ]}
        />

        <Experiencia
          cargo="Estagiário Full-Stack"
          empresa="Flagr"
          periodo="2025 - Atual"
          descricao="Plataforma jurídica que automatiza a análise de documentos. No estágio, desenvolvo aplicações com Docker e React, além de implementar automações de Data Room utilizando n8n Cloud e Python. Também colaboro em projetos open source e na manutenção de ambientes baseados em Nextcloud, sempre buscando otimizar fluxos de trabalho e melhorar a performance das soluções. Tenho contribuído ativamente em discussões técnicas e decisões de arquitetura dentro da equipe."
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    padding: 16,
  },
});
