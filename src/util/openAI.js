import { useState, useEffect } from "react";
const { Configuration, OpenAIApi } = require("openai");
const token = 'org-7zrAzjdS6q2Ha1JZdQ3v29ue'
const orgToken = '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'
const configuration = new Configuration({
    organization: token,
    apiKey: orgToken,
});
const openai = new OpenAIApi(configuration);


export default function OpenAI(props) {
    const [image, setimage] = useState('')
    async function getimage(){
        console.log("loading")
        setimage('https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921')
        const response = await openai.createImage({
            prompt: props.prompt,
            n: 1,
            size: "1024x1024",
        });
        console.log("loaded")
        setimage(response.data.data[0].url);
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
