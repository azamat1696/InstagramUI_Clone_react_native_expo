import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Header from "./components/Header";
import Stories from "./components/Stories";
import Post from "../../components/shared/Post";
import Divider from "../../components/shared/Divider";
import posts from "../../data/posts";

export default function Index() {

    return (
        <View style={styles.container}>
            <Header/>
            <ScrollView
                 stickyHeaderIndices={[1]}
                 horizontal={false}
                 showsVerticalScrollIndicator={false}

            >
                <Stories/>
                <Divider/>
                {
                    posts.map((post)=>(
                        <Post key={post.id} post={post}/>
                    ))
                }
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
         flex:1,
         backgroundColor:'#fff',
         paddingTop: 16,
    }
})
