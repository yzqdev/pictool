import { basename } from "@/utils/util";

/**
 * gcore.jsdelivr.net
 * fastly.jsdelivr.net
 * originfastly.jsdelivr.net
 * quantil.jsdelivr.net
 * testingcf.jsdelivr.net
 * https://cdn.staticaly.com
 */
const baseCdn = `https://testingcf.jsdelivr.net/gh/yzqdev/pictool`;
const imgCdn = `${
  baseCdn.includes("static") ? baseCdn + "/main" : baseCdn
}/src/imgs/`;

const modules = import.meta.globEager("../imgs/*.*");

export interface Img {
  name: string;
  src: string;
  url: string;
}
let imgList: Img[] = [];
for (const [key, value] of Object.entries(modules)) {
  imgList.push({
    name: basename(key),
    src: value.default,
    url: `${imgCdn}${basename(key)}`,
  });
}
export { imgList };
