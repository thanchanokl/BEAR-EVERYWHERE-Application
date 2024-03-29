import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function BearEverywhere(props) {

    const [goods, setGoods] = useState([]); 
    const loadGoods = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/thanchanokl/BEAR-EVERYWHERE-Application/main/info.json');
            let data = await promise.json();
            console.log("Load Data : " , data);
        //SET STATE
            setGoods(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }

    useEffect(() => {
        loadGoods();
    }, []);

    return (
        <View style={{flex: 1}}>
            
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
                    data={goods}
                    renderItem={({ item, index }) => {
                        console.log(item, index, item.uri);
                            return (
                                <View style={{ width:Dimensions.get("screen").width/2.5, marginRight:10, marginLeft:10, marginTop:5, marginBottom:20,borderColor:'gray', borderWidth: 0.5, borderRadius:10}}>
                                    <Image style={{width: '99%', height: 200, borderWidth: 0.5, borderTopLeftRadius:10, borderTopRightRadius:10}} source={{ uri: item.uri }} />
                                    <View style={{flexDirection:"column", padding: 10, justifyContentt:'center', alignItems: 'center'}}>
                                        <Text style={{fontSize:15, color:'black', textAlign:'center', flexWrap:'wrap', width:'90%',marginBottom:5}}> {item.title} </Text>
                                        <Text style={{fontSize:12, color:'gray', textAlign:'center', flexWrap:'wrap', width:'95%',marginBottom:5}}> {item.subtitle} </Text>
                                        <View style={{flexDirection:"row", justifyContent:'center'}}>
                                            <Text style={{fontSize:14, color:'black', textAlign:'center'}}> {item.price} </Text>
                                            <Text style={{fontSize:14, color:'black', textAlign:'center'}}> {item.Currency} </Text>
                                        </View>
                                    </View>
                                </View>
                            );
                        }
                    }
                    keyExtractor={item => item.id}/>   
            </View>
        </View>
    );
}

