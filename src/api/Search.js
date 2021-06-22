import request from "@/utils/request.js";

export const hotSearch = params => request({
    url: '/search/hot',
    params
})


export const resultSearch = params => request({
    url: '/cloudsearch',
    params
})




