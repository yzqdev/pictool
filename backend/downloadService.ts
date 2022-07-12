import * as fs from "fs";
import axios from "axios";
import { join, basename } from "path";

export interface Avatar {
  height: number;
  size: number;
  src: string;
  tags: any;
  width: number;
}
export interface QuanImg {
  benghuai: any[];
  genshin: any[];
  fangzhou: any[];
}
export async function downloadImg(url: string, filePath: string) {
  // let rootPath=join(__dirname, '..','..', 'client',basename(url))
  let rootPath = join(filePath, basename(url));
  let writer = fs.createWriteStream(rootPath); //创建一个写入流

  console.log(url);
  console.log(`downloading file ${basename(url)}`);
  const response = await axios({
    url: url, //要下载的文件的url
    method: "GET",
    responseType: "stream",
  });
  response.data.pipe(writer);
}

export async function startDownload() {}

export async function getQuanMihoyo(req, res) {
  let list = await getQuanList(req.params.id);
  let arr = list
    .map((item) => {
      return item.post.images;
    })
    .flat(2);

  res.send({
    data: arr,
    len: arr.length,
  });
}

export async function getQuanList(id: string) {
  if (id == "quan") {
    id = "82642572";
  }
  let offset = 0;
  let is_last = false;
  let arr = [];
  console.log(`用户id${id}`);
  while (!is_last) {
    let { data } = await axios.get(
      `https://bbs-api.mihoyo.com/post/wapi/userPost?offset=${offset}&size=20&uid=${id}`
    );
    is_last = data.data.is_last;
    offset = data.data.next_offset;
    arr.push(...data.data.list);
  }
  return arr;
}

export async function getBilibili(req, res) {
  // let data={'success':true}
  let { data, imgList } = await dealwithBili();
  // await downloadAvatar(imgList)
  console.log("下载完成");
  res.send({
    data: data,
    imgList: imgList,
    // len: data.length
  });
}

export async function downloadAvatar(data: QuanImg) {
  let start = performance.now();
  let list = [...data.genshin, ...data.fangzhou, ...data.benghuai];

  for (let item of list) {
    await downloadImg(item.src, "src/imgs");
  }
  let end = performance.now();
  console.log("downloadAvatar cost is", `${end - start}ms`);
}

export async function dealwithBili() {
  let start = performance.now();
  function idToLink(item) {
    return `https://t.bilibili.com/${item}`;
  }
  let list = await getBiliList();
  let imgList: QuanImg = {
    benghuai: [],
    genshin: [],
    fangzhou: [],
  };
  let data = list
    .map((item) => {
      let module = item.modules.module_dynamic;
      if (module?.desc?.text.includes("崩坏")) {
        return {
          dynamicId: idToLink(item.id_str),
          benghuai: module.major?.draw?.items,
        };
      } else if (module?.desc?.text.includes("原神")) {
        return {
          dynamicId: idToLink(item.id_str),
          genshin: module.major?.draw?.items,
        };
      } else if (module?.desc?.text.includes("明日方舟")) {
        return {
          dynamicId: idToLink(item.id_str),
          fangzhou: module.major?.draw?.items,
        };
      } else {
        return false;
      }
    })
    .filter((item) => {
      return item;
    })
    .flat(2);
  for (let item of data) {
    if (item.genshin) {
      imgList.genshin.push(...item.genshin);
    }
    if (item.benghuai) {
      imgList.benghuai.push(...item.benghuai);
    }
    if (item.fangzhou) {
      imgList.fangzhou.push(...item.fangzhou);
    }
  }
  //data包含有dynamicid,res不包含,用来下载图片
  let end = performance.now();
  console.log("dealwithBili cost is", `${end - start}ms`);
  return { imgList, data };
}

export async function getBiliList() {
  let start = performance.now();
  let offset = "";
  let has_more = true;
  let arr = [];
  let header = {
    referer: "https://space.bilibili.com/1373037/dynamic",
    "sec-ch-ua":
      '.Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
    "sec-fetch-mode": "cors",
    origin: "https://space.bilibili.com",
    "use-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
  };
  while (has_more) {
    let res = await axios.get(
      `https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/space?offset=${offset}&host_mid=1373037&timezone_offset=-480`,
      {
        headers: header,
      }
    );
    let { data } = res;
    has_more = data.data.has_more;

    offset = data.data.offset;
    arr.push(...data.data.items);
  }
  let end = performance.now();
  console.log("getBiliList cost is", `${end - start}ms`);
  return arr;
}
