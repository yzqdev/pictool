import { basename } from "@/utils/util";

export function downText(ps: string) {
  return `
## 关于两种下载方式
### 直接下载
会直接下载多个文件,需要同意浏览器下载多个文件,默认保存文件在\`下载\`目录
### 使用powershell下载
点击上面的下载链接,保存为run.ps1文件后,
打开cmd或者powershell命令行,执行\`.\\run.ps1\`,根据提示操作即可
这种方法可以在任何有权限的文件夹里面下载,使用了\`Invoke-WebRequest\`命令,可定制化程度高
当然你也可以自己复制下面的内容,自行创建run.ps1文件执行
\`\`\`
${ps}
\`\`\`
`;
}

export const allImgs = [
  {
    height: 700,
    size: 510.29,
    src: "https://i0.hdslb.com/bfs/new_dyn/cf60f461f4a9f74b9d5776279e70df1b1373037.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 511.16,
    src: "https://i0.hdslb.com/bfs/new_dyn/50f61457b5f1b69ec4ecac270d2870e81373037.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 541.19,
    src: "https://i0.hdslb.com/bfs/album/6a56ae9eee33de14fbae58308055f1f95d8d6805.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 504.93,
    src: "https://i0.hdslb.com/bfs/album/1c64a8a4b7937c498b37eae2b798491ff4b6d562.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 515.67,
    src: "https://i0.hdslb.com/bfs/album/0dd9cdc9eed1e1645e0c1bca12b77f3d8586c73f.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 591.98,
    src: "https://i0.hdslb.com/bfs/album/959c108bfd7388321f1468911c2deb4f9cf5ee0d.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 511.57,
    src: "https://i0.hdslb.com/bfs/album/f223a69083bc65b7ff7d6b831c596b4a6b22d7f9.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 568.82,
    src: "https://i0.hdslb.com/bfs/album/b361130f2e9e22c70de450295dadaf25654cf012.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 509.02,
    src: "https://i0.hdslb.com/bfs/album/8c0e79067a9890e56d95e9d3f9af310c0c299116.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 487.49,
    src: "https://i0.hdslb.com/bfs/album/5d92bfa33165ba11269e21d6b788ea6ef586f58a.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 477.42285,
    src: "https://i0.hdslb.com/bfs/album/0a75a254e639e7ce606099e1d6c2b75582dc4e8a.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 414.42,
    src: "https://i0.hdslb.com/bfs/album/6a5c4818a0acf5807f0d75e0916fd38cbed0b183.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 414.62,
    src: "https://i0.hdslb.com/bfs/album/0c68d3ec11529096a9910e86d9e76651d5585c30.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 408.04,
    src: "https://i0.hdslb.com/bfs/album/1e3a1993aa58bb90c8a37fdcc68da64a6920b306.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 535.73,
    src: "https://i0.hdslb.com/bfs/album/6d5db3a87257dae53d8ee04da891261a92b5946a.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 523.98,
    src: "https://i0.hdslb.com/bfs/album/934aa079f7c1895b613b89cb5c35ca9292c79747.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 525.76,
    src: "https://i0.hdslb.com/bfs/album/54a6dc1540490fd6a27af880f83b1f35232389a5.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 537.7842,
    src: "https://i0.hdslb.com/bfs/album/8b8784a26770bee9d3db0a05dba39eb628f5c253.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 548.7,
    src: "https://i0.hdslb.com/bfs/album/12d998ad9abb1c975824dd2ea3c4af3f090736cd.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 555.59,
    src: "https://i0.hdslb.com/bfs/album/1e4bf4c8240cab34d38f4e794e9ff749b10bf52e.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 595.35,
    src: "https://i0.hdslb.com/bfs/album/f2d1e3901580cf9d83799bb9892e479e781aa757.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 645.38,
    src: "https://i0.hdslb.com/bfs/album/4d02c3b0a1bd98e23bdda2e3c92101abd64287a4.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 551.14,
    src: "https://i0.hdslb.com/bfs/album/ef81a329c06927d98681c6ab91401bd84719881a.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 530.95,
    src: "https://i0.hdslb.com/bfs/album/cdd23cd79e5a860f8ff2c8c74ad920e4cd04ef37.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 563.38,
    src: "https://i0.hdslb.com/bfs/album/7cec0c90d16a5f8c50e3d9012a5228786f490d50.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 615.35,
    src: "https://i0.hdslb.com/bfs/album/699aa8fe5efc28d55095262dd74dcf0f229e4990.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 524.91,
    src: "https://i0.hdslb.com/bfs/album/e0d516732c9461973dbcd0a25c89a19294707553.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 564.97,
    src: "https://i0.hdslb.com/bfs/album/e3bcbc8451e4338281b58027ac38ab94b93d1591.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 539.21,
    src: "https://i0.hdslb.com/bfs/album/a30a93d4b6b01b0c02d836639c4d58d0eab2e959.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 524.91,
    src: "https://i0.hdslb.com/bfs/album/e0d516732c9461973dbcd0a25c89a19294707553.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 530.95,
    src: "https://i0.hdslb.com/bfs/album/cdd23cd79e5a860f8ff2c8c74ad920e4cd04ef37.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 469.53,
    src: "https://i0.hdslb.com/bfs/album/8f0f5435148c540b2eecf76c4c0aafb665c4d165.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 539.21,
    src: "https://i0.hdslb.com/bfs/album/a30a93d4b6b01b0c02d836639c4d58d0eab2e959.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 615.35,
    src: "https://i0.hdslb.com/bfs/album/699aa8fe5efc28d55095262dd74dcf0f229e4990.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 617.64,
    src: "https://i0.hdslb.com/bfs/album/2a435b8f72b485ce2cb24b3cb0eab81b29318750.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 563.38,
    src: "https://i0.hdslb.com/bfs/album/7cec0c90d16a5f8c50e3d9012a5228786f490d50.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 551.14,
    src: "https://i0.hdslb.com/bfs/album/ef81a329c06927d98681c6ab91401bd84719881a.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 564.97,
    src: "https://i0.hdslb.com/bfs/album/e3bcbc8451e4338281b58027ac38ab94b93d1591.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 601.01,
    src: "https://i0.hdslb.com/bfs/album/354059eefaec34789dc70c76267abcbd5253199f.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 540.64,
    src: "https://i0.hdslb.com/bfs/album/185ca9e54910fd64a7b7a7704d62ff2f34ef7b3a.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 575.25,
    src: "https://i0.hdslb.com/bfs/album/9dea4a014a934752ff3a3b81d744ba1433144181.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 536.68,
    src: "https://i0.hdslb.com/bfs/album/a1f94b8568c50b6df0f98d9244d06f8a7d3315c8.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 464.17,
    src: "https://i0.hdslb.com/bfs/album/9450494338e94d665b43a05ebfb120fbcc9485ab.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 570.07,
    src: "https://i0.hdslb.com/bfs/album/13b21559304709fa886198a66e5fcd0834957065.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 493.2,
    src: "https://i0.hdslb.com/bfs/album/8d5169a052fa19817cabd876f3616a8d658b9c76.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 518.65,
    src: "https://i0.hdslb.com/bfs/album/aee0616ef18ebd2b505c1ab41c30ea9f54cb6fe5.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 587.76,
    src: "https://i0.hdslb.com/bfs/album/1094f7fb4cc5c2a41366dbe5ca19011a510f579d.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 575.25,
    src: "https://i0.hdslb.com/bfs/album/9dea4a014a934752ff3a3b81d744ba1433144181.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 601.01,
    src: "https://i0.hdslb.com/bfs/album/354059eefaec34789dc70c76267abcbd5253199f.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 540.64,
    src: "https://i0.hdslb.com/bfs/album/185ca9e54910fd64a7b7a7704d62ff2f34ef7b3a.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 547.69,
    src: "https://i0.hdslb.com/bfs/album/d24357ae481a96adfcf14295328c9aba9732a31b.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 570.07,
    src: "https://i0.hdslb.com/bfs/album/13b21559304709fa886198a66e5fcd0834957065.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 471.35,
    src: "https://i0.hdslb.com/bfs/album/040e44e568a730efb87220475438ddd61373037.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 521.78,
    src: "https://i0.hdslb.com/bfs/album/5ea1c26863e4e5abc5837a7b85349ad4031f57f9.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 454.75,
    src: "https://i0.hdslb.com/bfs/album/92abb7949bca9ab459a54a41472a37d9c3862fd7.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 521.55,
    src: "https://i0.hdslb.com/bfs/album/50affdced6e4d4c8b5afef8a4eedabd78e816ca0.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 516.31,
    src: "https://i0.hdslb.com/bfs/album/2ac43619df2ae3dfa75a0bcf7390a0be99e50382.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 1080,
    size: 1688.03,
    src: "https://i0.hdslb.com/bfs/album/a2ebf010bf535f997a988bc85a741f270160fb11.jpg",
    tags: [],
    width: 1920,
  },
  {
    height: 700,
    size: 426.63,
    src: "https://i0.hdslb.com/bfs/album/f1e694eb2c490017edeba259431dab89408b69e2.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 1080,
    size: 1328.45,
    src: "https://i0.hdslb.com/bfs/album/710a4e9171540c4dce24de59824289e104061ee9.jpg",
    tags: [],
    width: 1920,
  },
  {
    height: 1125,
    size: 1604.95,
    src: "https://i0.hdslb.com/bfs/album/85241d25c316a4ad58fa6d7f803f264c0415ec4b.jpg",
    tags: [],
    width: 2000,
  },
  {
    height: 700,
    size: 572.6,
    src: "https://i0.hdslb.com/bfs/album/d3dbc99a2f6b3cd6371c3105d13835535153329d.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 397.49,
    src: "https://i0.hdslb.com/bfs/album/31fdf56a2abe3ad5cec8d6f11d0d97ff0ea7ef18.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 1080,
    size: 1454.7217,
    src: "https://i0.hdslb.com/bfs/album/f23b2617c8cb64a7d50e1692350841ab20dab70c.png",
    tags: [],
    width: 1920,
  },
  {
    height: 700,
    size: 547.57,
    src: "https://i0.hdslb.com/bfs/album/19609ef6d3a86368bb80f18d662bb2f012311cb8.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 464.53,
    src: "https://i0.hdslb.com/bfs/album/04f0e6f28070e4e052d561b30187e24ed2815711.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 655.35,
    src: "https://i0.hdslb.com/bfs/album/26ca67ae49a06a557ad1a5fa3372ec7ea514d907.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 628.64,
    src: "https://i0.hdslb.com/bfs/album/e70a897fa05845518ec8b7d7e20d50dd677c974f.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 508.96,
    src: "https://i0.hdslb.com/bfs/album/78eca14e9f2dacc13ecc2cae9f94644616fae1ec.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 597.1,
    src: "https://i0.hdslb.com/bfs/album/55e96abd389565b6185b78fdea5682473ebcf1dc.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 615.79,
    src: "https://i0.hdslb.com/bfs/album/b442de20358322d57e0a48135cde225359b41c11.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 541.41,
    src: "https://i0.hdslb.com/bfs/album/49e2deb116a4cfc7f1050da3a2f8bebfc14f12bb.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 540.31,
    src: "https://i0.hdslb.com/bfs/album/bec04895f3aed5c5d6ed2722304d164a25ec1ac6.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 540.31,
    src: "https://i0.hdslb.com/bfs/album/bec04895f3aed5c5d6ed2722304d164a25ec1ac6.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 1620,
    size: 1174.06,
    src: "https://i0.hdslb.com/bfs/album/3411422f7f8564a15e45b33712e440814a662029.jpg",
    tags: [],
    width: 1080,
  },
  {
    height: 1040,
    size: 953.5,
    src: "https://i0.hdslb.com/bfs/album/8db81f9f16b4bef190fa67f51162dd3fb62b5d2c.jpg",
    tags: [],
    width: 1220,
  },
  {
    height: 700,
    size: 528.89,
    src: "https://i0.hdslb.com/bfs/album/eb1e2f67df92f9ac47e70fbbdb88740c67d68fd1.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 541.41,
    src: "https://i0.hdslb.com/bfs/album/49e2deb116a4cfc7f1050da3a2f8bebfc14f12bb.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 628.64,
    src: "https://i0.hdslb.com/bfs/album/e70a897fa05845518ec8b7d7e20d50dd677c974f.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 615.79,
    src: "https://i0.hdslb.com/bfs/album/b442de20358322d57e0a48135cde225359b41c11.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 1534,
    size: 891.09,
    src: "https://i0.hdslb.com/bfs/album/b34dd93b0e62bf26addb49589194e6f63f0227c1.jpg",
    tags: [],
    width: 1000,
  },
  {
    height: 2111,
    size: 584.54,
    src: "https://i0.hdslb.com/bfs/album/2f7cfe79c26a3362ce9348b4e04c90bfea144bf3.jpg",
    tags: [],
    width: 1000,
  },
  {
    height: 700,
    size: 508.96,
    src: "https://i0.hdslb.com/bfs/album/78eca14e9f2dacc13ecc2cae9f94644616fae1ec.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 500,
    size: 159.25,
    src: "https://i0.hdslb.com/bfs/album/aea30a246da7fa4d3403d0bdc7863350bfd08e77.jpg",
    tags: [],
    width: 500,
  },
  {
    height: 500,
    size: 162.2,
    src: "https://i0.hdslb.com/bfs/album/a0e4c51a0053ebed80871f69120b873c7535aa4a.jpg",
    tags: [],
    width: 500,
  },
  {
    height: 700,
    size: 597.1,
    src: "https://i0.hdslb.com/bfs/album/55e96abd389565b6185b78fdea5682473ebcf1dc.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 655.35,
    src: "https://i0.hdslb.com/bfs/album/26ca67ae49a06a557ad1a5fa3372ec7ea514d907.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 547.57,
    src: "https://i0.hdslb.com/bfs/album/19609ef6d3a86368bb80f18d662bb2f012311cb8.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 545.6,
    src: "https://i0.hdslb.com/bfs/album/70d746697ac8d0df5c782f58318d39c4f6fc4a9b.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 486.77,
    src: "https://i0.hdslb.com/bfs/album/e0ffe02f2df55b064dc3224cb2e2c9611ec106c3.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 512.71,
    src: "https://i0.hdslb.com/bfs/album/97d3696d0cc9f0803364378b2295941a06132bf4.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 601.18,
    src: "https://i0.hdslb.com/bfs/album/7e87135d2ca35a5047670d431bd79e30005a4e0e.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 557.29,
    src: "https://i0.hdslb.com/bfs/album/cf40edd1e8d5faeee30e3555ec2d6ad6ce9e7815.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 497.25,
    src: "https://i0.hdslb.com/bfs/album/81aa1fad5be78e9d9e343135ddabad3996eb3db9.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 468.09,
    src: "https://i0.hdslb.com/bfs/album/ccdf5cac6c9a840fc303a6417bfee08a1d329da0.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 471.46,
    src: "https://i0.hdslb.com/bfs/album/e4da22f9b6cb677ba0e5829231a370baa3015210.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 454.28,
    src: "https://i0.hdslb.com/bfs/album/508f14b862e88d210c879a58f66dc07e45afb5a5.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 589.88,
    src: "https://i0.hdslb.com/bfs/album/3e6d5928de1f3c24ce83f437d55c40dcb13ff2e2.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 527.8,
    src: "https://i0.hdslb.com/bfs/album/7c0a0525c30eeed82dbc17b0d44927d619765c95.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 590.22,
    src: "https://i0.hdslb.com/bfs/album/0fa3ccf5622ab4b98404e93596cc493e9068ddb7.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 588.18,
    src: "https://i0.hdslb.com/bfs/album/681f38d8b458ae738a345ff503390cd8e8d0a6ed.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 557.29,
    src: "https://i0.hdslb.com/bfs/album/cf40edd1e8d5faeee30e3555ec2d6ad6ce9e7815.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 512.71,
    src: "https://i0.hdslb.com/bfs/album/97d3696d0cc9f0803364378b2295941a06132bf4.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 497.25,
    src: "https://i0.hdslb.com/bfs/album/81aa1fad5be78e9d9e343135ddabad3996eb3db9.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 1092,
    size: 641.36,
    src: "https://i0.hdslb.com/bfs/album/6f6d3f618389e46b29502ea2c7d6156d61a6acbd.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 544.76,
    src: "https://i0.hdslb.com/bfs/album/3b11c6a5952b1b0de30709dfdf77148f885526b5.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 550.1,
    src: "https://i0.hdslb.com/bfs/album/5a3c42f63ba3b080f937600b6fb7443702988365.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 1500,
    size: 465.87,
    src: "https://i0.hdslb.com/bfs/album/bb3965f16a39f6281686b82feea9957584d0dc23.jpg",
    tags: [],
    width: 959,
  },
  {
    height: 950,
    size: 416.14,
    src: "https://i0.hdslb.com/bfs/album/ffa46bcbbd45b709a9a8c40b856c8ad2c70192b2.jpg",
    tags: [],
    width: 1200,
  },
  {
    height: 1500,
    size: 512.56,
    src: "https://i0.hdslb.com/bfs/album/cb83c9822c244df7730b4b9a9224ecec6b9b8cfb.jpg",
    tags: [],
    width: 959,
  },
  {
    height: 830,
    size: 430.81,
    src: "https://i0.hdslb.com/bfs/album/91860d27384a94593d0fa44c3c04a2e2f12d5159.jpg",
    tags: [],
    width: 1131,
  },
  {
    height: 700,
    size: 589.88,
    src: "https://i0.hdslb.com/bfs/album/3e6d5928de1f3c24ce83f437d55c40dcb13ff2e2.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 527.8,
    src: "https://i0.hdslb.com/bfs/album/7c0a0525c30eeed82dbc17b0d44927d619765c95.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 522.33,
    src: "https://i0.hdslb.com/bfs/album/8efe8719c969caa5fe374a5d221d0593620eae69.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 429.91,
    src: "https://i0.hdslb.com/bfs/album/f11ca247fa28d7984057d791640c57304f193d30.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 561.74,
    src: "https://i0.hdslb.com/bfs/album/d0556ebb44ccffddffc822b0a5d0673a6fce4b30.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 485.67,
    src: "https://i0.hdslb.com/bfs/album/423afbf033b1c141c77ebfdbfe9524302bcb212c.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 634.58,
    src: "https://i0.hdslb.com/bfs/album/9e1909664a060eaf374c9aef97b046f27eed3ab2.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 430.36,
    src: "https://i0.hdslb.com/bfs/album/9a83be0297403090d6adc2b93ff38ca84699e692.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 547.61,
    src: "https://i0.hdslb.com/bfs/album/294b1568da061e85fb4adf232a3596713eb53064.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 517.4,
    src: "https://i0.hdslb.com/bfs/album/cb64610cad883d776ceb6cfaf8ee975e3b039296.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 477.48,
    src: "https://i0.hdslb.com/bfs/album/09d77481eac3dac5bebe1c0076166914f79f31f2.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 487.34,
    src: "https://i0.hdslb.com/bfs/album/edac10d5b218cb30339674e6c790d54772a653e8.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 454.28,
    src: "https://i0.hdslb.com/bfs/album/508f14b862e88d210c879a58f66dc07e45afb5a5.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 517.4,
    src: "https://i0.hdslb.com/bfs/album/cb64610cad883d776ceb6cfaf8ee975e3b039296.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 1500,
    size: 982.27,
    src: "https://i0.hdslb.com/bfs/album/06a3b843061fdf2cd7d069d72edbfa5c29a0057e.jpg",
    tags: [],
    width: 1000,
  },
  {
    height: 700,
    size: 546.23,
    src: "https://i0.hdslb.com/bfs/album/89aa5f63ae97c174a396b4079e73d803cf9f4434.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 419.01,
    src: "https://i0.hdslb.com/bfs/album/fdcd61221bc854762b3a21316007a70de7a18536.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 485.67,
    src: "https://i0.hdslb.com/bfs/album/423afbf033b1c141c77ebfdbfe9524302bcb212c.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 484.15,
    src: "https://i0.hdslb.com/bfs/album/50662b9b69223bbbd342224d655127c3c642f3be.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 477.48,
    src: "https://i0.hdslb.com/bfs/album/09d77481eac3dac5bebe1c0076166914f79f31f2.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 487.34,
    src: "https://i0.hdslb.com/bfs/album/edac10d5b218cb30339674e6c790d54772a653e8.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 429.91,
    src: "https://i0.hdslb.com/bfs/album/f11ca247fa28d7984057d791640c57304f193d30.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 634.58,
    src: "https://i0.hdslb.com/bfs/album/9e1909664a060eaf374c9aef97b046f27eed3ab2.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 561.74,
    src: "https://i0.hdslb.com/bfs/album/d0556ebb44ccffddffc822b0a5d0673a6fce4b30.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 492.85,
    src: "https://i0.hdslb.com/bfs/album/a931a9e8b46ad162e01ac6339a1f53046e3b29a5.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 476.78,
    src: "https://i0.hdslb.com/bfs/album/02976d20160b15686b3ee626217ce2618240ac39.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 454,
    src: "https://i0.hdslb.com/bfs/album/dec615d69f257e9f7055a43b6989e9f50f671a41.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 503.07,
    src: "https://i0.hdslb.com/bfs/album/f7fde49448dde408663bde5adc707fba1d49b08a.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 393.62,
    src: "https://i0.hdslb.com/bfs/album/7a71e894b9509d79ebcf20bc31261dda18b9a567.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 475.76,
    src: "https://i0.hdslb.com/bfs/album/624eb9d9cd8bfdbcee0f11e730fa0a89ef3eb2ba.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 488.16,
    src: "https://i0.hdslb.com/bfs/album/3ac275997b526c936eabc81a5f62043902bb31a0.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 479.37,
    src: "https://i0.hdslb.com/bfs/album/eb6a32c71e28ecce040cf181e620eac99953827b.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 495.67,
    src: "https://i0.hdslb.com/bfs/album/5584872fb7225eb2cff2339e0077c4fa53f68a0e.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 500,
    size: 157.22,
    src: "https://i0.hdslb.com/bfs/album/09529a032924f3d1bb4a828d4ff890ca78959d76.jpg",
    tags: [],
    width: 500,
  },
  {
    height: 500,
    size: 211.83,
    src: "https://i0.hdslb.com/bfs/album/8189e1a708f6e9b9016d8ad5b31ad6c1b8bb171b.jpg",
    tags: [],
    width: 500,
  },
  {
    height: 500,
    size: 185.65,
    src: "https://i0.hdslb.com/bfs/album/1ea4c1fa30c514de24e1bf750f17696e279cb839.jpg",
    tags: [],
    width: 500,
  },
  {
    height: 500,
    size: 213.3,
    src: "https://i0.hdslb.com/bfs/album/607240020e59b38f3416ef7e1ba74c2c0b42bd10.jpg",
    tags: [],
    width: 500,
  },
  {
    height: 500,
    size: 188.06,
    src: "https://i0.hdslb.com/bfs/album/bbe400f33944e41097b606f30b45bc2984106d5e.jpg",
    tags: [],
    width: 500,
  },
  {
    height: 500,
    size: 181.54,
    src: "https://i0.hdslb.com/bfs/album/6ce88c23fe0c9d23f3b472c4e3caea73dac6cd59.jpg",
    tags: [],
    width: 500,
  },
  {
    height: 500,
    size: 167.42,
    src: "https://i0.hdslb.com/bfs/album/d12dffcef3bbfb78e6352cad221ff8cff5a3f487.jpg",
    tags: [],
    width: 500,
  },
  {
    height: 500,
    size: 164.55,
    src: "https://i0.hdslb.com/bfs/album/87bb117624c7033c1c58708e9c917e69e6e75505.jpg",
    tags: [],
    width: 500,
  },
  {
    height: 500,
    size: 189.28,
    src: "https://i0.hdslb.com/bfs/album/a4b3e1c920ba5051575e6206a10b15d57a51e5d4.jpg",
    tags: [],
    width: 500,
  },
  {
    height: 700,
    size: 495.67,
    src: "https://i0.hdslb.com/bfs/album/5584872fb7225eb2cff2339e0077c4fa53f68a0e.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 500,
    size: 211.83,
    src: "https://i0.hdslb.com/bfs/album/8189e1a708f6e9b9016d8ad5b31ad6c1b8bb171b.jpg",
    tags: [],
    width: 500,
  },
  {
    height: 500,
    size: 225.45,
    src: "https://i0.hdslb.com/bfs/album/28c8611badc350b4931012f92fff3c4487745d7f.jpg",
    tags: [],
    width: 500,
  },
  {
    height: 700,
    size: 503.07,
    src: "https://i0.hdslb.com/bfs/album/f7fde49448dde408663bde5adc707fba1d49b08a.jpg",
    tags: [],
    width: 700,
  },
  {
    height: 700,
    size: 393.62,
    src: "https://i0.hdslb.com/bfs/album/7a71e894b9509d79ebcf20bc31261dda18b9a567.jpg",
    tags: [],
    width: 700,
  },
];
export function quanAvatars() {
  let list = allImgs.map((item) => {
    return {
      name: basename(item.src),
      url: item.src,
      src: item.src,
    };
  });
  return list;
}

export function getCodes() {
  let list = allImgs.map((item) => {
    return `"${item.src}"`;
  });
  return list.join(",");
}
