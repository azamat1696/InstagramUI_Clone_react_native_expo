import {Dimensions, Image} from "react-native";
import {useState} from "react";

function FitImage({src}){
     const [height, setHeight] = useState(0);
//1080x607
    const screenWidth = Dimensions.get('window').width;
    Image.getSize(src,(width,height)=>{
        const ratio = width/screenWidth;
       setHeight(height/ratio);
    })
      return(
        <Image
            style={{
                width:screenWidth,
                height
            }}
            source={{
                uri:src,
            }}
        />
    );
}
export default FitImage;
