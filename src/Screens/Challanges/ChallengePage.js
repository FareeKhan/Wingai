import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Danger from '../../../assets/Svg/danger.svg'
import ChatImg from '../../../assets/Svg/chatImg.svg'
import { LinearGradient } from 'expo-linear-gradient'
import { color } from '../../Constant/colors'
import { chatData } from '../../Constant/data'
import { EvilIcons } from '@expo/vector-icons';

const ChallengePage = () => {


  const renderItem = ({ item, index }) => {
    return (
      <View style={{}}>
        {
          item?.userId == 1 ?
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <ChatImg />
              <View style={{ backgroundColor: color.theme.concat(10), marginLeft: 10, padding: 12, borderRadius: 35, borderTopLeftRadius: 0 }}>
                <Text >Hi there! I just wanted to say I Love</Text>
              </View>
            </View>
            :
            <View style={{ backgroundColor: color.theme.concat(10), marginLeft: 10, padding: 12, borderRadius: 15, borderBottomRightRadius: 0, width: "80%", alignSelf: "flex-end", marginBottom: 10 }}>
              <Text >{item?.text}</Text>
            </View>

        }

      </View>
    )
  }
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={['#FF824840', '#E6468340']}
        style={styles.headerBox}
      >
        <View style={styles.innerHeaderBox}>
          <Danger />
          <Text style={styles.headerTxt}>The Compliment Dare</Text>
        </View>

        <Text>Initiate a conversation with a fun or surprising fact. For instance, "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible!"</Text>
      </LinearGradient>





      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={chatData}
        renderItem={renderItem}

      />



      <View style={styles.bottomInputBox}>
        <TextInput
          placeholder='Type Something'
          style={{ paddingLeft: 10, width: "85%" }}
        />

        <LinearGradient colors={['#FF8248', '#E64683']} style={styles.inputBoxIcon}>
          <EvilIcons name="sc-telegram" size={24} color="#fff" />
        </LinearGradient>
      </View>
    </View>
  )
}

export default ChallengePage

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 15
  },
  headerBox: {
    marginBottom: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: color.theme
  },
  innerHeaderBox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  headerTxt: {
    fontSize: 16,
    fontWeight: "700",
    color: color.theme
  },
  bottomInputBox: {
    borderWidth: 1,
    marginBottom: 40,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#D3D3D3",
    borderRadius: 12
  },
  inputBoxIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10
  }
})