import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import UserLogo from '../../../assets/Svg/userLogo.svg'
import ThreeDots from '../../../assets/Svg/threeDots.svg'
import CommentIcon from '../../../assets/Svg/commentIcon.svg'
import Mine from '../../../assets/Svg/mine.svg'
import { Ionicons } from '@expo/vector-icons';
import UserComments from '../../Components/UserComments';
import { commentData } from '../../Constant/data';
import { LinearGradient } from 'expo-linear-gradient';
const Comments = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerBox}>
                <Text style={styles.headerTxt}>Comments</Text>
                <View style={styles.headerCrossBox}>
                    <AntDesign name="close" size={22} color="black" />
                </View>
            </View>

            <View style={styles.posterContainer}>
                <View style={styles.posterBox}>
                    <UserLogo />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.posterName}>Wade Warren</Text>
                        <Text style={{ color: "#6A6A6A" }}>2 mins ago</Text>
                    </View>
                    <ThreeDots style={{ marginLeft: "auto" }} />
                </View>

                <View style={styles.categoryBox}>
                    <Text style={{ fontSize: 12, color: "#fff", fontWeight: "600" }} >Category 1</Text>
                </View>

                <Text>Lorem ipsum dolor sit amet consectetur. Montes nec nam varius amet. Elementum neque vestibulum ut fames nullam venenatis viverra est dignissim. Etiam neque tempor viverra est massa tellus placerat eget sem.</Text>

                <View style={styles.divider} />

                <View style={styles.socialIconsBox}>
                    <View style={styles.iconTxtBox}>
                        <AntDesign name="like2" size={24} color="#FF8248" />
                        <Text style={{ marginLeft: 5, color: "#FF8248" }}>2,245</Text>
                    </View>

                    <View style={styles.iconTxtBox}>
                        <Ionicons name="eye-outline" size={24} color="black" />
                        <Text style={{ marginLeft: 5 }}>4,102</Text>
                    </View>

                    <View style={styles.iconTxtBox}>
                        <CommentIcon />
                        <Text style={{ marginLeft: 5 }}>25 Comments</Text>
                    </View>
                </View>
            </View>

            <UserComments
                data={commentData}
            />



            <View style={{ justifyContent: "flex-end", flex: 1, }}>

                <View style={{height:1,backgroundColor:"#D3D3D3",marginBottom:20,marginHorizontal:-15}} />
                <View style={{ flexDirection: "row", marginBottom: 20, justifyContent: "space-between" }}>
                    <Mine />

                    <View style={{ height: 40, borderRadius: 10, borderWidth: 1, paddingLeft: 10, width: "86%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderColor: "#D3D3D3" }}>
                        <TextInput
                            placeholder='Enter Text'
                            style={{width:"83%"}}
                        />

                        <LinearGradient colors={['#FF8248', '#E64683']} style={{ width: 30, height: 30, borderRadius: 50, alignItems: "center", justifyContent: "center", marginRight: 5 }}>
                            <AntDesign name="plus" size={19} color="#fff" />
                        </LinearGradient>

                    </View>
                </View>
            </View>

        </View>
    )
}

export default Comments

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 15
    },
    headerBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    headerTxt: {
        fontSize: 22,
        fontWeight: "700"
    },
    headerCrossBox: {
        width: 32,
        height: 32,
        backgroundColor: "#21212110",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    posterContainer: {
        borderWidth: 1,
        padding: 15,
        borderRadius: 15,
        borderColor: "#FF824850"
    },
    posterBox: {
        flexDirection: "row",
        alignItems: "center"
    },
    posterName: { fontSize: 15, fontWeight: "700", marginBottom: 5 },
    categoryBox: {
        backgroundColor: "#574AFB",
        alignSelf: "flex-start",
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 12
    },
    socialIconsBox: { flexDirection: "row", justifyContent: "space-between", marginTop: 3 },
    iconTxtBox: { flexDirection: "row", alignItems: "center" }

})