import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { CATEGORIES } from "../data/dummyData";

export default function Layout() {
	return (
		<>
			<StatusBar style="light" />
			<Stack
				screenOptions={{
					headerStyle: { backgroundColor: "#351401" },
					headerTintColor: "white",
					contentStyle: {
						backgroundColor: "#3f2f25",
						paddingTop: Platform.OS === "ios" ? 16 : 32,
					},
				}}
			>
				<Stack.Screen name="index" options={{ title: "All categories" }} />
				<Stack.Screen
					name="[categoryId]/meals-overview"
					options={({ route }) => {
						// @ts-ignore
						const { categoryId } = route.params;
						return {
							title: CATEGORIES.find((cat) => cat.id === categoryId)?.title,
						};
					}}
				/>
			</Stack>
		</>
	);
}
