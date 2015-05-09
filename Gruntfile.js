module.exports = function(grunt) {

    grunt.registerTask("speak", function () {
        console.log("I’m speaking");
        });

        grunt.initConfig({ //holds configurations for tasks
                concat: {
                    js: {
                          src: ["js/1.js", "js/2.js"], //.js files to concat
                          dest: "build/js/scripts.js",
                        },
                    css: {
                            src: ["css/main.css", "css/theme.css"], //.css files to concat
                            dest: "build/css/styles.css",
                        },
                    },
                watch: {
                    js: {
                        files: ["js/**/*.js"], //any changes made to any .js files will run task
                        tasks: ["concat","uglify"], //concat task from above
                    },
                    css: {
                        files: ["css/**/*.css"], //any changes made to any .css files will run task
                        tasks: ["concat"], //concat task from above
                    },
                },
                 uglify: {
                    my_target: {
                        files: {
                            'build/js/output.min.js': ['build/js/scripts.js']
                        }
                    }
                }
            });

            grunt.loadNpmTasks("grunt-contrib-concat"); //runs the concat 
            grunt.loadNpmTasks("grunt-contrib-watch"); //runs the watch
            grunt.loadNpmTasks('grunt-contrib-uglify'); //runs the minify function
            grunt.registerTask("default", ["concat", "watch","uglify"]);
    }