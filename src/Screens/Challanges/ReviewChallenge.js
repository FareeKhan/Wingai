import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Review from '../../../assets/Svg/review.svg'
import ChatImg from '../../../assets/Svg/chatImg.svg'
import { color } from '../../Constant/colors'
import {  reviewData } from '../../Constant/data'
import CustomButton from '../../Components/CustomButton'

const ReviewChallenge = () => {


  const renderItem = ({ item, index }) => {
    return (
      <View style={{}}>
        {
          item?.userId == 1 ?
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <ChatImg />
              <View style={styles.otherUserBox}>
                <Text >{item?.text}</Text>
              </View>
            </View>
            :
            <View style={styles.mineMsgBox}>
              <Text style={{ marginBottom: 7, color: color.theme, fontWeight: "700" }}>{item?.emoji} </Text>
              <Text >{item?.text}</Text>
            </View>

        }

      </View>
    )
  }
  return (
    <View style={styles.mainContainer}>

      <View style={{ alignItems: "center" }}>
        <Review />
      </View>


      <Text style={styles.titleTxt}>Review your feedback</Text>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={reviewData}
        renderItem={renderItem}

      />


      <View style={{ marginBottom: 20 }}>
        <CustomButton
          title={'Continue'}
        />
      </View>

    </View>
  )
}

export default ReviewChallenge

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 15
  },
  titleTxt: {
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 20
  },
  otherUserBox: {
    backgroundColor: color.theme.concat(10),
    marginLeft: 10,
    padding: 12,
    borderRadius: 35,
    borderTopLeftRadius: 0,
    width: "80%",
    marginBottom: 10
  },
  mineMsgBox:{ 
    backgroundColor: color.theme.concat(10), 
    marginLeft: 10,
     padding: 12,
      borderRadius: 15, 
      borderBottomRightRadius: 0, 
      width: "80%",
       alignSelf: "flex-end",
        marginBottom: 10
       }

})