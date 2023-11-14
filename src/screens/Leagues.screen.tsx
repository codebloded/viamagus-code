import React, { useCallback, useRef, useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import BottomSheet from "@gorhom/bottom-sheet"
import VStack from "../components/common/VStack"
import { FlatList } from "react-native-gesture-handler"
import HStack from "../components/common/HStack"
import { G, Path, Svg } from "react-native-svg"

const LeaguesScreen = () => {
	const [pickedValue, setPickedValue] = useState(4)
	const bottomSheetRef = useRef(null)
	const snapPoints = ["75%"]

	const handleSheetChanges = useCallback((index: any) => {
		console.log("handleSheetChanges", index)
	}, [])

	const selectValue = (value: any) => {
		setPickedValue(value)
	}

	return (
		<View style={{ flex: 1, justifyContent: "center" }}>
			<Text style={{ fontFamily: "Montserrat-Medium", fontSize: 17, textAlign: "center", color: "#333333" }}>BLANK {" :)"}</Text>
		</View>
	)
}

export default LeaguesScreen
