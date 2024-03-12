import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome, Entypo } from "@expo/vector-icons";

export default function AddTransaction() {
    return (
        <View style={{backgroundColor: "#ececec"}}>
            {/* View ก้อนที่ 1  */}
            <View style={{flexDirection: "row", marginVertical: 10}}>
                {/* ซ้าย */}
                <View style = {{flex: 1, padding:20, justifyContent: "space-between", alignItems: "center"}}>             
                        <Text style={{ fontSize: 10, color : "black" }}>Cancel</Text>
                </View>
                {/* ขวา */}
                <View style = {{flex: 1, padding:20, justifyContent: "space-between", alignItems: "center"}}>
                    <Text style={{ fontSize: 10, color : "black" }}>Add Transaction</Text>
                </View>
            </View>
            
            <View style={{ borderBottomWidth: 0.5}}></View>

            <View style={{ borderTopWidth: 0.5, marginTop: 20}}></View>
            {/* View ก้อนที่ 2  */}
            <View style={{ flexDirection : "row" }}>
                <View style={{ height: 25, width: 40, borderRadius : 4, borderBlockColor:'gray',borderWidth:1, justifyContent: 'center', alignItems: 'center', marginLeft: 10, marginTop:30}}>
                    <Text style={{ fontSize: 13, color : "gray" }}>THB</Text>
                </View>

                <View style={{ paddingLeft : 10, marginTop: 10, marginBottom: 10 }}>
                    <Text style={{ fontSize : 10 }}>Amount</Text>
                    <Text style={{ fontSize : 25, color : "black"  }}>0</Text>
                </View>
            </View>
            <View style={{ borderBottomWidth:0.5, marginLeft:60}}></View>

            {/* View ก้อนที่ 3  */}
            <View style={{ flexDirection : "row", marginTop:0 }}>
                <View style={{  height: 30, width: 30, borderRadius: 50/2,backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center', marginLeft: 15, marginTop: 10, marginBottom: 10}}>
                </View>
                <View style={{ justifyContent:'center', paddingLeft : 15, marginTop: 10, marginBottom: 10}}>
                    <Text style={{ fontSize: 20, color : "gray" }}>Select category</Text>
                </View>
                <View style={{ justifyContent:'center',paddingLeft:228,marginRight:20 , marginTop: 10, marginBottom: 10 }}>
                    <FontAwesome name="angle-right" size={20} color="gray" />
                </View>
            </View>
            <View style={{ borderBottomWidth:0.5, marginLeft:60}}></View>
  
            {/* View ก้อนที่ 4  */}
            <View style={{ flexDirection : "row", marginTop:0 }}>
                <View style={{  justifyContent: 'center', alignItems: 'center', marginLeft: 20, marginTop: 10, marginBottom: 10}}>
                    <FontAwesome name="commenting-o" size={20} color="gray" />
                </View>
                <View style={{ justifyContent:'center', paddingLeft : 18, marginTop: 10, marginBottom: 10}}>
                    <Text style={{ fontSize: 15, color : "black" }}>Note</Text>
                </View>
                <View style={{ justifyContent:'center',paddingLeft:335, marginTop: 10, marginBottom: 10 }}>
                    <FontAwesome name="angle-right" size={20} color="gray" />
                </View>
            </View>
            <View style={{ borderBottomWidth:0.5, marginLeft:60}}></View>

            {/* View ก้อนที่ 5  */}
            <View style={{ flexDirection : "row", marginTop:0 }}>
                <View style={{  justifyContent: 'center', alignItems: 'center', marginLeft: 20, marginTop: 10, marginBottom: 10}}>
                    <FontAwesome name="calendar-o" size={20} color="gray" />
                </View>
                <View style={{ justifyContent:'center', paddingLeft : 18, marginTop: 10, marginBottom: 10}}>
                    <Text style={{ fontSize: 15, color : "black" }}>Wednesday, 06 March 2024</Text>
                </View>
                <View style={{ justifyContent:'center',paddingLeft:185, marginTop: 10, marginBottom: 10 }}>
                    <FontAwesome name="angle-right" size={20} color="gray" />
                </View>
            </View>
            <View style={{ borderBottomWidth:0.5, marginLeft:60}}></View>

            {/* View ก้อนที่ 6  */}
            <View style={{ flexDirection : "row", marginTop:0 }}>
                <View style={{  justifyContent: 'center', alignItems: 'center', marginLeft: 20, marginTop: 10, marginBottom: 10}}>
                    <Entypo name="wallet" size={24} color="gray" />
                </View>
                <View style={{ justifyContent:'center', paddingLeft : 18, marginTop: 10, marginBottom: 10}}>
                    <Text style={{ fontSize: 15, color : "black" }}>cash</Text>
                </View>
                <View style={{ justifyContent:'center',paddingLeft:330, marginTop: 10, marginBottom: 10 }}>
                    <FontAwesome name="angle-right" size={20} color="gray" />
                </View>
            </View>
            <View style={{ borderBottomWidth:0.5, marginLeft:60}}></View>

            {/* View ก้อนที่ 7  */}
            <View style={{flexDirection: "row", marginVertical: 10}}>
                <View style = {{flex: 1, padding:20, justifyContent: "space-between", alignItems: "center"}}>             
                    <Text style={{ fontSize: 10, color : "green" }}>Add more details</Text>
                </View>
            </View>
        </View>    
    );
}