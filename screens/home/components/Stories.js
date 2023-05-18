import {ScrollView, Image, Text, View,StyleSheet} from "react-native";
import stories from "../../../data/stories";
import {LinearGradient} from "expo-linear-gradient";

function Stories() {
    return (
        <View>
        <ScrollView
             style={styles.stories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}

        >
            { stories.map((story,index) => (
             <View style={styles.story} key={index}>
                 <LinearGradient
                     colors={['#FBAA47','#D91A46', '#A60F93']}
                     style={styles.cover}
                 >
                     <Image
                         source={
                             {
                                 uri: story.user.avatar
                             }
                         }
                         key={index}
                         style={styles.avatar}
                     />
                 </LinearGradient>
                 <Text style={styles.username} numberOfLines={1}> {story.user.name+' '+story.user.surname}</Text>
             </View>



    ))}
        </ScrollView>
    </View>
    );
}

export default Stories;
const styles = StyleSheet.create({
    stories:{
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
    },
    story:{
        width: 67,
        marginHorizontal: 8,
        alignItems:'center',
    },
    cover:{
        width: 65,
        height: 65,
        borderRadius: 33.5,
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 8,

    },
    avatar:{
        width: 60,
        height: 60,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: '#fff',
    },
    username:{
        fontSize: 12,
    }
});
