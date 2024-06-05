import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ChallengesList, filters } from '../../Constant/data'
import { LinearGradient } from 'expo-linear-gradient'
import { color } from '../../Constant/colors'
import { Ionicons } from '@expo/vector-icons';

const Challenges = () => {
    const [selectedFilter, setSelectedFilter] = useState(1)
    const [selectedCat, setSelectedCat] = useState(1)
    return (
        <LinearGradient
            end={{ x: 0, y: 0.8 }}
            start={{ x: 0.5, y: 0.2 }}
            style={styles.mainContainer} colors={['#E646810', '#fff']}>
            <Text style={styles.headerTitle}>Challenges</Text>

            <View>
                <ScrollView horizontal>
                    {
                        filters?.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => setSelectedFilter(item?.id)}>
                                    <LinearGradient style={[styles.filterBox, { borderColor: selectedFilter == item?.id ? color.theme : '#21212130' }]} colors={selectedFilter == item?.id ? ['#FF8248', '#E64683'] : ['#fff', '#fff']}>
                                        <Text style={{ color: selectedFilter == item?.id ? "#fff" : '#6A6A6A' }}>{item?.title}</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>

            <View style={{ width: "100%" }}>
                {
                    ChallengesList?.map((item, index) => {
                        return (
                            <TouchableOpacity onPress={() => setSelectedCat(item?.id)} key={index} style={[styles.catBox, { backgroundColor: selectedCat == item?.id ? color.theme.concat(20) : "#fff" }]}>
                                <Text style={{ fontWeight: "700" }}>{item?.title}</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ width: "92%" }}>
                                        <View style={styles.catInnerBox}>
                                            <Text style={{ fontSize: 12, color: "#fff" }} >Category {item?.catNo}</Text>
                                        </View>

                                        <Text style={styles.catDesc} numberOfLines={2}>{item?.description}</Text>
                                    </View>
                                    <LinearGradient style={styles.forwardBox} colors={['#FF8248', '#E64683']}>
                                        <Ionicons name="arrow-forward" size={20} color="#fff" />
                                    </LinearGradient>
                                </View>
                            </TouchableOpacity>

                        )
                    })
                }
            </View>

        </LinearGradient>
    )
}

export default Challenges

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 15
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "600",
    },
    filterBox: {
        borderWidth: 1,
        alignSelf: "baseline",
        borderRadius: 50,
        marginRight: 10,
        paddingHorizontal: 11,
        paddingVertical: 4,
        marginVertical: 15,

    },
    forwardBox: {
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    catBox: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        borderColor: "#21212120"
    },
    catInnerBox: {
        backgroundColor: "#574AFB",
        alignSelf: "baseline",
        paddingHorizontal: 12,
        paddingVertical: 2,
        borderRadius: 50,
        marginVertical: 5
    },
    catDesc:{
     color: "#6A6A6A",
      fontWeight: "300",
       fontSize: 13 
    }
})