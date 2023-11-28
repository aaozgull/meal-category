import { View, Text, StyleSheet } from "react-native";
function MealDetails({ complexity, affordability, duration,style,textStyle }) {
  return (
    <View style={[styles.detail,style]}>
      <Text style={[styles.detailItem,textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem,textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem,textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  detail: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
