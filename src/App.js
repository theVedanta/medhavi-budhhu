import { useEffect, useState } from "react";
import publicIp from "public-ip";

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
    }, []);

    return (
        <div className="h">
            <img src="/h.jpeg" alt="h" />
            <h1 id="ip">{ip ? ip : ""}</h1>
        </div>
    );
};

export default App;
