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


export async function sendAdvice({ tasks, date, mode,router}) {
  // tasks → activities 변환
    const activities = {}
    for (const t of tasks) {
    activities[t.name] = t.hour + t.min / 60
    }
    const payload = {
    date,
    mode,
    activities
    }
    try {
    console.log(payload)
    const res = await askAdvice(payload)
    console.log("AI 응답:", res)
    router.push({
    path: '/advice',
    query: { 
        percent: res.percent, 
        msg: res.advice_msg 
    }
    })
    return res
} catch (err) {
    console.error("AI 요청 실패:", err)
}
}