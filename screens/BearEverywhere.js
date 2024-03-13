import React from 'react';
import { Dimensions, FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function BearEverywhere(props) {

const tours = [
    { "id": "1", "title": "9In Dream Bright Bear", "subtitle":"3 Ft Teddy Bear For Gift To Someone", "description":"Designed in an attractive color from soft fabric, your kids will not stop hugging and squeezing this plush toy in their arms. This cutie soft toy is sure to become your child best companion. We are here for provide to your special ones this year by presenting them with an adorable soft toy. Crafted with perfection using the finest materials this.","price":"499", "Currency":"THB", "uri": "https://raw..githubusercontent.com/thanchanokl/BEAR-EVERYWHERE-Application/blob/main/assets/icon/bear/bear-1.jpg"},
    { "id": "2", "title": "Paris Motor Show", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-2.jpg" , "month" : "DEC", "date" : "31", "datetime" : "Thu, DEC 30, 09.00 am", "place" : "Paris"},
    { "id": "3", "title": "Bearded Theory Spring", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-3.jpg" , "month" : "JAN", "date" : "01", "datetime" : "Thu, JAN 01, 09.00 am", "place" : "Canada"},
    { "id": "4", "title": "BBC Music Introducing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-4.jpg" , "month" : "JAN", "date" : "11", "datetime" : "Thu, JAN 11, 09.00 am", "place" : "USA"},
    { "id": "5", "title": "Start-Up Meeting 2022", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg" , "month" : "JAN", "date" : "21", "datetime" : "Thu, JAN 21, 09.00 am", "place" : "Thailand"}
];





    return (
        <View style={{}}>
        <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',padding: 20, backgroundColor: "#eb6d79"}}>
                <TouchableOpacity style={{width:20,height: 20,marginTop: -15, marginRight: 20}}>
                    <Image style={{ width: 165.5, height: 37.5}} source={require("../assets/icon/logo-2.png")} />
                </TouchableOpacity>
                
                <TouchableOpacity style={{width:20,height: 20,marginTop: -5, marginRight: 20}}>
                    <Image style={{ width: 25, height: 25}} source={require("../assets/icon/menu-1.png")} />
                </TouchableOpacity>
            </View>
            <View style={{padding:20}}>
            <FlatList
                horizontal={false}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={tours}
                renderItem={
                    ({ item, index }) => {
                        return (
                            <View style={{ marginRight: 15, marginLeft:15, marginBottom:15, marginTop:15,borderColor:'gray', borderWidth: 0.5, borderRadius:10, justifyContent:'center'}}>
                                <Image style={{width: 160, height: 160, borderWidth: 0.5, borderTopLeftRadius:10, borderTopRightRadius:10}} source={{ uri: item.uri }} />
                                <View style={{flexDirection:"column", padding: 10, justifyContent:'center'}}>
                                    <Text style={{fontSize:15, color:'red', textAlign:'center', flexWrap:'wrap', width:'90%'}}> {item.title} </Text>
                                    <Text style={{fontSize:10, color:'gray', textAlign:'center', flexWrap:'wrap', width:'70%'}}> {item.subtitle} </Text>
                                    <View style={{flexDirection:"row", justifyContent:'center'}}>
                                        <Text style={{fontSize:14, color:'black', textAlign:'center'}}> {item.price} </Text>
                                        <Text style={{fontSize:14, color:'black', textAlign:'center'}}> {item.Currency} </Text>
                                    </View>
                                </View>
                            </View>
                            
                        );

                    }
                }
                keyExtractor={item => item.id}
            />   
        </View>
        </View>
    );
}

