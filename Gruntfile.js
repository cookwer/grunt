module.exports = function (grunt) {
    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
    	watch: {
            scripts: {
			    files: ['frontend/js/**/*.js'],
			    tasks: ['concat', 'uglify'],
			    options: {
			      	spawn: false,
			    },
			},
		},
    	concat: {
            login: {
            	src: [
	    			'frontend/js/jquery-1.10.2.js',
	    			'frontend/js/positionFormLogin.js'
            	],
            	dest: 'frontend/js/build/login.js'
            },
            dashboard: {
            	src: [
            		'frontend/js/spin.min.js',
	    			'frontend/js/jquery-1.10.2.js', 
	    			'frontend/js/jquery.timeago.js', 
	    			'frontend/js/baron.js',
	    			'frontend/js/dashboard_view.js', 
	    			'frontend/js/index_animation_menu.js', 
	    			'frontend/js/generate_color_svg_test.js',
            		'frontend/js/slctLeftMenu.js',
            		'frontend/js/dashboard/abgular.js'
            	],
            	dest: 'frontend/js/build/dashboard.js'
            },
            presentations: {
            	src: [
            		'frontend/js/slctMenuHead.js',
	    			'frontend/js/presentations.js',
	    			'frontend/js/script.js',
	    			'frontend/js/previewDashboard.js',
	    			'frontend/js/color.js',
	    			'frontend/js/prespopup.js'
            	],
            	dest: 'frontend/js/build/presentations.js'
            },
            create: {
                src: [
                    'frontend/js/jquery-1.10.2.js',
                    'frontend/js/script.js',
                    'frontend/js/baron.js',
                    'frontend/js/middleBlock.js',
                    'frontend/js/create_presentation.js',
                ],
                dest: 'frontend/js/build/createpres.js'
            },
            newtheme: {
                src: [
                    'frontend/js/jquery-1.10.2.js',
                    'frontend/js/newtheme/new_theme.js',
                    'frontend/js/newtheme/new_theme_view.js',
                    'frontend/js/newtheme/objects.js',
                    'frontend/js/newtheme/color_generator.js',
                    'frontend/js/newtheme/KolorWheel.js',
                    'frontend/js/newtheme/generate_color_svg_test.js',
                    'frontend/js/script.js',
                    'frontend/js/baron.js',
                    'frontend/js/newtheme/jquery-ui.min.js'
                ],
                dest: 'frontend/js/build/newtheme.js'
            },
            editor: {
                src: [
                    'frontend/js/editor/patternstyles.js',
                    'frontend/js/editor/jquery-1.10.2.js',
                    'frontend/js/editor/jquery-ui-1.10.4.custom.min.js',
                    'frontend/js/editor/es5-shim.min.js',
                    'frontend/js/editor/baron.js',
                    'frontend/js/editor/angular.js',
                    'frontend/js/editor/angular-slider.js',
                    'frontend/js/editor/xeditable.js',
                    'frontend/js/editor/angular-dnd.js',
                    'frontend/js/editor/popupEditor.js',
                    'frontend/js/editor/angular-file-upload.js',
                    'frontend/js/editor/ng-Lettering.js',
                    'frontend/js/editor/editor.js',
                    'frontend/js/editor/objects.js',
                    'frontend/js/editor/templatesForGrid.js',
                    'frontend/js/editor/script.js',
                    'frontend/js/editor/generate_color_svg_test.js',
                    'frontend/js/editor/textEditor.js',
                    'frontend/js/editor/presAngular.js',
                    'frontend/js/editor/editor_view.js',
                    'frontend/js/editor/magic.js',
                    'frontend/js/editor/spin.min.js',
                    'frontend/js/editor/jquery.timeago.js',
                    'frontend/js/editor/patternstyles.js'
                ],
                dest: 'frontend/js/build/editor.js'
            }
        },
        uglify: {
		    dashboard: {
		    	src: 'frontend/js/build/dashboard.js',
		    	dest: 'public/js/dashboard.js'
		    },
		    presentations: {
		    	src: 'frontend/js/build/presentations.js',
		    	dest: 'public/js/presentations.js'
		    },
		    login: {
		    	src: 'frontend/js/build/login.js',
		    	dest: 'public/js/login.js'
		    },
            create: {
                src: 'frontend/js/build/createpres.js',
                dest: 'public/js/createpres.js'
            },
            newtheme: {
                src: 'frontend/js/build/newtheme.js',
                dest: 'public/js/newtheme.js'
            },
            editor: {
                src: 'frontend/js/build/editor.js',
                dest: 'public/js/editor.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['concat', 'uglify']);
    grunt.registerTask('default', ['watch']);
};