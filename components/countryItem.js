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
      <Text style={styles.textPrice}>${country.capital}</Text>
      {/* <Text
        style={[
          styles.pricePercentage,
          coin.price_change_percentage_24h > 0
            ? styles.priceUp
            : styles.priceDown,
        ]}
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </Text> */}
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
  textPrice: {
    color: "#fff",
    fontWeight: "bold",
  },
  pricePercentage: {
    textAlign: "right",
  },
  priceUp: {
    color: "#00B589",
  },
  priceDown: {
    color: "#fc4422",
  },
  image: {
    width: 30,
    height: 30,
  },
  textSymbol: {
    color: "#c8cbfa",
    textTransform: "uppercase",
  },
});

export default CountryItem;