var baseUrl = process.env.NODE_ENV == 'production' ? 'http://api.line.com' : 'http://api.test.com';

let urls = {
  login: "/api/canteen/home/checkLogin",
  register: "/api/canteen/home/register",
}

for (let item in urls) {
  item += baseUrl
}

export default urls