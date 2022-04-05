import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')


export default StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderColor: '#E8E8E8',
        borderWidth: 1.2
      },
    
    // input: {
    //     backgroundColor: '#F6F6F6',
    //     width: '100%',
    //     borderRadius: 16,
    //     paddingVertical: 9.5,
    //     paddingHorizontal: 24
    //   },
    
    //   inputText: {
    //     fontSize: 14,
    //     fontFamily: 'SF-Pro-Display',
    //     fontWeight: '400',
    //     lineHeight: 24,
    //     letterSpacing: 0.5,
    //     color: '#6A788E',
    //     margin: 0,
    //     padding: 0
    //   },
    inputText: {
        fontFamily: 'MediumText',
      fontSize: 11,
        lineHeight: 24,
        letterSpacing: 0.5,
        color: '#6A788E',
        margin: 0,
        padding: 0
      },
    
      inputLabel: {
        fontSize: 12,
        fontFamily: 'SF-Pro-Display',
        fontWeight: '400',
        lineHeight: 24,
        letterSpacing: 0.5,
        color: '#6A788E',
        margin: 0,
        padding: 0
    
      },
    
    
    
      // heading
    heading: {
      fontFamily: 'SF-Pro-Display',
      fontSize: 24,
      fontWeight: '700',
      paddingVertical: 6,
      lineHeight: 29
    
    },
    
    
    // button
    mainButton: {
      backgroundColor: '#29276A',
      width: '100%',
      borderRadius: 8,
      paddingVertical: 15,
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    
    
    },
    
    // button
    gradientButton: {
      width: '100%',
      borderRadius: 16,
      paddingVertical: 15,
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    
    
    },
    iconButton: {
      width: '100%',
      borderRadius: 16,
      paddingVertical: 15,
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    
    
    },
    buttonText: {
        fontFamily: 'MediumText',
        fontSize: 11,
            textAlign: 'center',
    fontWeight: '600'
    },
    
    
    // text
    text: {
      fontFamily: 'SF-Pro-Display',
      fontSize: 12,
      fontWeight: '400',
      paddingVertical: 5,
      lineHeight: 24,
      letterSpacing: 0.5,
      color: '#6A788E'
    
    
    },
    
    
    // text
    gradientText: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '700'
    
    
    },
    
    
    // base text
    baseText: {
      fontFamily: 'SF-Pro-Display',
      fontSize: 14,
      fontWeight: '400',
      paddingVertical: 5,
      letterSpacing: 0.5,
      lineHeight: 24,
      color: '#6A788E'
    
    },
    
    
    
    // container
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: 30,
        paddingTop: 30
      },

    HotContainer:{
        marginVertical: 15 
    },
    GoBackContainer:{
        backgroundColor:'#b9dff7',
        width: 40,
        height:40,
        padding:10,
        borderRadius:40,
        marginHorizontal: 10,
        color:'#FFFFFF',
    },
    BackBtnContainer:{
        backgroundColor:'#b9dff7',
        width: 40,
        height: 40,
        // padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        color:'#FFFFFF',
    },
    PlusContainer:{
        backgroundColor:'#0087DB',
        color:'#FFFFFF',
        width: 55,
        height:55,
        padding:18,
        borderRadius:40,
        marginHorizontal: 10,
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 0,
        shadowColor: '#929292',
        shadowOffset: {width: -2, height: -2},
        shadowRadius: 2,
        shadowOpacity: 0.4,
    },

    BtnContainer:{
        color:'#1c81d3',
        width: 55,
        height:55,
        padding:18,
        borderRadius:40,
        marginHorizontal: 10,
        shadowColor: '#131111',
        shadowOffset: {width: -2, height: -2},
        shadowRadius: 2,
        shadowOpacity: 0.3,
    },
    btnText:{
        color: 'white',
        marginTop: 10,
        paddingHorizontal: 12,
        textAlign: 'center'
    },


    NextContainer:{
        backgroundColor:'#0087DB',
        width: 70,
        height: 25,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        marginHorizontal: 10,
        color:'#FFFFFF',

    },
    ChangeContainer:{
        backgroundColor:'#0087DB1A',
        width: 70,
        height: 25,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        marginHorizontal: 10,
        color:'#0087DB',

    },
    HotBtnContainer:{
        flexDirection:'row',
        backgroundColor:'#FFFFFF',
        padding:10,
        borderRadius:7,
        borderWidth:1,
        borderColor:'#b9dff7',
    },

    hostText:{
        fontFamily: 'BR-Firma-Bold',
        fontSize:18,
    },

    hostTitle:{
        paddingVertical:10,
        fontSize:15,
        flexWrap: 'wrap',
    
    },
    HostTextContainer:{
        flex: 1, 
        paddingLeft:10,
        paddingVertical:10
    },
    StashBox:{
        width:100,
        height:100,
        padding:10,
        borderWidth:2,
        borderRadius:10,
        borderColor:'#e1f0fa',
        shadowColor: "#e1f0fa",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        margin:4
    },
    StashBoxActive:{
        borderColor: '#0087DB',
        backgroundColor: '#DBF1FF',
    },
    anumText:{
        fontFamily: 'BR-Firma-Bold',
        fontSize:12,
        color:'#666666',
        padding:4,
    },
    anumDays:{
        fontFamily: 'BR-Firma-Bold',
        fontSize:13,
        paddingVertical:5
    },
    containSavingBtn:{
        margin:10,
        paddingVertical:10,
        borderBottomColor:'#b3b3b3',
        borderBottomWidth: 0.3,
    },
    SavingText:{
        fontSize:15,
        marginHorizontal:10,
    },
    LearnBtnActive:{
        marginVertical:5,
        marginHorizontal:5,
        backgroundColor:'#0087DB',
        padding:10,
        borderRadius:10
    },
    LearnBtn:{
        marginVertical:5,
        marginHorizontal:5,
        padding:10,
        borderRadius:10
    },
    learnTextActive:{
        color:'white',
        textAlign:'center'
    },
    learnText:{
        color:'#999',
        textAlign:'center'
    }
    
})