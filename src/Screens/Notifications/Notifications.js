import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BackArrow from '../../../assets/Svg/arrow-left.svg'
import VerticalDots from '../../../assets/Svg/verticalDots.svg'
import { notificationsList } from '../../Constant/data'
import { color } from '../../Constant/colors'

const Notifications = ({navigation}) => {

    const [selected, setSelected] = useState('')
    const renderItem = ({ item, index }) => {
        return (
            <View key={index} style={styles.notifyBox}>
                <Text style={styles.dayStyle}>{item?.dateTitle}</Text>
                {
                    item?.notifications?.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => setSelected(item?.id)} style={[styles.innerNotify, {
                                backgroundColor: selected == item?.id ? color.theme?.concat(10) : "#fff",
                            }]}>
                                {item?.svgImg}
                                <View style={{ marginLeft: 10, width: "82%" }}>
                                    <Text style={{ fontWeight: "600", marginBottom: 5 }}>{item?.name}</Text>
                                    <Text style={{ fontWeight: "300" }}>{item?.message} <Text style={{ fontWeight: "600" }}>{item?.time}</Text></Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }


    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerBox}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                <BackArrow />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notifications</Text>
                <VerticalDots style={{ marginLeft: "auto" }} />
            </View>


            <FlatList
                data={notificationsList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 40,

    },
    headerBox: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginLeft: 15
    },
    notifyBox: {
        marginTop: 15,
        width: '100%',
    },
    dayStyle: {
        fontSize: 16,
        color: "#6A6A6A",
        fontWeight: "600",
        paddingHorizontal: 15,
        marginBottom: 10,

    },
    innerNotify: {
        flexDirection: "row",
        paddingVertical: 14,
        width: "100%",
        paddingHorizontal: 15

    }
})