import axios from "axios";

export async function evaluateDay(data) {
    const res = await axios.post("http://localhost/ai_api/evaluate", data);
    return res.data;
}

export async function askAdvice(data) {
    try {
    const res = await axios.post("http://localhost/ai_api/ask", data);
    return res.data; // { percent, advice_msg }
    } catch (err) {
    console.error("AI 요청 실패:", err);
    throw err;
    }
}