import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {Bookmark, Comment, Favorite, More, Share} from "../../Icons";
import FitImage from "./FitImage";
import ReadMore from "@fawazahmed/react-native-read-more";
import advancedFormat from 'dayjs/plugin/advancedFormat' // load on demand
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
 function Post({post}){
    return(
        <View style={styles.post}>
           <View style={styles.header}>
              <View style={styles.headerLeft}>
                  <Image
                      style={styles.avatar}
                      source={
                          {
                              uri:post.user.avatar
                          }
                      } />
                  <Text style={styles.username}>{post.user.name}</Text>
              </View>
               <More  size={20} fill="#000"/>
           </View>
            <FitImage src={post.image}/>
          <View>
              <View style={styles.actions}>
                  <View style={styles.actionLeft}>
                      <TouchableOpacity>
                          <Favorite size={24} fill="#000"/>
                      </TouchableOpacity>
                      <TouchableOpacity>
                          <Comment size={24} fill="#000"/>
                      </TouchableOpacity>
                      <TouchableOpacity>
                          <Share size={24} fill="#000"/>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.actionRgiht}>
                      <TouchableOpacity>
                          <Bookmark size={24} fill="#000"/>
                      </TouchableOpacity>
                  </View>
              </View>
              <View>
                  <Text style={styles.likes}>{post.likes} likes</Text>
              </View>
              <View style={{marginHorizontal:15}}>
                  <Text style={styles.user}>{post.user.name}</Text>

                  <ReadMore
                      numberOfLines={3}
                      expandOnly={true}
                      seeMoreStyle={{color:'#999'}}
                      seeMoreText="more"
                      style={styles.description}
                      wrapperStyle={{marginBottom: 7}}
                  >
                                {post.user.description}
                  </ReadMore>
                  <TouchableOpacity style={{paddingVertical:7 }}>
                        <Text style={styles.comments}>View all {post.comments} comments</Text>
                    </TouchableOpacity>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={styles.date}>{ dayjs(post.user.date).fromNow() }</Text>
                      <Text style={styles.translation}>See Translations</Text>
                  </View>
              </View>
          </View>
        </View>
    );
}


export default Post;
const styles = StyleSheet.create({
    post:{
        marginBottom: 30,
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height: 49,
        paddingHorizontal: 15,
    },
    avatar:{
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 9,
    },
    headerLeft:{
        flexDirection:'row',
        alignItems:'center',

    },
    username:{
        fontSize: 12,
        fontWeight:'700',
        lineHeight: 22,
    },
    actions:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height: 40,
        paddingHorizontal: 15,
    },
    actionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 100,

    },
    actionRgiht: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    likes:{
        fontSize: 12,
        fontWeight:'700',
        lineHeight: 22,
        paddingHorizontal: 15,
    },
    user:{
        fontSize: 12,
        fontWeight:'700',
        lineHeight: 22,
    },
    description:{
        fontSize: 13,
        lineHeight: 22,
    },
    comments:{
        fontSize: 12,
        opacity: 0.5,
        fontWeight:'500',
    },
    date:{
        fontSize: 13,
        opacity: 0.5,
    },
    translation:{
        fontSize: 13,
        marginLeft: 10,
        fontWeight:'bold',
        color:'#000',
    }
});
