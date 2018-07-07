import {
    compose,
    curry,
    map,
    prop,
} from "ramda"

import Axios, {
    AxiosResponse,
} from "axios"


export const trace = curry((tag: string, x: any) => {
    // tslint:disable-next-line:no-console
    console.log(tag, x);
    return x;
});

const getUrl = (term: string) =>
    `/services/feeds/photos_public.gne?tags=${term}&format=json&jsoncallback=?`;

const mediaUrl = compose(prop('m'), prop('media'));

const srcs = compose(map(mediaUrl), prop('items'));

const getJSON = (url: string) =>
    Axios.get(url).then((resp: AxiosResponse) => {
        const removeParams = (resp.data as string).substr(1).substr(0, resp.data.length - 2)
        const result = srcs(JSON.parse(removeParams));
        return result
    });

export const app = compose(getJSON, getUrl);
