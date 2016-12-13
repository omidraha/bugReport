module.exports = function (grunt) {
    grunt.initConfig({

        clean: ['dist/*'],

        copy: {
            dist: {
                files: [
                    {
                        src: ['assets/**'],
                        dest: 'dist/'
                    }]
            }
        },

        cacheBust: {
            taskName: {
                options: {
                    deleteOriginals: true,
                    baseDir: './dist/assets/',
                    assets: [
                        './js/**/*.js'
                    ]
                },
                files: [{
                    expand: true,
                    cwd: './dist/assets/',
                    src: ['index.html', 'js/**/*.js']
                }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-cache-bust');
    grunt.registerTask('default', ['clean', 'copy', 'cacheBust']);

};
