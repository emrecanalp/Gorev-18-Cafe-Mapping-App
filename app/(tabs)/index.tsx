import { View, Text, Image } from "react-native";
import { AppleMaps } from "expo-maps";
import { cafes, Cafe } from "@/data/cafes";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useCallback, useMemo, useRef, useState } from "react";

export default function HomeScreen() {
  const [selectedCafe, setSelectedCafe] = useState<Cafe | null>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["35%"], []);

  const markers: AppleMaps.Marker[] = cafes.map((cafe) => ({
    id: cafe.id,
    coordinates: {
      latitude: cafe.coordinate.latitude,
      longitude: cafe.coordinate.longitude,
    },
    title: cafe.name,
  }));

  const handleMarkerClick = useCallback((markerId: string) => {
    const cafe = cafes.find((c) => c.id === markerId);
    if (cafe) {
      setSelectedCafe(cafe);
      bottomSheetRef.current?.expand();
    }
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      setSelectedCafe(null);
    }
  }, []);

  return (
    <View className="flex-1">
      <AppleMaps.View
        style={{ flex: 1, width: "100%", height: "100%" }}
        cameraPosition={{
          coordinates: {
            latitude: 41.0082,
            longitude: 28.9784,
          },
          zoom: 14,
        }}
        markers={markers}
        onMarkerClick={(event) => handleMarkerClick(event.id)}
      />

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        backgroundStyle={{ backgroundColor: "white" }}
      >
        <BottomSheetView className="flex-1 px-4 pb-4">
          {selectedCafe && (
            <View className="flex-1">
              <Image
                source={{ uri: selectedCafe.image }}
                className="w-full h-40 rounded-xl"
                resizeMode="cover"
              />
              <Text className="text-xl font-bold mt-3 text-gray-900">
                {selectedCafe.name}
              </Text>
              <Text className="text-gray-600 mt-2">
                {selectedCafe.description}
              </Text>
            </View>
          )}
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}