export const callGetRequest = async (req, res, url) => {
   
    const getConfig = {
        method: 'GET',
        url,
        headers: {
            'Content-Type': 'application/json',
            adminToken,
        },
    };
    const response = await axios(getConfig);
    return response.data;
};

export const callPostRequest = async (req, res, url, data) => {
    const cookies = new Cookies(req, res);
    const dataInToken = cookies.get('adminToken');
    const adminToken = jwt.sign(dataInToken, jwtPvtKey);
    const getConfig = {
        method: 'POST',
        url,
        headers: {
            'Content-Type': 'application/json',
            adminToken,
        },
        data: JSON.stringify(data),
    };
    const response = await axios(getConfig);
    return response.data;
};
