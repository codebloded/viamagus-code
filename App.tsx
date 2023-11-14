/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { Image, Text, View } from "react-native"
import ProfileScreen from "./src/screens/Profile.screen"
import { Defs, LinearGradient, Path, Stop, Svg } from "react-native-svg"

import Icon from "react-native-vector-icons/Ionicons"
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons"
import LeaderBoardScreen from "./src/screens/Leagues.screen"
import ResearchScreen from "./src/screens/Research.screen"
import { Badge } from "react-native-paper"
import HStack from "./src/components/common/HStack"
import HomeScreen from "./src/screens/Home.screen"
import LeaguesScreen from "./src/screens/Leagues.screen"

const Tab = createBottomTabNavigator()

function App(): JSX.Element {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen
					options={{
						title: undefined,
						tabBarIcon: ({ focused }) => <Icon name="home" size={20} color={focused ? "#6231AD" : "#727682"} />,
						tabBarLabelStyle: {
							fontFamily: "Montserrat-Medium",
							textAlign: "center",
							color: "#727682",
							fontSize: 11,
						},
						header: () => (
							<View
								style={{
									backgroundColor: "#FFF",
									padding: 15,
								}}
							>
								<Text
									style={{
										fontFamily: "Montserrat-Bold",
										textAlign: "left",
										color: "#333333",
										fontSize: 17,
									}}
								>
									Todays's Games
								</Text>
							</View>
						),
					}}
					name="Home"
					component={HomeScreen}
				/>
				<Tab.Screen
					options={{
						tabBarIcon: ({ focused }) => <Icon name="trophy" size={20} color={focused ? "#6231AD" : "#727682"} />,
						tabBarLabelStyle: {
							fontFamily: "Montserrat-Medium",
							textAlign: "center",
							color: "#727682",
							fontSize: 11,
						},
					}}
					name="Leagues"
					component={LeaguesScreen}
				/>
				<Tab.Screen
					options={{
						tabBarIcon: ({ focused }) => <Icon name="search" size={20} color={focused ? "#6231AD" : "#727682"} />,
						tabBarLabelStyle: {
							fontFamily: "Montserrat-Medium",
							textAlign: "center",
							color: "#727682",
							fontSize: 11,
						},
					}}
					name="Research"
					component={ResearchScreen}
				/>
				<Tab.Screen
					options={{
						tabBarIcon: ({ focused }) => <IconMaterialIcons name="leaderboard" size={20} color={focused ? "#6231AD" : "#727682"} />,
						tabBarLabelStyle: {
							fontFamily: "Montserrat-Medium",
							textAlign: "center",
							color: "#727682",
							fontSize: 11,
						},
					}}
					name="Leaderboard"
					component={LeaderBoardScreen}
				/>

				<Tab.Screen
					options={{
						title: undefined,
						header: () => (
							<HStack gap={10} justifyContent="space-between" style={{ alignItems: "center", backgroundColor: "#fff" }}>
								<View style={{ width: 30, height: 30.1, paddingHorizontal: 20 }}>
									<SvgLogoComponent />
								</View>
								<Text
									style={{
										fontFamily: "Montserrat-Medium",
										textAlign: "center",
										color: "#727682",
										fontSize: 15,
									}}
								>
									Profile
								</Text>
								<View
									style={{
										paddingRight: 20,
									}}
								>
									<Badge
										style={{
											backgroundColor: "#6231AD",
											position: "relative",
											top: 12,
											left: 7,
											zIndex: 1,
										}}
									>
										1
									</Badge>
									<Icon name="chatbox" size={25} color={"#727682"} />
								</View>
							</HStack>
						),
						tabBarIcon: ({ focused }) => <Icon name="person" size={20} color={focused ? "#6231AD" : "#727682"} />,
						tabBarLabelStyle: {
							fontFamily: "Montserrat-Medium",
							textAlign: "center",
							color: "#727682",
							fontSize: 11,
						},

						//while focused change label color to black

						tabBarActiveTintColor: "#000",

						headerLeft: () => (
							<View
								style={{
									width: 29.801,
									height: 30.1,
									paddingHorizontal: 16,
								}}
							>
								<SvgLogoComponent />
							</View>
						),

						headerRight: () => (
							<View
								style={{
									paddingRight: 20,
								}}
							>
								<Badge>3</Badge>
								<Icon name="chatbox" size={30} color={"#727682"} />
							</View>
						),
					}}
					name="Profile"
					component={ProfileScreen}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}

export default App

function SvgLogoComponent(props: any) {
	return (
		<Svg width={30} height={31} viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/#6231AD/svg" {...props}>
			<Path
				d="M0 15.894C0 7.664 6.67.994 14.9.994c8.23 0 14.901 6.67 14.901 14.9s-6.671 14.9-14.9 14.9C6.67 30.795 0 24.125 0 15.895zm26.23 0c0-6.256-5.073-11.329-11.33-11.329-6.256 0-11.328 5.073-11.328 11.33 0 6.256 5.072 11.328 11.328 11.328 6.257 0 11.33-5.072 11.33-11.329z"
				fill="#fff"
			/>
			<Path
				d="M0 15.894C0 7.664 6.67.994 14.9.994c8.23 0 14.901 6.67 14.901 14.9s-6.671 14.9-14.9 14.9C6.67 30.795 0 24.125 0 15.895zm26.23 0c0-6.256-5.073-11.329-11.33-11.329-6.256 0-11.328 5.073-11.328 11.33 0 6.256 5.072 11.328 11.328 11.328 6.257 0 11.33-5.072 11.33-11.329z"
				fill="url(#paint0_linear_3163_4993)"
			/>
			<Path fillRule="evenodd" clipRule="evenodd" d="M26.053 10.232z" fill="url(#paint1_linear_3163_4993)" />
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.293 12.48c-.025-.03-.024-.07.01-.09.906-.51 12.285-6.649 16.534 4.439.016.041-.012.09-.057.09-.693 0-5.106.25-4.993 6.386a.064.064 0 01-.02.046l-8.002 7.632a.062.062 0 01-.104-.044l-.118-10.32c0-.022.01-.042.028-.053l3.293-2.119a.062.062 0 00.028-.044l.299-2.366a.062.062 0 00-.092-.06l-4.352 2.575a.062.062 0 00-.03.05l-.223 6.873a.062.062 0 01-.107.04l-1.62-1.704a.062.062 0 01-.016-.049l.957-9.61a.062.062 0 00-.015-.046l-1.4-1.627z"
				fill="#fff"
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.293 12.48c-.025-.03-.024-.07.01-.09.906-.51 12.285-6.649 16.534 4.439.016.041-.012.09-.057.09-.693 0-5.106.25-4.993 6.386a.064.064 0 01-.02.046l-8.002 7.632a.062.062 0 01-.104-.044l-.118-10.32c0-.022.01-.042.028-.053l3.293-2.119a.062.062 0 00.028-.044l.299-2.366a.062.062 0 00-.092-.06l-4.352 2.575a.062.062 0 00-.03.05l-.223 6.873a.062.062 0 01-.107.04l-1.62-1.704a.062.062 0 01-.016-.049l.957-9.61a.062.062 0 00-.015-.046l-1.4-1.627z"
				fill="url(#paint2_linear_3163_4993)"
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M25.947 10.813l.202.203.01.01-.01-.01C17.654 2.084 6.482 7.583 5.728 7.97a.06.06 0 01-.073-.016L.681 2.351c-.03-.034-.022-.085.021-.097 1.09-.304 12.338-3.292 19.489.72 8.928 5.01 9.315 16.805 9.181 20.74-.003.08-.125.07-.13-.007-.207-2.958-1.243-10.126-6.393-13.208-6.664-3.988-13.522.478-14.105.874-.026.018-.056.01-.077-.012L6.343 8.82a.062.062 0 01.02-.098c10.888-5.407 18.32.874 19.584 2.09z"
				fill="#fff"
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M25.947 10.813l.202.203.01.01-.01-.01C17.654 2.084 6.482 7.583 5.728 7.97a.06.06 0 01-.073-.016L.681 2.351c-.03-.034-.022-.085.021-.097 1.09-.304 12.338-3.292 19.489.72 8.928 5.01 9.315 16.805 9.181 20.74-.003.08-.125.07-.13-.007-.207-2.958-1.243-10.126-6.393-13.208-6.664-3.988-13.522.478-14.105.874-.026.018-.056.01-.077-.012L6.343 8.82a.062.062 0 01.02-.098c10.888-5.407 18.32.874 19.584 2.09z"
				fill="url(#paint3_linear_3163_4993)"
			/>
			<Defs>
				<LinearGradient id="paint0_linear_3163_4993" x1={5.0353} y1={31.7197} x2={28.157} y2={-0.342326} gradientUnits="userSpaceOnUse">
					<Stop stopColor="#FFB800" />
					<Stop offset={0.375546} stopColor="#FD0" />
					<Stop offset={1} stopColor="#FD0" stopOpacity={0.18} />
				</LinearGradient>
				<LinearGradient id="paint1_linear_3163_4993" x1={26.0585} y1={10.2322} x2={26.0585} y2={10.2418} gradientUnits="userSpaceOnUse">
					<Stop stopColor="#fff" />
					<Stop offset={1} stopColor="#fff" stopOpacity={0.7} />
				</LinearGradient>
				<LinearGradient id="paint2_linear_3163_4993" x1={16.94} y1={14.8109} x2={2.45237} y2={1.31316} gradientUnits="userSpaceOnUse">
					<Stop stopColor="#6231AD" />
					<Stop offset={1} stopColor="#6231AD" stopOpacity={0.74} />
				</LinearGradient>
				<LinearGradient id="paint3_linear_3163_4993" x1={16.94} y1={14.8109} x2={2.45237} y2={1.31316} gradientUnits="userSpaceOnUse">
					<Stop stopColor="#6231AD" />
					<Stop offset={1} stopColor="#6231AD" stopOpacity={0.74} />
				</LinearGradient>
			</Defs>
		</Svg>
	)
}
