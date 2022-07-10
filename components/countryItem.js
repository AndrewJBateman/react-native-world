import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CountryItem = ({ country }) => (
  <View style={styles.containerItem}>
    <View style={styles.countryName}>
      <Image source={{ uri: country.flags.svg }} style={styles.image} />
      <View style={styles.containerNames}>
        <Text style={styles.text}>{country.name.common}</Text>
        <Text style={styles.textSymbol}>{country.cca2}</Text>
      </View>
    </View>
    <View>
      <Text style={styles.textRight}>{country.subregion},</Text>
      <Text style={styles.textRight}>{country.region},</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#121212",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerNames: {
    marginLeft: 10,
  },
  countryName: {
    flexDirection: "row",
  },
  text: {
    color: "#fff",
  },
  textRight: {
    color: "#c8cbfa",
    textAlign: "right"
  },
  image: {
    width: 30,
    height: 30,
    paddingTop: 4
  },
  textSymbol: {
    color: "#c8cbfa",
    textTransform: "uppercase",
  },
});

export default CountryItem;