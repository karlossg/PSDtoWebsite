module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
        options: {
          sourceMap: true
        },
        dist: {
          files: {
            'css/style.css': 'css/style.scss'
          }
        }
      },
    browserSync: {
        bsFiles: {
            src : ['css/*.css',
            'app/*.html']
        },
        options: {
            watchTask: true,
            server: {
                baseDir: "./"
            }
        }
    },
    watch: {
        scripts: {
            files: ['css/*.scss'],
            tasks: ['sass'],
            options: {
                spawn: false,
            },
        }
    }

  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Default task(s).
  grunt.registerTask('default', ['sass', 'browserSync', 'watch']);
};