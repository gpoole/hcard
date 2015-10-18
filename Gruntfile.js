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
			tasks: [ 'sass', 'babel', 'copy' ],
			options: {
				livereload: true
			}
		},
		copy: {
			dist: {
				files: [{
					expand: true,
					dest: 'dist/',
					cwd: 'src',
					src: 'img/**/*'
				}]
			}
		},
		connect: {
			watch: {
				options: {
					livereload: true
				}
			},
			preview: {
				options: {
					keepalive: true
				}
			}
		},
		systemjs: {
			dist: {
				options: {
					configFile: 'config.js',
					baseURL: './'
				},
				files: {
					'./dist/js/app.js': [ './dist/js/app.js' ]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks("grunt-systemjs-builder");

	grunt.registerTask('default', [
		'build',
		'connect:preview'
	]);

	grunt.registerTask('build', [
		'sass',
		'copy',
		'babel',
		'systemjs'
	]);

	grunt.registerTask('serve', [
		'connect:watch',
		'watch'
	]);

};