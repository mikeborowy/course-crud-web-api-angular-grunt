﻿//rememeber to add *.js files to index page
registrationModule.factory('coursesRepository', function ($resource) {
    return{
        get:function(){
            // $q <=> promise library helps in handling assynchronous communication,
            //it is builded in $resource (ngResources in regisutration-module.js) library
            //return $resource('/api/Courses').get() -> get() for single object return,
            //for array return must be used query()
            return $resource('/api/Courses').query()
        }
    }
});