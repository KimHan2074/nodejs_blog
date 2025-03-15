const newsRouter = require('./news');
const siteRouter = require('./site');
function route(app){

//   Route of news
  app.use('/news', newsRouter);

// // Route of search
//   app.use('/search', siteRouter);

  // Route of home
  app.use('/', siteRouter); 

//   app.get('/search', (req, res) => {
//     console.log(req.query.q);    /*lấy dữ liệu từ url*/
//     res.render('search');
//   })
  
//   app.post('/search', (req, res) => {
//     // console.log(req.query.q);    /*lấy dữ liệu từ url (query parameter)*/
//     console.log(req.body);
//     res.send("");
//   })
  // get, post, put, delete : http request method
  //  get: lấy dữ liệu
  // req: request (yêu cầu). Nó chứa những cái thông tin mà ứng dụng được gửi lên serve
  // res: response (phản hồi). Thông tin trả về là gì
  // 127.0.0.1 (địa chỉ IP => localhost)
}

module.exports = route;