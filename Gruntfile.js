module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					includePaths: [ 'jspm_packages/github/twbs/bootstrap-sass@3.3.5/assets/stylesheets' ]
				},
				files: {
					'dist/css/app.css': [ 'src/scss/app.scss' ]
				}
			}
		},
		babel: {
			options: {
				sourceMap: true
			},
			dist: {
				files: [{
					expand: true,
					dest: 'dist/',
					cwd: 'src/',
					src: '**/*.js'
				}]
			}
		},
		watch: {
			files: [ 'src/**/*', 'index.html' ],
			tasks: [ 'sass', 'babel' ],
			options: {
				livereload: true
			}
		},
		connect: {
			server: {
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	// Default task(s).
	grunt.registerTask('default', [
		'sass',
		'babel'
	]);

	grunt.registerTask('serve', [
		'connect',
		'watch'
	]);

};