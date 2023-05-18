import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from "react-native";
import HomeScreen from "./screens/home";
 import ProfileScreen from "./screens/Profile";
import ReelScreen from "./screens/Reel";
import ShopScreen from "./screens/Shop";
import ExploreScreen from "./screens/Explore";
import {
    Home,
      AddPhoto,
      HomeFilled,
     Reel,
    ReelFilled,
    ExploreFilled,
    Explore, AddPhotoFilled
} from "./Icons";
  const Stack = createBottomTabNavigator();

export default function Screens(){
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#262626',
        }}>
            <Stack.Screen
                name="home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused,color,size}) => {
                        if (focused)
                           return <HomeFilled size={size} fill={color}/>

                        return <Home size={size} fill={color} />
                    }

                }}

            />
            <Stack.Screen
                name="explore"
                component={ExploreScreen}
                options={{
                    tabBarIcon: ({focused,color,size}) => {
                        if (focused)
                            return <ExploreFilled size={size} fill={color}/>

                        return <Explore size={size} fill={color} />
                    }

                }}

            />

            <Stack.Screen
                name="reel"
                component={ReelScreen}
                options={{
                    tabBarIcon: ({focused,color,size}) => {
                        if(focused)
                           return <ReelFilled size={size} fill={color}/>
                        return <Reel size={size} fill={color}/>
                    }
                }}
            />
            <Stack.Screen
                name="addphoto"
                component={ShopScreen}
                options={{
                    tabBarIcon: ({focused,color,size}) => {
                        if (focused)
                            return <AddPhotoFilled size={size} fill={color}/>

                        return <AddPhoto size={size} fill={color} />
                    }                }}
            />
            {/*<Stack.Screen*/}
            {/*    name="profile"*/}
            {/*    component={ProfileScreen}*/}
            {/*    options={{*/}
            {/*        tabBarIcon: ({focused,color,size}) => ( <Profile size={size} /> )}}*/}
            {/*/>*/}
            <Stack.Screen
                name="profile1"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({focused,color,size}) => (
                        <Image
                            style={{width: 30, height: 30, borderRadius: 15, borderWidth: 1, borderColor: focused ? '#000' : 'transparent' }}
                            source={{uri: 'https://media.licdn.com/dms/image/D4E03AQGbecjlF7c2iQ/profile-displayphoto-shrink_100_100/0/1648481865133?e=1689206400&v=beta&t=q9PFPDnnAp6JYBP0xhDFpy92TmNuwQJnEwvud2ZnnnU'}}
                         />
                    )  }}
            />
        </Stack.Navigator>
    )
}
