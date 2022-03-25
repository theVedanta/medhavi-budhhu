import { useEffect, useState } from "react";
import publicIp from "public-ip";
import ReactAudioPlayer from "react-audio-player";

const App = () => {
    const [ip, setIp] = useState("");

    const getIp = async () => {
        const res = await publicIp.v4({
            fallbackUrls: ["/"],
        });
        setIp(res);
    };

    useEffect(() => {
        getIp();

        let str = "";
        for (let i = 0; i < 20000; i++) {
            str += "mdvi";
            if ((i + 1) % 100 === 0) {
                str += "<br/>";
            }
        }
        document.querySelector(".trans").innerHTML = str;

        document.querySelector("audio").play();
    }, []);

    return (
        <>
            <div className="h">
                <img src="/h.jpeg" alt="h" />
                <h1 id="ip">{ip ? ip : ""}</h1>
                <div className="trans"></div>
            </div>
            <ReactAudioPlayer src="/kany.mp3" autoPlay />
        </>
    );
};

export default App;
