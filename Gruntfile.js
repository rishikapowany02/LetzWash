module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: ['js/lib/jquery.min.js','js/lib/slick.min.js','js/lib/modernizer.js', 'js/lib/jquery.matchHeight-min.js','js/lib/jquery.counterup.min.js','js/lib/waypoints.min.js', 'js/main.js'],
        dest: 'js/build/global.min.js'
      }
    },
    watch: {
      files:['js/*.js'],
      tasks:['uglify']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'watch']);

};