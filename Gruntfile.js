module.exports = function(grunt) {


    var applicationFiles = [

        // intro
        'public/js/application/intro.js',

        // templates
        'public/js/templates/<%= pkg.name %>.templates.js',

        // helper
        'public/js/helpers/util.js',
        'public/js/helpers/handlebarsHelper.js',

        // routes
        'public/js/routes/Router.js',
        'public/js/routes/IndexRoute.js',
        'public/js/routes/RelaySearchRoute.js',
        'public/js/routes/RelayDetailRoute.js',

        // models
        'public/js/models/defaults.js',
        'public/js/models/OnionooRelayDetail.js',
        'public/js/models/OnionooRelaySummary.js',
        'public/js/models/OnionooBandwidthHistory.js',
        'public/js/models/OnionooWeightsHistory.js',

        // controllers
        'public/js/controllers/ApplicationController.js',
        'public/js/controllers/IndexController.js',
        'public/js/controllers/RelayDetailController.js',
        'public/js/controllers/RelaySearchController.js',

        // views
        'public/js/views/HistoryGraphView.js',
        'public/js/views/RelaySummariesView.js'
    ];

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            standalone: ['build']
        },

        copy:{
            standalone: {
                files: [
                    {
                        // minimized css and js
                        expand: true,
                        flatten: true,
                        src: ['public/dist/*.min.*'],
                        dest: 'build/dist/'
                    },{
                        // fonts
                        expand: true,
                        flatten: true,
                        src: ['public/fonts/*'],
                        dest: 'build/fonts/'
                    },{
                        // images
                        expand: true,
                        flatten:true,
                        src: ['public/img/*'],
                        dest: 'build/img/'
                    },{
                        // rootlevel files
                        expand: true,
                        flatten: true,
                        src: ['public/favicon.ico', 'views/html/index.html'],
                        dest: 'build/'
                    }
                ]
            }
        },

        watch: {
            js_files:{
                files: ['public/js/**/*.js'],
                tasks: ['concat:dev']
            },
            hbs:{
                files: ['public/js/templates/*.handlebars'],
                tasks: ['emberTemplates']
            },
            css:{
                files: ['public/css/*.css'],
                tasks: ['cssmin']
            }
            /*
            //enable if you have no file watchers in your ide

            ,scss:{
                files: ['public/css/*.scss'],
                tasks: ['sass']
            }
            */
        },

        emberTemplates: {
            compile: {
                options: {
                    templateName: function(sourceFile) {
                        //public/js/templates
                        return sourceFile.replace(/public\/js\/templates\//, '');
                    }
                },
                files: {
                    "public/js/templates/<%= pkg.name %>.templates.js": "public/js/templates/*.handlebars"
                }
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            prod: {
                src: [
                    // vendor libs
                    'public/js/vendor/modernizr-2.6.2.min.js',
                    'public/js/vendor/sha1.js',
                    'public/js/vendor/jquery/jquery-1.10.1.min.js',
                    'public/js/vendor/d3/d3.v3.min.js',
                    'public/js/vendor/store/store.min.js',
                    'public/js/vendor/indexedDBShim/IndexedDBShim.min.js',
                    'public/js/vendor/jquery/jquery.indexeddb.js',

                    // emberjs
                    'public/js/vendor/handlebars-runtime/handlebars.runtime-1.0.0-rc.4.js',
                    'public/js/vendor/ember/ember-1.0.0-rc.6.min.js',

                    // foundation
                    'public/js/vendor/zepto/zepto.js',
                    'public/js/vendor/foundation/foundation.min.js',
                    'public/js/vendor/foundation/foundation.tooltips.js'].concat(applicationFiles),

                dest: 'public/dist/<%= pkg.name %>.js'
            },
            dev: {
                src: [
                    // vendor libs
                    'public/js/vendor/modernizr-2.6.2.min.js',
                    'public/js/vendor/sha1.js',
                    'public/js/vendor/jquery/jquery-1.10.1.js',
                    'public/js/vendor/d3/d3.v3.js',
                    'public/js/vendor/store/store.js',
                    'public/js/vendor/indexedDBShim/IndexedDBShim.js',
                    'public/js/vendor/jquery/jquery.indexeddb.js',

                    // emberjs
                    'public/js/vendor/handlebars-runtime/handlebars.runtime-1.0.0-rc.4.js',
                    'public/js/vendor/ember/ember-1.0.0-rc.6.js',

                    // foundation
                    'public/js/vendor/zepto/zepto.js',
                    'public/js/vendor/foundation/foundation.min.js',
                    'public/js/vendor/foundation/foundation.tooltips.js'].concat(applicationFiles),

                // workaround to avoid changing the script src in index.html
                dest: 'public/dist/<%= pkg.name %>.min.js'
            }

        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'public/dist/<%= pkg.name %>.min.js': ['public/dist/<%= pkg.name%>.js']
                }
            }
        },

        // compile scss files
        sass: {
            dist: {
                files: {
                    'public/css/style.css': 'public/css/style.scss'
                }
            }
        },

        //css related
        cssmin: {
            combine: {
                files: {
                    'public/dist/<%= pkg.name %>.css': [
                        'public/css/normalize.css',
                        'public/css/foundation.min.css',
                        'public/css/style.css',
                        'public/css/country-flags.css'
                    ]
                }
            },
            minify: {
                expand: true,
                cwd: 'public/dist/',
                src: ['<%= pkg.name %>.css'],
                dest: 'public/dist/',
                ext: '.min.css'
            }
        }
    });

    grunt.event.on('watch', function(action, filepath) {
        grunt.log.writeln('\n' + filepath + ' has ' + action);
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['emberTemplates', 'concat:prod', 'uglify', 'sass', 'cssmin']);
    grunt.registerTask('dev', ['emberTemplates', 'concat:dev', 'sass', 'cssmin', 'watch']);
    grunt.registerTask('standalone', ['clean', 'emberTemplates', 'concat:prod', 'uglify', 'sass', 'cssmin', 'copy:standalone']);
};