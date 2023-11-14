import { Button, Touchable, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import BitCoinPrice from "../components/BitCoinPrice"
import VStack from "../components/common/VStack"
import HStack from "../components/common/HStack"
import { Text } from "react-native"
import { G, Path, Svg } from "react-native-svg"
import DashboardStats from "../components/DashboardStats"
import Prediction from "../components/Prediction"
import BottomSheet from "@gorhom/bottom-sheet"

import Icon from "react-native-vector-icons/Entypo"
import IconMat from "react-native-vector-icons/MaterialIcons"
import IconFont from "react-native-vector-icons/FontAwesome"

import { FlatList } from "react-native-gesture-handler"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Animated from "react-native-reanimated"
import bottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet"

const HomeScreen = () => {
	const [pickedValue, setPickedValue] = useState(4)
	const bottomSheetRef = useRef<BottomSheet>(null)

	const [index, setIndex] = useState(-1)
	const snapPoints = useMemo(() => ["75%"], [])

	const handleSheetChanges = useCallback((index: any) => {
		console.log("handleSheetChanges", index)
		setIndex(index)
	}, [])

	const [isSheetOpen, setIsSheetOpen] = useState(false)
	const selectValue = (value: any) => {
		setPickedValue(value)
	}

	const openBottomSheet = () => {
		if (bottomSheetRef.current) {
			bottomSheetRef.current.expand()
			setIsSheetOpen(true)
		}
	}

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: "#fff",
			}}
		>
			<View
				style={{
					marginHorizontal: 15,
				}}
			>
				<BitCoinPrice />
				<View
					style={{
						backgroundColor: "#EEEAF3",
						borderColor: "#EEEAF3",
						borderWidth: 1,
					}}
				>
					<DashboardStats />

					<VStack gap={10} justifyContent="flex-start" style={{ paddingHorizontal: 20, paddingVertical: 20, backgroundColor: "#FFF" }}>
						<Text style={{ fontFamily: "Montserrat-Bold", fontWeight: "600", fontSize: 15, color: "#727682" }}>What's your prediction?</Text>
						<HStack gap={10} justifyContent="space-between" style={{ alignItems: "flex-start" }}>
							<TouchableOpacity
								style={{
									backgroundColor: "#452C55",
									borderRadius: 30,
									width: "50%",
								}}
							>
								<HStack gap={3} justifyContent="center" style={{ alignItems: "center" }}>
									<Icon name="arrow-down" size={15} color={"#FFF"} />
									<Text style={{ fontFamily: "Montserrat-Medium", fontWeight: "600", fontSize: 15, color: "#FFF", paddingVertical: 10 }}>Under</Text>
								</HStack>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									backgroundColor: "#6231AD",
									borderRadius: 30,
									width: "50%",
								}}
								onPress={openBottomSheet}
							>
								<HStack gap={3} justifyContent="center" style={{ alignItems: "center" }}>
									<Icon name="arrow-up" size={15} color={"#FFF"} />
									<Text style={{ fontFamily: "Montserrat-Medium", fontWeight: "600", fontSize: 15, color: "#FFF", paddingVertical: 10 }}>Over</Text>
								</HStack>
							</TouchableOpacity>
						</HStack>

						<HStack gap={10} justifyContent="space-between" style={{ alignItems: "flex-start", marginTop: 20 }}>
							<HStack gap={5} justifyContent="center" style={{ alignItems: "center" }}>
								<IconMat name="person" size={20} color={"#727682"} />
								<Text style={{ fontFamily: "Montserrat-Bold", fontWeight: "600", fontSize: 15, color: "#727682" }}>355 Players</Text>
							</HStack>
							<HStack gap={5} justifyContent="center" style={{ alignItems: "center" }}>
								<IconFont name="area-chart" size={18} color={"#727682"} />
								<Text style={{ fontFamily: "Montserrat-Bold", fontWeight: "600", fontSize: 15, color: "#727682" }}>View chart</Text>
							</HStack>
						</HStack>
						{/* Make a progress bar with two different color  */}
						<View
							style={{
								backgroundColor: "#2DABAD",
								height: 10,
								borderRadius: 10,
								marginTop: 10,
							}}
						>
							<View
								style={{
									backgroundColor: "#FE4190",
									height: 10,
									width: "70%",
									borderRadius: 10,
								}}
							></View>
						</View>
						<HStack gap={5} justifyContent="space-between" style={{ alignItems: "center" }}>
							<Text style={{ fontFamily: "Montserrat-Medium", fontWeight: "600", fontSize: 13, color: "#B5C0C8" }}>232 predicted under</Text>
							<Text style={{ fontFamily: "Montserrat-Medium", fontWeight: "600", fontSize: 13, color: "#B5C0C8" }}>123 predicted over</Text>
						</HStack>
					</VStack>
				</View>
			</View>

			<BottomSheet
				snapPoints={snapPoints}
				enablePanDownToClose={true}
				onClose={() => setIsSheetOpen(false)}
				animateOnMount={false}
				ref={bottomSheetRef}
				index={index}
				onChange={handleSheetChanges}
				backdropComponent={(props) => isSheetOpen && <Animated.View style={[props.style, { backgroundColor: "#000", opacity: 0.5 }]} />}
			>
				<View style={{ flex: 1, marginHorizontal: 10 }}>
					<VStack
						gap={20}
						justifyContent="center"
						style={{
							marginHorizontal: 20,
						}}
					>
						<Text style={{ fontFamily: "Montserrat-Medium", fontSize: 17, textAlign: "left", color: "#333333" }}>Your Prediction is Under</Text>

						<Text style={{ fontFamily: "Montserrat-Medium", fontSize: 13, textAlign: "left", color: "#333333", textTransform: "uppercase" }}>Entry tickets</Text>
					</VStack>
					<View
						style={{
							marginTop: 10,
							alignItems: "center",
							height: 250,
						}}
					>
						<FlatList
							scrollEnabled={true}
							data={Array.from({ length: 100 }, (_, i) => ({ value: i + 1 }))} // MOCK_DATA
							renderItem={({ item }) => (
								<TouchableOpacity
									style={[{ backgroundColor: "#fff", width: 300, marginTop: 10, paddingVertical: 5, justifyContent: "center", alignItems: "center" }, pickedValue === item.value && { backgroundColor: "#72768222" }]}
									onPress={() => selectValue(item.value)}
								>
									<Text style={{ fontFamily: "Montserrat-Bold", fontSize: 25, textAlign: "center", color: "#333333" }}>{item.value}</Text>
								</TouchableOpacity>
							)}
							keyExtractor={(item) => item.value.toString()}
						/>
					</View>
					<HStack gap={10} justifyContent="space-between" style={{ marginTop: 20, marginHorizontal: 20, alignItems: "center" }}>
						<View style={{ alignItems: "center" }}>
							<Text style={{ fontFamily: "Montserrat-Medium", fontSize: 13, textAlign: "left", color: "#333333" }}>You can win</Text>
							<Text style={{ fontFamily: "Montserrat-Medium", fontSize: 17, textAlign: "left", color: "#03A67F" }}>$2000</Text>
						</View>
						<Text style={{ fontFamily: "Montserrat-Medium", fontSize: 13, textAlign: "left", color: "#333333" }}>
							Total <SvgComponent /> 5
						</Text>
					</HStack>
					<View style={{ marginTop: 20, marginHorizontal: 20 }}>
						<TouchableOpacity
							style={{
								backgroundColor: "#6231AD",
								borderRadius: 30,
							}}
						>
							<Text style={{ fontFamily: "Montserrat-Medium", fontWeight: "600", alignSelf: "center", fontSize: 15, color: "#FFF", paddingVertical: 10 }}>Submit my prediction</Text>
						</TouchableOpacity>
					</View>
				</View>
			</BottomSheet>
		</SafeAreaView>
	)
}

export default HomeScreen

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
