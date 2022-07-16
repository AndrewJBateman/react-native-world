import React from "react";
import { StyleSheet } from "react-native";

const lightMode = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: "#000",
    marginTop: 10,
  },
  list: {
    width: "95%",
    marginLeft: 4,
  },
  searchInput: {
    color: "#000",
    borderBottomColor: "#c8cbfa",
    borderBottomWidth: 1,
    width: "40%",
    textAlign: "left",
  },
  containerItem: {
    backgroundColor: "white",
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

export default lightMode;
