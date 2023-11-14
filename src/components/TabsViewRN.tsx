import { FlatList, Text, View } from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import ListItem from "./ListItem"

export default function TabsViewRN() {
	const data = [
		{
			heading: "First Stripe Earned",
			subHeading: "Top 10% of highest spending players in a month",
		},
		{
			heading: "Born Winner",
			subHeading: "Top 10% of highest spending players in a month",
		},
		{
			heading: "Trader of the Month",
			subHeading: "Won 7 under-over games in a row",
		},
		{
			heading: "Rising Star",
			subHeading: "Top 10% of highest spending players in a month",
		},
		{
			heading: "Jackpot",
			subHeading: "Top 10% of highest spending players in a month",
		},
		{
			heading: "Impossible",
			subHeading: "Top 10% of highest spending players in a month",
		},
		{
			heading: "First Stripe Earned",
			subHeading: "Top 10% of highest spending players in a month",
		},
	]

	const BottomTab = createMaterialTopTabNavigator()
	return (
		<BottomTab.Navigator
			screenOptions={{
				tabBarStyle: {
					shadowColor: "transparent",
				},
			}}
		>
			<BottomTab.Screen
				options={{
					// change font family here
					tabBarLabel: ({ focused }) => (
						<Text
							style={{
								fontFamily: "Montserrat-Medium",
								textAlign: "center",
								color: focused ? "#000" : "#727682",
								fontSize: 15,
							}}
						>
							Games Played
						</Text>
					),
				}}
				name={"Games Played"}
				component={() => (
					<Text
						style={{
							fontFamily: "Montserrat-Medium",
							textAlign: "center",
							color: "#333333",
							fontSize: 15,
							marginVertical: 20,
						}}
					>
						Nothing to Show
					</Text>
				)}
			/>
			<BottomTab.Screen
				options={{
					tabBarLabel: ({ focused }) => (
						<Text
							style={{
								fontFamily: "Montserrat-Medium",
								textAlign: "center",
								color: focused ? "#000" : "#727682",
								fontSize: 15,
							}}
						>
							Badges
						</Text>
					),
				}}
				name="Badges"
				component={() => <FlatList data={data} renderItem={({ item }) => <ListItem heading={item.heading} subHeading={item.subHeading} />} />}
			/>
		</BottomTab.Navigator>
	)
}
