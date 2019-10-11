const host = process.env.VUE_APP_API_HOST;
const payHost = process.env.VUE_APP_PAY_HOST;
const frontEndHost = process.env.VUE_APP_FRONT_END_HOST;

let urls = {
  news: "/journalismApi",
  music: "/musicBroadcasting",
}

for (let item in urls) {
  urls[item] = host + urls[item];
}

// 补充基础域名
urls["host"] = host;
urls["payHost"] = payHost;
urls["frontEndHost"] = frontEndHost;


export default urls