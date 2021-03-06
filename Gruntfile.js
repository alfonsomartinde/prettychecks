;(function () {

    "use strict";
    
    module.exports = function(grunt) {

        grunt.initConfig({
        
            pkg: grunt.file.readJSON('package.json'),

            // borramos los directorios de destino /dev y /pro
            clean: {
                dev: {
                    // borro /dev y /pro, ya que si cambia /dev, cambia /pro
                    src: ['dev', 'pro']
                },
                pro: {
                    // Para lanzar pro, necesitamos dev compilado, es decir
                    // no puedo borrar dev
                    src: ['pro']
                }
            },

            // dev/js > pro/js
            uglify: {
                pro: {
                    options: {
                        preserveComments: false,
                        mangle: {
                            except: ['_', 'jQuery', 'Backbone']
                        },
                        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                            '<%= grunt.template.today("m/d/yyyy") %>\\n' +
                            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
                            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
                            ' Licensed <%= _.pluck(pkg.license, "type").join(", ") %> */'
                    },
                    files: {
                        'pro/js/jquery.prettychecks.min.js': ['dev/js/jquery.prettychecks.js'],
                        'pro/js/commons.min.js': ['dev/js/commons.js']
                    }
                }
            },

            // Comprobamos errores
            jshint: {
                files: ['app/js/**/*.js','app/test/**/*.js'],
                options: {
                    ignores: ['app/js/vendors/*.js'],
                    curly: true,
                    eqeqeq: true,
                    immed: true,
                    latedef: true,
                    newcap: true,
                    noarg: true,
                    sub: true,
                    undef: true,
                    eqnull: true,
                    browser: true,
                    globals: {
                        $: true,
                        jQuery: true,
                        QUnit: true,
                        console: true,
                        module: true,
                        test: true,
                        start: true,
                        stop: true,
                        expect: true,
                        ok: true,
                        equal: true,
                        deepEqual: true,
                        strictEqual: true,
                        require: true
                    }
                },
                grunt: {
                    files: {
                        src: [
                            'Gruntfile.js'
                        ]
                    }
                }
            },

            copy: {
                dev: {
                    files: [
                        // app/img > dev/img
                        {
                            expand: true,
                            cwd: 'app/img/',
                            src: ['**/*'],
                            dest: 'dev/img/'
                        },
                        // app/test/js > dev/test/js
                        {
                            expand: true,
                            cwd: 'app/test/js/',
                            src: ['**/*'],
                            dest: 'dev/test/js/'
                        },
                        // app/js/vendors > dev/js/vendors
                        {
                            expand: true,
                            cwd: 'app/js/',
                            src: ['**/*'],
                            dest: 'dev/js/'
                        },
                        // bower/jquery > dev/js/vendors
                        {
                            expand: true,
                            cwd: 'bower/jquery/',
                            src: ['jquery.js','jquery.min.js','jquery.min.map'],
                            dest: 'dev/js/vendors/'
                        },
                        // bower/qunit > dev/test/qunit
                        {
                            expand: true,
                            cwd: 'bower/qunit/qunit/',
                            src: ['**/*'],
                            dest: 'dev/test/qunit/'
                        },

                    ]
                },
                pro: {
                    files: [
                        // dev/img > dev/img
                        {
                            expand: true,
                            cwd: 'dev/img/',
                            src: ['**/*'],
                            dest: 'pro/img/'
                        },
                        // dev/test > dev/test
                        {
                            expand: true,
                            cwd: 'dev/test/',
                            src: ['**/*'],
                            dest: 'pro/test/'
                        },
                        // dev/js/vendors > dev/js/vendors
                        {
                            expand: true,
                            cwd: 'dev/js/vendors',
                            src: ['**/*'],
                            dest: 'pro/js/vendors'
                        },
                        // dev/css/vendors > dev/css/vendors
                        {
                            expand: true,
                            cwd: 'dev/css/vendors',
                            src: ['**/*'],
                            dest: 'pro/css/vendors'
                        }
                    ]
                }
            },

            less: {
                dev: {
                    files: {
                        'dev/css/all.css': 'app/less/all.less'
                    }
                },
                pro: {
                    options: {
                        compress: true
                    },
                    files: {
                        'pro/css/all.min.css': 'app/less/all.less'
                    }
                },
            },
    
            jade: {  
                dev: {  
                    options:{  
                        pretty: true,  
                        data: function(){
                            return {developing: "true"};
                        }  
                    },  
                    files:[
                        // app/jade > dev/html
                        {
                            expand: true, 
                            src: "*.jade", 
                            dest: "dev/html/", 
                            ext: ".html", 
                            cwd: "app/jade/"
                        },
                        // app/test > dev/test
                        {
                            expand: true, 
                            src: "*.jade", 
                            dest: "dev/test/", 
                            ext: ".html", 
                            cwd: "app/test/"
                        },
                    ]
                },  
                pro: {  
                    options:{  
                        pretty: false,  
                        data: function(){
                            return {developing: "false"};
                        }
                    },
                    // app/jade > pro/html
                    files:[{
                        expand: true,
                        src: "*.jade",
                        dest: "pro/html/", 
                        ext: ".html", 
                        cwd: "app/jade/"
                    }]
                }  
            },

            // Server for "test" task (Travis)
            connect: {
                server: {
                    options: {
                        port: 3000
                    }
                }
            },

            // Configuramos los test
            qunit: {
                all: {
                    options: {
                        //timeout: 100,
                        // '--cookies-file': 'misc/cookies.txt',
                        //urls: ['http://localhost:<%= connect.server.options.port %>/dev/test/index.html']
                    },
                    files: [
                        { src: "dev/test/index.html" }
                    ]
                }
            },

            notify: {
                jshint: {
                    options: {
                        enabled: true,
                        max_jshint_notifications: 2,
                        message: "jshint iniciado!"
                    }
                },
                jade: {
                    options: {
                        enabled: true,
                        max_jshint_notifications: 2,
                        message: "jade iniciado!"
                    }
                },
                less: {
                    options: {
                        enabled: true,
                        max_jshint_notifications: 2,
                        message: "less iniciado!"
                    }
                }
            },

            watch: {
                jshint: {
                    files: ["app/js/{,*/}*.js","app/test/js/{,*/}*.js"], 
                    tasks: ["notify:jshint","jshint","copy:dev"]
                },
                jade: {
                    files: ["app/jade/{,*/}*.jade","app/test/{,*/}*.jade"],
                    tasks: ["notify:jade","jade:dev"]
                },
                less: {
                    files: ["app/less/{,*/}*.less"],
                    tasks: ["notify:less","less:dev"]
                }
            }

        });


        /**
         * Cargamos todos los tasks declarados en package.json
         *
         */

        require('matchdep')
            .filterDev('grunt-*')
            .forEach(grunt.loadNpmTasks);




        /**
         * Definimos las tareas
         *
         */

        grunt.registerTask("default", function (target) {
            grunt.task.run([
                "clean:dev",
                "jshint",
                "copy:dev",
                "jade:dev",
                "less:dev"
            ]);
        });

        grunt.registerTask("dev", function (target) {
            grunt.task.run([
                "clean:dev",
                "jshint",
                "copy:dev",
                "jade:dev",
                "less:dev",
                "connect:server",
                "qunit",
                "watch",
            ]);
        });

        grunt.registerTask("pro", function (target) {
            grunt.task.run([
                "clean:pro",
                "uglify:pro", 
                "copy:pro",
                "jade:pro",
                "less:pro"
            ]);
        });

        grunt.registerTask("test", function (target) {
            grunt.task.run([
                "clean:dev",
                "jshint",
                "copy:dev",
                "jade:dev",
                "less:dev",
                //"connect:server:keepalive",
                "qunit"
            ]);
        });

        grunt.event.on('qunit.fail.load', function (url) {
            grunt.log.ok("Error loading URL: " + url);
        });

        grunt.event.on('qunit.fail.timeout', function () {
            grunt.log.ok("QUnit times out");
        });

        grunt.event.on('qunit.spawn', function (url) {
            grunt.log.ok("Running PhantomJS test: " + url);
        });

        grunt.event.on('qunit.error.onError', function (message, stackTrace) {
            grunt.log.ok("------------------------------------------");
            grunt.log.ok("QUnit Error: " + message);
            grunt.log.ok("stackTrace: " + message);
            grunt.log.ok("------------------------------------------");
        });

        grunt.registerTask("heroku", function (target) {
            grunt.task.run([
                "clean:dev",
                "jshint",
                "copy:dev",
                "jade:dev",
                "less:dev"
            ]);
        });

    };
}());