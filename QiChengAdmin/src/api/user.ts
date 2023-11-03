import request from '../utils/request';

export const loginAPI = (datas:any) => {
    return request({
        url: '/api/getToken',
        method: 'post',
		data: datas
    });
};
