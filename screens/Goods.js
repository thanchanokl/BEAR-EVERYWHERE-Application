import React from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Goods() {
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
        
        <View style={{flexDirection: 'column',borderRadius:10, borderColor:'gray',borderWidth:0.5, marginLeft: 15, marginRight:15, marginTop:15, marginBottom:15}}>
        {/* View ก้อนที่ 2  */}
        <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'column',alignItems: 'center',marginTop: 15}}>
                <Image style={{width: 375,height: 375, borderRadius:10, borderColor:'gray',borderWidth:0.5}} source={require("../assets/icon/bear/bear-1.jpg")} />
            </View>   
        
            <View style={{flexDirection: 'column'}}>
                <TouchableOpacity style={{marginLeft: 345, marginTop: -50}}>
                    <FontAwesome name="heart" size={40} color="black" />
                </TouchableOpacity>
            </View>
        </View>

        {/* View ก้อนที่ 3  */}
        <View style={{flexDirection: 'column', marginLeft:20, marginRight:20, marginTop:10, marginBottom:10}}>
            <Text style={{fontSize: 20, textAlign: 'left'}}>Teddy Bear</Text>
            <Text style={{fontSize: 13, textAlign: 'left', marginBottom: 5}}>3 Ft Soft Sky purple Color Teddy Bear For Gift To Someone</Text>
            <Text style={{fontSize: 20, textAlign: 'left', color:'#eb6d79', backgroundColor:'#f6f4f4'}}>  XXX Baht</Text>
        </View> 

        <View style={{flexDirection: 'column',borderRadius:6, borderColor:'gray',borderWidth:0.5, marginLeft:20, marginRight:20, marginBottom:10}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 12, textAlign: 'left', marginLeft:5, marginRight:10, marginTop:5}}>Description</Text>
                <Text style={{fontSize: 12, textAlign: 'left', marginRight:80, marginTop:5}}>Designed in an attractive color from soft fabric, your kids will not stop hugging and squeezing this plush toy in their arms. This cutie soft toy is sure to become your child best companion. We are here for provide to your special ones this year by presenting them with an adorable soft toy. Crafted with perfection using the finest materials this.</Text>
            </View>
            <Text style={{fontSize: 12, textAlign: 'left', marginLeft:5, marginRight:5}}>Specifications</Text>
            <TouchableOpacity style={{justifyContent: 'center'}}>
                    <Text style={{ fontSize: 12, color:'blue', marginLeft:5, marginTop:-1, marginBottom:5}}>Read More</Text>
            </TouchableOpacity>
        </View> 
        
        {/* View ก้อนที่ 4  */}
        <View style={{flexDirection: 'row', marginLeft: 130, marginBottom: 15}}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 35, width: 130, borderRadius: 8, borderWidth: 0.5, borderColor: '#eb6d79', backgroundColor: '#eb6d79'}}>
                <FontAwesome name="flash" size={20} color="white" style={{marginRight: 5}} />
                <TouchableOpacity>
                    <Text style={{fontSize: 14, color: 'white', textAlign: 'center'}}>BUY NOW</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 35, width: 130, borderRadius: 8, borderWidth: 0.5, borderColor: '#7365a2', backgroundColor: '#7365a2', marginLeft:10}}>
                <FontAwesome name="shopping-cart" size={20} color="white" style={{marginRight: 5}} />
                <TouchableOpacity>
                    <Text style={{fontSize: 13, color: 'white', textAlign: 'center'}}>ADD TO CART</Text>
                </TouchableOpacity>
            </View>
        </View>

        </View>

        </View>    
        
    );
}

