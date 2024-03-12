import React from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Signin() {
    return (
        <View style={{flexDirection:"column", backgroundColor: 'white'}}>
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
            <View style={{flexDirection: 'column',alignItems: 'center',padding: 20, marginTop: 20}}>
                <Image style={{ width: 150, height: 75}} source={require("../assets/icon/logo-1.png")} />
            </View>

        {/* View ก้อนที่ 3  */}
            <View style={{ padding : 20, marginLeft:15, marginRight:15 }}>
                <View style={{flexDirection: 'column', marginTop:-10}}>
                    <Text style={{ fontSize : 15, marginBottom:3}}>Username</Text>
                    <TextInput style={{ fontSize : 15 ,borderRadius:5, borderWidth:0.5, borderColor:'gray',paddingLeft:10 }} placeholder="Enter your name" />
                </View>

                <View style={{flexDirection: 'column', marginTop:40}}>
                    <Text style={{ fontSize : 15, marginBottom:3 }}>Email</Text>
                    <TextInput style={{ fontSize : 15 ,borderRadius:5, borderWidth:0.5, borderColor:'gray',paddingLeft:10 }} placeholder="Enter your email" />
                </View>

                <View style={{flexDirection: 'column', marginTop:40}}>
                    <Text style={{ fontSize : 15, marginBottom:3 }}>Password</Text>
                    <TextInput style={{ fontSize : 15 ,borderRadius:5, borderWidth:0.5, borderColor:'gray',paddingLeft:10 }} placeholder="Enter your password" />
                </View>

                <View style={{flexDirection: 'column', marginTop:40}}>
                    <Text style={{ fontSize : 15, marginBottom:3 }}>Confirm Password</Text>
                    <TextInput style={{ fontSize : 15 ,borderRadius:5, borderWidth:0.5, borderColor:'gray', paddingLeft:10 }} placeholder="Enter your password" />
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 60}}>
                    <TouchableOpacity style={{height: 30, width: 100, justifyContent: 'center', borderRadius: 5, borderWidth: 0.5, borderColor: '#7365a2', backgroundColor: '#7365a2'}}>
                        <Text style={{ fontSize : 15 , color:'white', textAlign:'center'}}>Sign In</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center', marginTop:5}}>
                    <Text style={{ fontSize : 10 }}>Do you have an account?</Text>
                    <TouchableOpacity style={{justifyContent: 'center'}}>
                        <Text style={{ fontSize: 10, color:'blue', marginLeft: 5}}>Click here to Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>    
    );
}
