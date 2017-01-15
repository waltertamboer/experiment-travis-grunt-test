module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    grunt.registerTask('test', 'Test the application.', function (arg1, arg2) {
        grunt.log.writeln('Testing the application!');
    });

    grunt.registerTask('publish', 'Publishes the application.', function () {
        grunt.log.writeln('Publishing the application!');
    });

    grunt.registerTask('default', [
        'test'
    ]);
};
