import React, { useEffect, useState } from "react";
import {
  Appearance,
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TextInput,
} from "react-native";
import lightMode from "./styles/lightMode"

import CountryItem from "./components/CountryItem";

const App = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme) => {
    setTheme(scheme.colorScheme);
  })
  const [countries, setCountries] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    console.log("data: ", data);
    setCountries(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={theme== 'dark'? styles.container : lightMode.container}>
      <StatusBar backgroundColor="#0e0275" />

      <View style={styles.header}>
        <Text style={theme== 'dark'? styles.title : lightMode.title}>World Countries</Text>
        <TextInput
          style={theme== 'dark'? styles.searchInput : lightMode.searchInput}
          placeholder="Search country name"
          placeholderTextColor="#858585"
          onChangeText={(text) => text && setSearch(text)}
        />
      </View>

      <FlatList
        style={styles.list}
        data={countries.filter((country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase())
        )}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CountryItem country={item} />}
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true);
          await loadData();
          setRefreshing(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
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
    color: "#fff",
    marginTop: 10,
  },
  list: {
    width: "95%",
    marginLeft: 4,
  },
  searchInput: {
    color: "#fff",
    borderBottomColor: "#c8cbfa",
    borderBottomWidth: 1,
    width: "40%",
    textAlign: "left",
  },
});

export default App;
