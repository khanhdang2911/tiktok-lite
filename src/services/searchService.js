import * as httpRequest from '~/utils/httpRequest';

const search = async (q, type = 'less') => {
    const respone = await httpRequest.get(`users/search`, {
        params: {
            q,
            type,
        },
    });
    return respone;
};

export default search;
