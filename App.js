import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  TextInput,
  Text,
  FlatList,
  ScrollView,
  Image
} from "react-native";
import { SearchBar, Header, Overlay } from "react-native-elements";
import emojiData from "./components/emoji";
import { categories, scrolls } from "./components/category";
import { styles } from "./styles/inputScreenStyles";
import Buttons from "./components/buttons";

const _categoryArray = [
  {
    yPos: scrolls.emojiIndex,
    catName: categories.emoji,
  },
  {
    yPos: scrolls.animalIndex,
    catName: categories.animals,
  },
  {
    yPos: scrolls.foodIndex,
    catName: categories.food,
  },
  {
    yPos: scrolls.travelIndex,
    catName: categories.transportation,
  },
  {
    yPos: scrolls.sportIndex,
    catName: categories.activities,
  },
  {
    yPos: scrolls.objectIndex,
    catName: categories.objects,
  },
  {
    yPos: scrolls.symbolIndex,
    catName: categories.symbols,
  },
  {
    yPos: scrolls.flagIndex,
    catName: categories.flags,
  },
];

const App = () => {
  const [arrayholder, setArrayholder] = useState([]);
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState("");
  const [offsety, setOffsetY] = useState(0);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    setData(emojiData);
    setArrayholder(emojiData)
  }, []);

  const searchData = (text) => {
    const newData = arrayholder.filter((item) => {
      const itemData = item.description.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setData(newData);
    setText(text);
  };
  const handlePress = (item) => {
    setContent(content + item.emoji);
  };


  return (
    <>
      <Header
        leftComponent={{
          text: "EMOJI",
          style: { color: "white", fontSize: 20 },
        }}
      />
      <View>
        <View style={styles.backgroundStyle}>
          <TouchableOpacity onPress={toggleOverlay} style={styles.iconStyle}>
            <Image source={require("./theme/images/happy.png")}/>
          </TouchableOpacity>
          <TextInput
            style={styles.inputStyle}
            placeholder="Type a message"
            value={String(content)}
            onChangeText={(text) => setContent(text)}
          />
        </View>
        <View>
        <Overlay isVisible={visible}>
          <View>
          <View style={styles.buttonStyle}>
            {_categoryArray.map((x, index) => (
              <Buttons key={index} yPos={x.yPos} catName={x.catName} />
            ))}
          </View>
          <View>
            <TextInput
              onChangeText={(text) => searchData(text)}
              value={text}
              placeholder="Search"
              style={{ backgroundColor: 'lightgrey', borderRadius: 20, height: 35, padding: 7 }}
            >
            </TextInput>
          </View>
          <View style={styles.listStyle}>
            <ScrollView 
            ref={c => {
              scroll = c
            }}
            onScroll={(event) => {
              setOffsetY(parseInt(event.nativeEvent.contentOffset.y))
            }}
            showsVerticalScrollIndicator={false}
            >
              <FlatList
                keyExtractor={(item, index) => item + index}
                getItemLayout={(data, index) => {
                  return { length: 33, offset: (33 + 4) * index, index };
                }}
                style={{ marginLeft: 9 }}
                disableVirtualization={true}
                initialNumToRender={350}
                numColumns={9}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handlePress(item)}>
                    <Text
                      style={{
                        fontSize: 25,
                        marginRight: 4,
                        marginBottom: 4,
                        color: "#BBBBBB",
                      }}
                    >
                      {item.emoji}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </ScrollView>
          </View>
          </View>
        </Overlay>
        </View>
      </View>
    </>
  );
};

export default App;
