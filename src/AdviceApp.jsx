import { useEffect, useState } from "react";

const AdviceApp = () => {
    const [advice, setAdvice] = useState("Please click the button to get advice");
    const [loading, setLoading] = useState(false);
    const [count,setCount] = useState(0);

    async function getAdvice() {
        setLoading(true);
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        setLoading(false);
        setCount((c)=>c+1);
    }

    useEffect(function () {
        getAdvice();
    },[]);

    return (
        <div>
            <h3>Advice App</h3>

            <div className="advice-container">
            {loading ? (
                <p>Please wait...</p>
            ) : (
                <div>
                    <p className="advice-content">{advice}</p>
                    <button onClick={getAdvice}>Get Advice</button>
                </div>
            )}
            <p>You have read <strong>{count}</strong> pieces of advices.</p>
        </div>
        </div>
        
    );
};

export default AdviceApp;
