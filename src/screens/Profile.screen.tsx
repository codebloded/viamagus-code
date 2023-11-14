import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import VStack from "../components/common/VStack"
import { Avatar } from "react-native-paper"
import { Circle, Defs, Image, Path, Pattern, Svg, Use } from "react-native-svg"
import HStack from "../components/common/HStack"
import Icon from "react-native-vector-icons/FontAwesome5"
import IconEntypo from "react-native-vector-icons/Entypo"
import IconFontAwesome from "react-native-vector-icons/FontAwesome6"
import Stats from "../components/Stats"
import Example from "../components/TabsViewRN"
import TabsViewRN from "../components/TabsViewRN"

const ProfileScreen = () => {
	return (
		<>
			<SafeAreaView>
				<View
					style={{
						backgroundColor: "#FFF",
					}}
				>
					<VStack
						gap={10}
						justifyContent="center"
						style={{
							alignItems: "center",
							paddingVertical: 20,
						}}
					>
						<View>
							<SvgComponent />
							<View style={{ backgroundColor: "#FFF", borderRadius: 50, padding: 5, borderColor: "#EEEAF3", borderWidth: 1, position: "absolute", bottom: 0.99, left: 51 }}>
								<Icon name="edit" size={12} color={"#727682"} />
							</View>
						</View>
						<Text
							style={{
								fontFamily: "Montserrat-Medium",
								color: "#333333",
								fontSize: 16,
							}}
						>
							Jina Simons
						</Text>
						<Text
							style={{
								fontFamily: "Montserrat-Medium",
								color: "#727682",
								fontSize: 14,
							}}
						>
							6000 Pts
						</Text>
						<Text
							style={{
								textAlign: "left",
								marginHorizontal: 15,
								lineHeight: 20,
								fontFamily: "Montserrat-Medium",
								color: "#727682",
								fontSize: 15,
							}}
						>
							I’m a software developer that has been in the crypto space since 2012. And I’ve seen it grow and falter over a period of time. Really happy to be here!
						</Text>
					</VStack>

					<TouchableOpacity>
						<HStack gap={10} justifyContent="center" style={{ alignItems: "center" }}>
							<IconEntypo name="log-out" size={18} color={"#727682"} />
							<Text
								style={{
									fontFamily: "Montserrat-Medium",
									fontSize: 15,
									color: "#727682",
								}}
							>
								Logout
							</Text>
						</HStack>
					</TouchableOpacity>
					<Stats />
				</View>
			</SafeAreaView>
			<TabsViewRN />
		</>
	)
}

export default ProfileScreen

function SvgComponent(props: any) {
	return (
		<Svg width={75} height={75} viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
			<Circle cx={37.5} cy={37.5} r={36.5} fill="url(#pattern0)" stroke="#fff" strokeWidth={2} />
			<Defs>
				<Pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
					<Use xlinkHref="#image0_3163_5015" transform="scale(.00104)" />
				</Pattern>
				<Image
					id="image0_3163_5015"
					width={964}
					height={964}
				/>
			</Defs>
		</Svg>
	)
}