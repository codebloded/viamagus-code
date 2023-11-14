import { View, Text } from "react-native"
import React, { Fragment } from "react"
import HStack from "./common/HStack"
import VStack from "./common/VStack"
import Icon from "react-native-vector-icons/FontAwesome5"
import IconEntypo from "react-native-vector-icons/Entypo"
import IconFontAwesome from "react-native-vector-icons/FontAwesome6"
import { Circle, Path, Svg } from "react-native-svg"

const Stats = () => {
	return (
		<Fragment>
			<View
				style={{
					position: "relative",
					top: 25,
					left: "46.7%",
					zIndex: 2,
				}}
			>
				<SvgStarComponent />
			</View>
			<View style={{ borderWidth: 1, borderColor: "#EEEAF3", marginHorizontal: 15, marginTop: 10, marginBottom: 25, padding: 20, borderRadius: 7 }}>
				<HStack gap={10} justifyContent="space-around">
					<VStack gap={10} justifyContent="center">
						<Text
							style={{
								fontFamily: "Montserrat-Medium",
								fontSize: 15,
								color: "#727682",
							}}
						>
							Under or Over
						</Text>
						<HStack
							gap={10}
							justifyContent="center"
							style={{
								alignItems: "center",
							}}
						>
							<IconFontAwesome
								name="arrow-up"
								size={20}
								color={"#48C547"}
								style={{
									backgroundColor: "#48C54722",
									padding: 10,
									borderRadius: 70,
								}}
							/>
							<Text
								style={{
									fontFamily: "Montserrat-Bold",
									fontSize: 25,
									color: "#4F4F4F",
								}}
							>
								81%
							</Text>
						</HStack>
					</VStack>
					<VStack gap={10} justifyContent="center">
						<Text
							style={{
								fontFamily: "Montserrat-Medium",
								fontSize: 15,
								color: "#727682",
							}}
						>
							Top 5
						</Text>
						<HStack
							gap={10}
							justifyContent="center"
							style={{
								alignItems: "center",
							}}
						>
							<IconFontAwesome
								name="arrow-down"
								size={20}
								color={"#F73232"}
								style={{
									backgroundColor: "#F7323233",
									padding: 10,
									borderRadius: 70,
								}}
							/>
							<Text
								style={{
									fontFamily: "Montserrat-Bold",
									fontSize: 25,
									color: "#4F4F4F",
								}}
							>
								-51%
							</Text>
						</HStack>
					</VStack>
				</HStack>
			</View>
		</Fragment>
	)
}

export default Stats
function SvgStarComponent(props: any) {
	return (
		<Svg width={27} height={31} viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<Path
				d="M26.867 4.547A15.808 15.808 0 0015.734 0C7.044 0 0 6.94 0 15.5 0 24.06 7.044 31 15.734 31c3.91 0 7.603-1.413 10.463-3.924l-2.688-2.972a11.74 11.74 0 01-7.775 2.915C9.276 27.02 4.04 21.862 4.04 15.5S9.276 3.98 15.734 3.98c3.148 0 6.093 1.23 8.274 3.38l2.859-2.813z"
				fill="#FFE200"
			/>
			<Circle cx={16.0168} cy={16.0162} r={8.78333} fill="#FEF853" />
			<Path d="M16.017 9.3l1.508 4.642h4.88l-3.948 2.868 1.508 4.641-3.948-2.868-3.948 2.868 1.508-4.64-3.948-2.87h4.88l1.508-4.64z" fill="#FFA600" />
		</Svg>
	)
}
