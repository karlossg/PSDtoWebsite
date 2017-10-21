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
    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: './',
                src: ['**/*.{png,jpg,gif}'],
                dest: './'
            }]
        }
    },
    browserSync: {
        bsFiles: {
            src : 'css/*.css'
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
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Default task(s).
  grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch']);
};