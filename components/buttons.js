import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/inputScreenStyles";

const Buttons = ({catName, yPos}) => {
  const goToCategory = () => {
    scroll.scrollTo({x: 0, y: yPos, animated: true});
  };
  return (
    <TouchableOpacity
      style={styles.iconstyle3}
      onPress={goToCategory}
    >
      <Image source={catName}/>
    </TouchableOpacity>
  );
};

export default Buttons;
