const gunMin = require('gun/gun.min.js')

const indexRoute = {

    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'Hello, world!';
    }, 
    options: {
        auth: false,
    }
}

const gunRoute  = {
    method: 'GET',
    path: '/gun/gun.js',
    handler: {
        file:  '../temp/gun/gun.min.js',
    },
    options: {
        auth: false,
    }
}

const gunNtsRoute = {
    method: 'GET',
    path: '/gun/nts.js',
    handler: {
        file:  '../temp/gun/nts.js',
    },
    options: {
        auth: false,
    }
}


const gunRootRoute = {
    method: 'GET',
    path: '/gunnode/{param*}',
    handler: {
      directory: {
        path: '../temp/gun',
        redirectToSlash: true,
        index: true
      }
    },
    options: {
        auth: false,
    }
}


const routes = [indexRoute, gunRoute, gunNtsRoute, gunRootRoute]
    ;


export default routes;
