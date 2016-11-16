let routes = [];
let route;

route                       = {};
route.state                 = 'companyinfo';
route.url                   = '/companyinfo';
route.controller            = 'CompanyinfoController as cmp';
route.templateUrl           = 'companyinfo/_company.info.html';

routes.push(route);



export default routes

