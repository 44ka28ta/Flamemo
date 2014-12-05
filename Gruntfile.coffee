module.exports = (grunt) ->


    grunt.initConfig (
        pkg: grunt.file.readJSON ("package.json")
        # grunt-contrib-watch
        watch:
            files: './src/**'
            tasks: [
                'typescript'
                'sass'
                'uglify'
            ]
        # grunt-contrib-sass
        sass:
            dist:
                files: [
                    expand: true
                    cwd: './src/scss'
                    src: ['*.scss']
                    dest: './dist/css'
                    ext: '.css'
                ]
        uglify:
            client:
                files: [
                    expand: true
                    cwd: './src/js'
                    src: '**/*.js'
                    dest: './dist/js'
                    ext: '.min.js'
                ]
        # grunt-typescript
        typescript:
            base:
                src: ['./src/ts/**.ts']
                dest: './src/js/'
                options:
                    module: 'amd'
                    target: 'es5'
                    sourceMap: true
                    declaration: true
                    basePath: 'src/ts'
                    comments: true
        # grunt-notify
        notify_hooks:
            options:
                enabled: true
                max_jshint_notifications: 2
                title: 'Status'
                message: 'No warning and error.'
    )


    # include modules.
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)
