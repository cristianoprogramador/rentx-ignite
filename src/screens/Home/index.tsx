import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  CarList,
  Container,
  Header,
  HeaderContent,
  MyCarsButton,
  TotalCars,
} from "./styles";

import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";
import { CarDTO } from "../../dtos/CarDTO";

import api from "../../services/api";
import { Load } from "../../components/Load";
import { useTheme } from "styled-components";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  const navigation = useNavigation();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }
  function handleOpenMyCars(car: CarDTO) {
    navigation.navigate("MyCars");
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Header>
        <HeaderContent>
          <Logo height={RFValue(12)} width={RFValue(108)} />
          <TotalCars>Total {cars.length} carros</TotalCars>
        </HeaderContent>
      </Header>
      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}

      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons name="ios-car-sport" size={32} color={theme.colors.shape} />
      </MyCarsButton>
    </Container>
  );
}
