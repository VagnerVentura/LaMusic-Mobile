import {SafeAreaView, StyleSheet} from 'react-native';
import Header from '../../Header/Header';
import HeroHeader from '../../HeroHeader/HeroHeader';
import Main from '../../Main/Main copy';

function HomeScreenSearch({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
          <Header navigation={navigation} />
          <HeroHeader navigation={navigation} />
          <Main />
      </SafeAreaView>
      
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff', 
    },
  });

  export default HomeScreenSearch;