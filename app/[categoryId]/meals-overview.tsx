import { View, Text, StyleSheet, FlatList } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { MEALS } from "../../data/dummyData";
import MealItem from "../../components/MealItem";

type ItemData = {
	item: {
		id: string;
		title: string;
		imageUrl: string;
		affordability: string;
		complexity: string;
		duration: number;
	};
};

function MealsOverviewScreen() {
	const { categoryId } = useLocalSearchParams<{ categoryId: string }>();
	const displayedMeals = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(categoryId) >= 0;
	});

	function renderMealItem(itemData: ItemData) {
		const item = itemData.item;

		const mealItemProps = {
			title: item.title,
			imageUrl: item.imageUrl,
			affordability: item.affordability,
			complexity: item.complexity,
			duration: item.duration,
		};
		return (
			<MealItem
				{...mealItemProps}
				onPress={() => router.navigate(`${itemData.item.id}/meal-detail`)}
			/>
		);
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			/>
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
		color: "white",
	},
});
