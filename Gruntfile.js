// Generated using bootswatch
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        builddir: '.',
        meta: {
            banner: '/**\n' +
                ' * <%= pkg.description %>\n' +
                ' * @version v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                ' * @link <%= pkg.homepage %>\n' +
                ' * @license <%= pkg.license %>' + ' */'
        },
        swatch: {
            amelia: {},
            cerulean: {},
            cosmo: {},
            cyborg: {},
            flatly: {},
            journal: {},
            readable: {},
            simplex: {},
            slate: {},
            spacelab: {},
            united: {},
            custom: {}
        },
        "swatch-less": {
            amelia: {},
            cerulean: {},
            cosmo: {},
            cyborg: {},
            flatly: {},
            journal: {},
            readable: {},
            simplex: {},
            slate: {},
            spacelab: {},
            united: {},
            custom: {}
        },
        clean: {
            build: {
                src: ['*/build.less', '*/build-responsive.less', '*/build.scss', '*/build-responsive.scss',
                    '!global/build.less', '!global/build-responsive.less', '!global/build.scss', '!global/build-responsive.scss']
            }
        },
        concat: {
            dist: {
                src: [],
                dest: ''
            }
        },
        recess: {
            dist: {
                options: {
                    compile: true,
                    compress: false
                },
                files: {}
            }
        }
    });

    grunt.registerTask('none', function () {});

    grunt.registerTask('build', 'build a regular theme', function (theme, compress) {
        var compress = compress == undefined ? true : compress;

        var concatSrc = 'global/build.scss',
            concatDest = theme + '/build.scss',
            sassDest = '<%=builddir%>/' + theme + '/bootstrap.css',
            sassSrc = [ theme + '/' + 'build.scss' ],
            dist = {src: concatSrc, dest: concatDest};

        grunt.config('concat.dist', dist);

        var files = {},
            recessFiles = {};

        files[sassDest] = sassSrc;
        recessFiles[sassDest] = sassDest;

        grunt.config('sass.dist.files', files);

        grunt.config('recess.dist.files', recessFiles);
        grunt.config('recess.dist.options.compress', false);

        grunt.task.run(['concat', 'sass:dist', 'recess:dist', 'clean:build',
            compress ? 'compress:' + sassDest + ':' + '<%=builddir%>/' + theme + '/bootstrap.min.css' : 'none']);
    });

    grunt.registerTask('build-less', 'build a regular .less theme', function (theme, compress) {
        var compress = compress == undefined ? true : compress;

        var concatSrc;
        var concatDest;
        var recessDest;
        var recessSrc;
        var files = {};
        var dist = {};
        concatSrc = 'global/build.less';
        concatDest = theme + '/build.less';
        recessDest = '<%=builddir%>/' + theme + '/bootstrap.css';
        recessSrc = [ theme + '/' + 'build.less' ];

        dist = {src: concatSrc, dest: concatDest};
        grunt.config('concat.dist', dist);
        files = {};
        files[recessDest] = recessSrc;
        grunt.config('recess.dist.files', files);
        grunt.config('recess.dist.options.compress', false);

        grunt.task.run(['concat', 'recess:dist', 'clean:build',
            compress ? 'compress:' + recessDest + ':' + '<%=builddir%>/' + theme + '/bootstrap.min.css' : 'none']);
    });

    grunt.registerTask('compress', 'compress a generic css', function (fileSrc, fileDst) {
        var files = {};
        files[fileDst] = fileSrc;
        grunt.log.writeln('compressing file ' + fileSrc);

        grunt.config('recess.dist.files', files);
        grunt.config('recess.dist.options.compress', true);
        grunt.task.run(['recess:dist']);
    });

	grunt.registerMultiTask('swatch', 'build a theme', function() {
        var t = this.target;
        grunt.task.run('build:' + t);
    });

    grunt.registerMultiTask('swatch-less', 'build a theme, using .less source', function () {
        var t = this.target;
        grunt.task.run('build-less:' + t);
    });

	grunt.registerTask('default', 'build a theme', function() {
        grunt.task.run('swatch');
    });
};
