import { Animated, FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import UserLogo from '../../../assets/Svg/userLogo.svg'
import ActiveRadio from '../../../assets/Svg/activeRadio.svg'
import { Entypo } from '@expo/vector-icons';
import { color } from '../../Constant/colors';
import Tooltip from 'react-native-walkthrough-tooltip';
import { categoryList } from '../../Constant/data';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../../Components/CustomButton';

const CreatePost = ({navigation}) => {
    const [toolTipVisible, setToolTipVisible] = useState()
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState();

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={[styles.categoryBox, { borderWidth: selectedCategory == item?.id ? 1 : 0, borderColor: color.theme }]} onPress={() => setSelectedCategory(item?.id)}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 5 }}>
                    <Text style={{ fontWeight: "600", fontSize: 16 }}>{item?.title}</Text>
                    {
                        selectedCategory == item?.id ?
                            <ActiveRadio />
                            :
                            <Ionicons name="radio-button-off" size={24} color="black" />
                    }

                </View>
                <Text>{item?.Description}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerBox}>
                <Text style={styles.headerTxt}>New Posts</Text>
                <View style={styles.headerCrossBox}>
                    <AntDesign name="close" size={22} color="black" />
                </View>
            </View>

            <TouchableOpacity onPress={()=>navigation.navigate('Challenges')} style={{ flexDirection: "row", alignItems: "center" }}>
                <UserLogo />
                <Text style={{ fontWeight: "600", marginLeft: 10 }}>Wade Warren</Text>
            </TouchableOpacity>


            <TextInput
                placeholder='Type Something...'
                numberOfLines={5}
                multiline
                style={styles.inputField}
            />

            <View style={{ flexDirection: "row" }}>
                <View style={styles.attachFileBox}>
                    <Entypo name="attachment" size={18} color={color.theme} />
                </View>

                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.attachFileBox}>
                    <Text style={{ color: color.theme }}>Select Category <AntDesign name="down" size={12} color={color.theme} /></Text>
                </TouchableOpacity>
            </View>



            <View style={{flex:1,justifyContent:"flex-end",marginBottom:15}}>
                <CustomButton
                    title={'Create Post'}
                    onPress={()=>navigation.navigate('Notifications')}
                />
            </View>


            {/* <Tooltip
                isVisible={toolTipVisible}
                content={<View>
                    <Text>Check this out!</Text>q
                    <Text>Check this out!</Text>
                </View>}
                placement="bottom"
                onClose={() =>setToolTipVisible(false)}
            >
                <TouchableOpacity onPress={()=>setToolTipVisible(true)} style={styles.touchable}>
                    <Text>Press me</Text>
                </TouchableOpacity>
            </Tooltip> */}

            {modalVisible ? (
                <Animated.View
                    style={{
                        backgroundColor: '#00000090',
                        position: 'absolute',
                        height: 1000,
                        width: 4000,
                        bottom: 0,
                    }}></Animated.View>
            ) : (
                <></>
            )}


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => setModalVisible(!modalVisible)} />
                    <View style={styles.modalView}>
                        <View style={[styles.headerBox, { paddingBottom: 10 }]}>
                            <Text style={[styles.headerTxt, { marginLeft: "auto", marginRight: "auto" }]}>Select Category</Text>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.headerCrossBox}>
                                <AntDesign name="close" size={22} color="black" />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={categoryList}
                            keyExtractor={(item) => item?.id}
                            renderItem={renderItem}

                        />





                        <CustomButton
                            title={"Select"}
                        />
                    </View>
                </View>
            </Modal>

        </View>
    )
}

export default CreatePost

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
        // marginBottom: 20
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
    inputField: {
        height: 150,
        paddingLeft: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: "#fff",
        elevation: 5,
        borderRadius: 10,
        marginTop: 15,
        paddingTop: 10
    },
    attachFileBox: {
        paddingLeft: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: "#fff",
        elevation: 5,
        borderRadius: 10,
        alignSelf: "flex-start",
        paddingRight: 10,
        paddingVertical: 5,
        marginLeft: 5
    },








    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        // alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        // margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },


    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    categoryBox: {
        backgroundColor: color.theme?.concat(20),
        marginBottom: 10,
        padding: 10,
        paddingVertical: 15,
        borderRadius: 10,
        borderTopLeftRadius: 0
    }
})