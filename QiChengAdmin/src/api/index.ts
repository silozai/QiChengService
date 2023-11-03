import request from '../utils/request';

export const fetchData = () => {
    return request({
        url: 'getToken.php',
        method: 'get'
    });
};
