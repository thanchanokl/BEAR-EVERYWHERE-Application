import React from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Homepage() {
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
        <View style={{flexDirection:"column", backgroundColor: 'white'}}>
            <StatusBar hidden={false} />
        {/* View ก้อนที่ 1  */}    
            <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',padding: 20, backgroundColor: "#eb6d79"}}>
                <TouchableOpacity style={{width:20,height: 20,marginTop: -15, marginRight: 20}}>
                    <Image style={{ width: 165.5, height: 37.5}} source={require("../assets/icon/logo-2.png")} />
                </TouchableOpacity>
                
                <TouchableOpacity style={{width:20,height: 20,marginTop: -5, marginRight: 20}}>
                    <Image style={{ width: 25, height: 25}} source={require("../assets/icon/menu-1.png")} />
                </TouchableOpacity>
            </View>
        {/* View ก้อนที่ 2  */} 
        <View style={{flexDirection: 'column',flexWrap: 'wrap',justifyContent: 'space-between', padding: 10, width: 150,height: 200, marginTop:20, marginBottom:20}}>
            <View style={{flexDirection: 'column', width: '120%', borderRadius: 10, borderColor: 'gray', borderWidth:0.5, marginLeft: 40}}>
                <View style={{alignContent: 'center', padding: 3}}>
                <Image style={{width: 150,height: 150}} source={require("../assets/icon/bear/71jq7H2A5PL.jpg")} />
                </View>
                <View style={{padding:5, marginTop: -20}}>
                    <Text style={{fontSize: 15, textAlign: 'center'}}>Teddy Bear</Text>
                    <Text style={{fontSize: 10, textAlign: 'center'}}>3 Ft Soft Sky purple Color Teddy Bear For Gift To Someone</Text>
                    <Text style={{fontSize: 12, textAlign: 'center'}}>XXX Baht</Text>
                </View>
            </View>

            <View style={{flexDirection: 'column', width: '120%', borderRadius: 10, borderColor: 'gray', borderWidth:0.5, marginLeft: 40}}>
                <View style={{alignContent: 'center', padding: 3}}>
                <Image style={{width: 150,height: 150}} source={require("../assets/icon/bear/71sBZmaEavL.jpg")} />
                </View>
                <View style={{padding:5, marginTop: -20}}>
                    <Text style={{fontSize: 15, textAlign: 'center'}}>Teddy Bear</Text>
                    <Text style={{fontSize: 10, textAlign: 'center'}}>3 Ft Soft Sky purple Color Teddy Bear For Gift To Someone</Text>
                    <Text style={{fontSize: 12, textAlign: 'center'}}>XXX Baht</Text>
                </View>
            </View>
        </View>

        <View style={{flexDirection: 'column',flexWrap: 'wrap',justifyContent: 'space-between', padding: 10, width: 150,height: 200, marginTop:20, marginBottom:20}}>
            <View style={{flexDirection: 'column', width: '120%', borderRadius: 10, borderColor: 'gray', borderWidth:0.5, marginLeft: 40}}>
                <View style={{alignContent: 'center', padding: 3}}>
                <Image style={{width: 150,height: 150}} source={require("../assets/icon/bear/71jq7H2A5PL.jpg")} />
                </View>
                <View style={{padding:5, marginTop: -20}}>
                    <Text style={{fontSize: 15, textAlign: 'center'}}>Teddy Bear</Text>
                    <Text style={{fontSize: 10, textAlign: 'center'}}>3 Ft Soft Sky purple Color Teddy Bear For Gift To Someone</Text>
                    <Text style={{fontSize: 12, textAlign: 'center'}}>XXX Baht</Text>
                </View>
            </View>

            <View style={{flexDirection: 'column', width: '120%', borderRadius: 10, borderColor: 'gray', borderWidth:0.5, marginLeft: 40}}>
                <View style={{alignContent: 'center', padding: 3}}>
                <Image style={{width: 150,height: 150}} source={require("../assets/icon/bear/71sBZmaEavL.jpg")} />
                </View>
                <View style={{padding:5, marginTop: -20}}>
                    <Text style={{fontSize: 15, textAlign: 'center'}}>Teddy Bear</Text>
                    <Text style={{fontSize: 10, textAlign: 'center'}}>3 Ft Soft Sky purple Color Teddy Bear For Gift To Someone</Text>
                    <Text style={{fontSize: 12, textAlign: 'center'}}>XXX Baht</Text>
                </View>
            </View>
        </View>

        <View style={{flexDirection: 'column',flexWrap: 'wrap',justifyContent: 'space-between', padding: 10, width: 150,height: 200, marginTop:20, marginBottom:20}}>
            <View style={{flexDirection: 'column', width: '120%', borderRadius: 10, borderColor: 'gray', borderWidth:0.5, marginLeft: 40}}>
                <View style={{alignContent: 'center', padding: 3}}>
                <Image style={{width: 150,height: 150}} source={require("../assets/icon/bear/71jq7H2A5PL.jpg")} />
                </View>
                <View style={{padding:5, marginTop: -20}}>
                    <Text style={{fontSize: 15, textAlign: 'center'}}>Teddy Bear</Text>
                    <Text style={{fontSize: 10, textAlign: 'center'}}>3 Ft Soft Sky purple Color Teddy Bear For Gift To Someone</Text>
                    <Text style={{fontSize: 12, textAlign: 'center'}}>XXX Baht</Text>
                </View>
            </View>

            <View style={{flexDirection: 'column', width: '120%', borderRadius: 10, borderColor: 'gray', borderWidth:0.5, marginLeft: 40}}>
                <View style={{alignContent: 'center', padding: 3}}>
                <Image style={{width: 150,height: 150}} source={require("../assets/icon/bear/71sBZmaEavL.jpg")} />
                </View>
                <View style={{padding:5, marginTop: -20}}>
                    <Text style={{fontSize: 15, textAlign: 'center'}}>Teddy Bear</Text>
                    <Text style={{fontSize: 10, textAlign: 'center'}}>3 Ft Soft Sky purple Color Teddy Bear For Gift To Someone</Text>
                    <Text style={{fontSize: 12, textAlign: 'center'}}>XXX Baht</Text>
                </View>
            </View>
        </View>

        <View style={{flexDirection: 'column',flexWrap: 'wrap',justifyContent: 'space-between', padding: 10, width: 150,height: 200, marginTop:20, marginBottom:20}}>
            <View style={{flexDirection: 'column', width: '120%', borderRadius: 10, borderColor: 'gray', borderWidth:0.5, marginLeft: 40}}>
                <View style={{alignContent: 'center', padding: 3}}>
                <Image style={{width: 150,height: 150}} source={require("../assets/icon/bear/71jq7H2A5PL.jpg")} />
                </View>
                <View style={{padding:5, marginTop: -20}}>
                    <Text style={{fontSize: 15, textAlign: 'center'}}>Teddy Bear</Text>
                    <Text style={{fontSize: 10, textAlign: 'center'}}>3 Ft Soft Sky purple Color Teddy Bear For Gift To Someone</Text>
                    <Text style={{fontSize: 12, textAlign: 'center'}}>XXX Baht</Text>
                </View>
            </View>

            <View style={{flexDirection: 'column', width: '120%', borderRadius: 10, borderColor: 'gray', borderWidth:0.5, marginLeft: 40}}>
                <View style={{alignContent: 'center', padding: 3}}>
                <Image style={{width: 150,height: 150}} source={require("../assets/icon/bear/71sBZmaEavL.jpg")} />
                </View>
                <View style={{padding:5, marginTop: -20}}>
                    <Text style={{fontSize: 15, textAlign: 'center'}}>Teddy Bear</Text>
                    <Text style={{fontSize: 10, textAlign: 'center'}}>3 Ft Soft Sky purple Color Teddy Bear For Gift To Someone</Text>
                    <Text style={{fontSize: 12, textAlign: 'center'}}>XXX Baht</Text>
                </View>
            </View>
        </View>
        </View>
        </ScrollView>
    );
}

