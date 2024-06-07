import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FirstComment from '../../assets/Svg/firstComment'
import { AntDesign } from '@expo/vector-icons';

const UserComments = ({ data }) => {

    const renderItem = ({item,index}) => {
        return (
            <View style={styles.container}>
                 {item?.svgImg}
                <View style={{ width: "82%", }}>
                    <View style={styles.comntTxt}>
                        <View style={{ flexDirection: "row", marginBottom: 5 }}>
                            <Text style={{ fontWeight: "600" }}>{item?.name}</Text>
                            <Text style={{ fontSize: 12, color: "#6A6A6A", marginLeft: 10 }}>25 Mins ago</Text>
                        </View>

                        <Text>
                            {item?.text}
                        </Text>
                    </View>
                    <View style={styles.socialIconBox}>
                        <View style={styles.likeBox}>
                            <AntDesign name="like2" size={16} color="#6A6A6A" />
                            <Text style={styles.likeFigure}>{item?.likes}</Text>
                        </View>
                        <Text style={{ color: "#6A6A6A" }}> | </Text>

                        <Text style={{ marginLeft: 5, fontSize: 13, color: "#6A6A6A" }}>Reply...</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View>
            <FlatList
            showsVerticalScrollIndicator={false}
             data={data}
             renderItem={renderItem}
             keyExtractor={(item)=>item?.id}
            />
        </View>
    )
}

export default UserComments

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    comntTxt: {
        backgroundColor: "#FF824810",
        padding: 10,
        paddingVertical: 14,

        borderRadius: 10,
        borderTopLeftRadius: 0
    },
    socialIconBox: {
        flexDirection: "row",
        alignItems: "center"

    },
    likeBox: {
        flexDirection: "row",
        alignItems: "center"

    },
    likeFigure: {
        marginHorizontal: 10,
        color: "#6A6A6A",
        fontSize: 13
    }
})