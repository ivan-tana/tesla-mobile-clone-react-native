import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    Header: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '15%',
        
        alignItems: 'center',
    },
    Carcontainer: 
    {
        width: '100%',
        height: '100%',
        resizeMode:'cover',
    },
    Heading:
    {
        fontSize:45,
        fontWeight:'500',
    },
    Text:
    {
        color: "rgba(0,0,0,0.5)",
        fontSize:16,
    }
  });