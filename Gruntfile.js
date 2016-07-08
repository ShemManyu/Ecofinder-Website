module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
            options: {
            },
            files: {
            'css/style.css': 'css/main.less'
            }
        },
        production: {
            options: {
            modifyVars: {
                imgPath: '"http://mycdn.com/path/to/images"',
                bgColor: 'red'
            }
            },
            files: {
            'css/style.css': 'css/main.less'
            }
        }
        }
    });
grunt.loadNpmTasks('grunt-contrib-less');
grunt.registerTask('less', 'less');
}