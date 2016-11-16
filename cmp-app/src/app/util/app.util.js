import angular from 'angular';

class AppUtil{
    constructor($stateProvider){
        'ngInject';

    }
    static ConfigureControllers(map, module) {
        Object.keys(map).forEach((key) => {
            let item = map[key];
            module.controller(AppUtil.GetCotrollerName(key), item.default);
        });

    }

    static ConfigureServices(map, module) {
        Object.keys(map).forEach((key) => {
            let item = map[key];
            module.service(AppUtil.GetServiceName(key), item.default);
        });
    }

    static ConfigureFilters(map, module) {
        Object.keys(map).forEach((key) => {
            let item = map[key];
            module.filter(AppUtil.GetFilterName(key), item.default);
        });
    }

    static ConfigureProviders(map, module) {
        Object.keys(map).forEach((key) => {
            let item = map[key];
            module.factory(AppUtil.GetProviderName(key), item.default);
        });
    }

    static ConfigureDirective(map, module) {
        Object.keys(map).forEach((key) => {
            let item = map[key];
            module.directive(AppUtil.GetDirectiveName(key), item.default);
        });
    }

    static ConfigureComponent(map, module) {
        Object.keys(map).forEach((key) => {
            let item = map[key];
            console.log(AppUtil.GetComponentName(key))
            module.component(AppUtil.GetComponentName(key), item.default);
        });
    }

    static ConfigRoute(routes,$stateProvider){
        Object.keys(routes).forEach((key) => {
            let item = routes[key];
            var routeList = item.default;
            for(var route of routeList){
                let stateName = route.state;
                console.log(stateName)
                // delete  route.state;
                var stateConfig = route;
                $stateProvider.state(stateName, stateConfig);
            }
        });

    }

//-----------------------------------------------------------------//

    static GetCotrollerName(key) {
        let part ;
        let name = '';
        var parts = key.split('.');
        for (let i =0; i<parts.length; i++) {
            part = parts[i];
            name += part.charAt(0).toUpperCase() + part.slice(1);
        }
        return name;
    }


    static GetServiceName(key) {
        let part ;
        let name = '';
        var parts = key.split('.');
        for (let i =0; i<parts.length; i++) {
            part = parts[i];
            name += part.charAt(0).toUpperCase() + part.slice(1);
        }
        return name.charAt(0).toLowerCase() + name.slice(1);
    }

    static GetFilterName(key) {
        let part ;
        let name = '';
        var parts = key.split('.');
        for (let i =0; i<parts.length; i++) {
            part = parts[i];
            name += part.charAt(0).toUpperCase() + part.slice(1);
        }
        return name.charAt(0).toLowerCase() + name.slice(1);
    }

    static GetProviderName(key) {
        let part ;
        let name = '';
        var parts = key.split('.');
        for (let i =0; i<parts.length; i++) {
            part = parts[i];
            name += part.charAt(0).toUpperCase() + part.slice(1);
        }
        return name.charAt(0).toLowerCase() + name.slice(1);
    }
    static GetDirectiveName(key) {
        let part ;
        let name = '';
        var parts = key.split('.');
        for (let i =0; i<parts.length-1; i++) {
            part = parts[i];
            name += part.charAt(0).toUpperCase() + part.slice(1);
        }
        return name.charAt(0).toLowerCase() + name.slice(1);
    }

    static GetComponentName(key) {
        let part ;
        let name = '';
        var parts = key.split('.');
        for (let i =0; i<parts.length-1; i++) {
            part = parts[i];
            name += part.charAt(0).toUpperCase() + part.slice(1);
        }
        return name.charAt(0).toLowerCase() + name.slice(1);
    }

    static GetAppName(path, prefix, suffix){
        let parts = path.split('/');
        let dir = parts[parts.length-1]
        if(prefix) dir = prefix + dir ;
        if(suffix) dir = dir + suffix ;
        return dir;
    }
}

export default AppUtil;
