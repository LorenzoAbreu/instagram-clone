import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Biography from './components/biography';
import EditProfile from './components/edit_profile';
import Header from './components/header';
import Highlights from './components/highlights';
import Status from './components/status';

export default function App() {
  return (
    <View style={styles.container}>
      <Header username='saham_amon' />
      <Status publicacoes={36} seguidores={333} seguindo={495} />
      <Biography name='Saham Amon' bio='Pagão 🍃
Vegetariano 🐄
Câncer ♋
Programador 💻
Florianópolis 🏞'
/>
      <EditProfile />
      <Highlights />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
