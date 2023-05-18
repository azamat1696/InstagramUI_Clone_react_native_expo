import {StyleSheet,View,TouchableOpacity} from "react-native";
import {Logo,Message,Favorite,AddPhoto} from "../../../Icons";

function Header(){
    return(
        <View style={styles.header}>
          <View>
              <Logo size={104}/>
          </View>
          <View style={styles.actions}>
              <TouchableOpacity activeOpacity="0.2">
                  <View style={styles.dotContainer}>
                      <View  style={styles.dot}/>
                  </View>
                  <AddPhoto size={24} fill="#000"/>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity="0.2">
                  <View style={styles.dotContainer}>
                      <View  style={styles.dot}/>
                  </View>
                  <Favorite size={24}/>
              </TouchableOpacity>
                <TouchableOpacity activeOpacity="0.2">
                    <View style={styles.dotContainer}>
                        <View  style={styles.dot}/>
                    </View>
                   <Message />
                </TouchableOpacity>
          </View>
        </View>
    );
}
export default Header;


const styles = StyleSheet.create({
   header:{
         height: 44,
         backgroundColor:'#fff',
         flexDirection:'row',
         justifyContent:'space-between',
         alignItems:'center',
         paddingHorizontal: 15,
         paddingBottom: 5,

    },
    actions:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width: 120,

    },
    dot:{
        width: 9,
        height: 9,
        borderRadius: 8,
        backgroundColor:'#fe3650',

    },
    dotContainer:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        top: 0,
        right: 0,
        zIndex: 2,
        width: 11,
        height: 11,
        borderRadius: 10,
        borderWidth: 2,
        borderColor:'#fff',
    }
});
