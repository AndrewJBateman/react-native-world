import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import lightMode from "./../styles/lightMode";

const CountryItem = ({ country }) => (
  <View
    style={theme == "dark" ? styles.containerItem : lightMode.ContainerItem}
  >
    <View style={theme == "dark" ? styles.countryName : lightMode.countryName}>
      <Image source={{ uri: country.flags.svg }} style={styles.image} />
      <View style={styles.containerNames}>
        <Text style={theme == "dark" ? styles.text : lightMode.text}>
          {country.name.common}
        </Text>
        <Text style={theme == "dark" ? styles.textCaps : lightMode.textCaps}>
          {country.cca2}
        </Text>
      </View>
    </View>
    <View>
      <Text style={theme == "dark" ? styles.textRight : lightMode.textRight}>
        {country.subregion},
      </Text>
      <Text style={theme == "dark" ? styles.textRight : lightMode.textRight}>
        {country.region}
      </Text>
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
    textAlign: "right",
  },
  image: {
    width: 60,
    height: 40,
    paddingTop: 4,
  },
  textCaps: {
    color: "#c8cbfa",
    textTransform: "uppercase",
  },
});

export default CountryItem;
