import { useState, useEffect } from "react";
const { Configuration, OpenAIApi } = require("openai");
const orgToken = 'org-7zrAzjdS6q2Ha1JZdQ3v29ue'
const apiKey = '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'
const configuration = new Configuration({
    organization: orgToken,
    apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);


export default function OpenAI(props) {
    const [image, setimage] = useState('')
    async function getimage(){
        console.log("loading")
        setimage('https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921')
        // const response = await openai.createImage({
        //     prompt: props.prompt,
        //     n: 1,
        //     size: "1024x1024",
        // });
        // console.log("loaded")
        // setimage(response.data.data[0].url);
        setimage('https://www.thespruce.com/thmb/ClRANI4jTWhkGeNhvJtArRhlGSA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-difference-between-trees-and-shrubs-3269804-hero-a4000090f0714f59a8ec6201ad250d90.jpg')
    }
    useEffect(() => {
        getimage()
    }, [])
    return(
        <img 
        src={image}
        style={{
            width:'50vw'
        }}
        />
    )
}
