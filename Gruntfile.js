module.exports = function(grunt) {

	// Load Grunt tasks declared in the package.json file
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Project configuration.
	grunt.initConfig({
		watch: {
			scripts: {
				files: [
					'js/**/*.js',
					'html/index.html',
					'assets/**/*.png',
					'assets/**/*.wav'
				],
				tasks: ['build']
			}
		},
		jshint: {
			options: {
				evil: true
			},
			all: ['js/*.js']
		},
		'http-server': {
			dev: {
				root: '',
				port: 3116,
				runInBackground: true
			}
		},
    clean: ['public/'],
    copy: {
      assets: {
        src: 'assets/**',
        dest: 'public/',
        expand: true
      }
    },
		concat: {
			basic_and_extras: {
				files: {
					'public/js/index.js': ['js/main.js', 'js/**/*.js'],
					'public/index.html': ['html/index.html']
				}
			}
		}

	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('grunt-ssh');
	grunt.registerTask('dev', [
		'watch'
	]);
	grunt.registerTask('build', ['clean', 'jshint', 'concat', 'copy']);
	grunt.registerTask('default', ['build', 'http-server', 'dev']);

};
