import { useState, useEffect } from "react";
import { saveInput } from "./History";
const { Configuration, OpenAIApi } = require("openai");
const orgToken = 'org-7zrAzjdS6q2Ha1JZdQ3v29ue'
const apiKey = 'sk-wrong'
const configuration = new Configuration({
    organization: orgToken,
    apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);


export default function OpenAI(props) {
    // console.log("From openAI " + props.prompt)
    const [image, setimage] = useState(['', '', ''])
    async function getimage(){
        console.log("loading new image with prompt " + props.prompt)
        // setimage('https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921')
        setimage(['https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921', 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921', 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921'])
        const response = await openai.createImage({
            prompt: props.prompt,
            n: 3,
            size: "1024x1024",
        });
        console.log("GOT IMAGE")
        setimage([response.data.data[0].url, response.data.data[1].url, response.data.data[2].url]);
        console.log("saved the image")
        saveInput(props.prompt, [response.data.data[0].url, response.data.data[1].url, response.data.data[2].url])
    }
    useEffect(() => {
        getimage()
    }, [props.prompt])
    return(
        <div style={{
            marginTop: '100px'
        }}
        >
            <img 
            src={image[0]}
            style={{
                width:'20vw',
                // marginTop: '100px'
            }}
            />
            <img 
            src={image[1]}
            style={{
                width:'20vw',
            }}
            />
            <img 
            src={image[2]}
            style={{
                width:'20vw',
            }}
            />
        </div>
    )
}
