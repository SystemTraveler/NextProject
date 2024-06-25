const API_IP = "localhost";
const API_Port = 524;
const AppID = "com.system.settings";

async function RequestPressmission(Pressmission) {
    const url = `http://${API_IP}:${API_Port}/`;
    const params = new URLSearchParams({
        RequestData: `APPID:${AppID};REQUESTING:PRESSMISSION;DATA:${Pressmission}`
    });

    try {
        const response = await fetch(`${url}?${params.toString()}`, {
            method: 'GET'
        });

        if (response.ok) {
            const text = await response.text();
            if (text === 'OK') {
                return 'APIOK';
            }
        }
        return 'APINONE';
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return 'APINONE';
    }
}