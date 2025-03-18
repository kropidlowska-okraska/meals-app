import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummyData";
import { router } from "expo-router";

type ItemData = {
	item: {
		id: string;
		title: string;
		color: string;
	};
};

function renderCategoryItem(itemData: ItemData) {
	return (
		<CategoryGridTile
			title={itemData.item.title}
			color={itemData.item.color}
			onPress={() => router.navigate(`${itemData.item.id}/meals-overview`)}
		/>
	);
}

function CategoriesScreen() {
	return (
		<FlatList
			data={CATEGORIES}
			keyExtractor={(item) => item.id}
			renderItem={renderCategoryItem}
			numColumns={2}
		/>
	);
}

export default CategoriesScreen;
