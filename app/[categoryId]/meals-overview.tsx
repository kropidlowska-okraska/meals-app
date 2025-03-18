import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router';

function MealsOverviewScreen() {
  const { categoryId } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meals Overview Screen - {categoryId}</Text>
      <Link href={"/"} style={styles.text}>Go back</Link>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    color: "white"
  }
});