import * as request from '~/utils/request';

const search = async (q, type = 'less') => {
    const respone = await request.get(`users/search`, {
        params: {
            q,
            type,
        },
    });
    return respone;
};

export default search;
