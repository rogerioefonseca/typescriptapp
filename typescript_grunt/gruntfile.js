module.exports =  function(grunt){
    grunt.loadNpmTaks('grunt-ts');

    grunt.initConfig({
        ts: {
            main: {
                src:['typescript/main.ts'],
                dest:'javascript/'
            }
        }
    });

    grunt.registerTask('default',['ts']);
}