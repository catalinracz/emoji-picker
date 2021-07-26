import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    backgroundStyle: {
      marginTop: 10,
      backgroundColor: "lightgrey",
      height: 50,
      borderRadius: 5,
      marginHorizontal: 15,
      flexDirection: "row-reverse",
      marginBottom: 10,
    },
    inputStyle: {
      flex: 1,
      marginLeft: 20,
      alignSelf: "center",
    },
    iconStyle: {
      alignSelf: "center",
      marginRight: 10
    },
    buttonStyle: {
      alignItems: 'center',
      flexDirection: "row",
      margin: 3,
    },
    iconstyle3: {
      alignSelf: "center",
      marginLeft: 13,
    },
    buttonPressed: {
      margin: 3,
      flexDirection: "row",
      borderTopWidth: 2.5,
      borderTopColor: "green",
    },
    listStyle: {
      height: 220
    }
  });