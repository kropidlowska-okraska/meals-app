import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";

export default function Layout() {
	return (
		<>
			<StatusBar style="light" />
			<Stack
				screenOptions={{
                    headerStyle: { backgroundColor: "#24180f" },
                    headerTintColor: "white",
                    contentStyle: { backgroundColor: "#24180f", paddingTop: Platform.OS === "ios" ? 16 : 32 },
				}}
			>
				<Stack.Screen name="index" />
                <Stack.Screen name="[categoryId]/meals-overview" />
			</Stack>
		</>
	);
}
