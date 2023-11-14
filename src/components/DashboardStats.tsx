import { View, Text } from "react-native"
import React from "react"
import VStack from "./common/VStack"
import HStack from "./common/HStack"
import { G, Path, Svg } from "react-native-svg"

const DashboardStats = () => {
	return (
		<VStack gap={10} justifyContent="center" style={{ paddingHorizontal: 20, paddingVertical: 20, backgroundColor: "#FFF" }}>
			<HStack gap={10} justifyContent="space-between" style={{ alignItems: "center" }}>
				<VStack gap={5} justifyContent="flex-start" style={{ alignItems: "flex-start" }}>
					<Text style={{ fontFamily: "Montserrat-Medium", fontSize: 13, color: "#B5C0C8", textTransform: "uppercase" }}>Prize Pool</Text>
					<Text style={{ fontFamily: "Montserrat-Bold", fontSize: 15, color: "#333333", textTransform: "uppercase" }}>$ 12,000</Text>
				</VStack>
				<VStack gap={5} justifyContent="flex-start" style={{ alignItems: "flex-start" }}>
					<Text style={{ fontFamily: "Montserrat-Medium", fontSize: 13, color: "#B5C0C8", textTransform: "uppercase" }}>Under</Text>
					<Text style={{ fontFamily: "Montserrat-Bold", fontSize: 15, color: "#333333", textTransform: "uppercase" }}>3.25x</Text>
				</VStack>
				<VStack gap={5} justifyContent="flex-start" style={{ alignItems: "flex-start" }}>
					<Text style={{ fontFamily: "Montserrat-Medium", fontSize: 13, color: "#B5C0C8", textTransform: "uppercase" }}>Over</Text>
					<Text style={{ fontFamily: "Montserrat-Bold", fontSize: 15, color: "#333333", textTransform: "uppercase" }}>1.25x</Text>
				</VStack>
				<VStack gap={5} justifyContent="flex-start" style={{ alignItems: "flex-end" }}>
					<Text style={{ fontFamily: "Montserrat-Medium", fontSize: 13, color: "#B5C0C8", textTransform: "uppercase" }}>Entry Fees</Text>
					<View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 }}>
						<Text style={{ fontFamily: "Montserrat-Bold", fontSize: 15, color: "#333333", textTransform: "uppercase" }}>5</Text>
						<SvgComponent />
					</View>
				</VStack>
			</HStack>
		</VStack>
	)
}

export default DashboardStats

function SvgComponent(props: any) {
	return (
		<Svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<G fillRule="evenodd" clipRule="evenodd">
				<Path d="M0 6.5a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" fill="#FFD600" />
				<Path d="M1.56 6.5a4.94 4.94 0 119.88 0 4.94 4.94 0 01-9.88 0z" fill="#FFE400" />
				<Path d="M2.411 6.747c0-2.32 1.995-4.2 4.456-4.2 1.439 0 2.718.642 3.532 1.64C9.63 2.927 8.188 2.08 6.537 2.08c-2.461 0-4.457 1.88-4.457 4.2 0 .964.345 1.851.924 2.56a3.997 3.997 0 01-.592-2.093z" fill="#FFD600" />
			</G>
		</Svg>
	)
}
