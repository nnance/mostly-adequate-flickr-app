import {
    compose,
    composeP,
    curry,
    map,
    prop,
} from "ramda"

import Axios from "axios"


export const trace = curry((tag: string, x: any) => {
    // tslint:disable-next-line:no-console
    console.log(tag, x);
    return x;
});

const getUrl = (term: string) =>
    Promise.resolve(`/services/feeds/photos_public.gne?tags=${term}&format=json&jsoncallback=?`);

const mediaUrl = compose(prop('m'), prop('media'));

export const srcs = compose(map(mediaUrl), prop('items'));

const trimFirstLast = (val: string) => val.substr(1).substr(0, val.length - 2);

const parseResult = compose(JSON.parse, trimFirstLast, prop('data'))

export const getJSON = composeP(parseResult, Axios.get, getUrl);

