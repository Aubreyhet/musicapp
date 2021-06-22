//全部api接口都从index.js导出
import { recommendMusic, newMusic } from "./Home";
import { hotSearch, resultSearch } from "./Search";

import { getLyricById, getSongById } from "./Play";

export const recommendMusicAPI = recommendMusic

export const newMusicAPI = newMusic

export const hotSearchAPI = hotSearch

export const resultSearchAPI = resultSearch
export const getLyricByIdAPI = getLyricById
export const getSongByIdAPI = getSongById


