'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concurrent: {
      target: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    watch: {
      browserify: {
        files: ['src/**/*.jsx'],
        tasks: ['browserify']
      }
    },
    browserify: {
      dist: {
        options: {
          transform: [['babelify', {
            presets: ['es2015', 'react']
          }]],
          watch: true,
          browserifyOptions: {
            debug: true,
            insertGlobals: true
          }
        },
        src: ['src/**/*.jsx'],
        dest: 'src/index.js'
      }
    },
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          ignore: ['node_modules/**'],
          callback: function callback(nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });
            nodemon.on('config:update', function () {
              setTimeout(function () {
                require('open')('http://localhost:8080');
              }, 1000);
            });
          }
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.registerTask('default', ['build', 'concurrent:target']);
  grunt.registerTask('build', ['browserify']);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0dydW50ZmlsZS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZ3J1bnQiLCJpbml0Q29uZmlnIiwicGtnIiwiZmlsZSIsInJlYWRKU09OIiwiY29uY3VycmVudCIsInRhcmdldCIsInRhc2tzIiwib3B0aW9ucyIsImxvZ0NvbmN1cnJlbnRPdXRwdXQiLCJ3YXRjaCIsImJyb3dzZXJpZnkiLCJmaWxlcyIsImRpc3QiLCJ0cmFuc2Zvcm0iLCJwcmVzZXRzIiwiYnJvd3NlcmlmeU9wdGlvbnMiLCJkZWJ1ZyIsImluc2VydEdsb2JhbHMiLCJzcmMiLCJkZXN0Iiwibm9kZW1vbiIsImRldiIsInNjcmlwdCIsImlnbm9yZSIsImNhbGxiYWNrIiwib24iLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjb2xvdXIiLCJzZXRUaW1lb3V0IiwicmVxdWlyZSIsImxvYWROcG1UYXNrcyIsInJlZ2lzdGVyVGFzayJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQixVQUFTQyxLQUFULEVBQWdCO0FBQy9CQSxRQUFNQyxVQUFOLENBQWlCO0FBQ2ZDLFNBQUtGLE1BQU1HLElBQU4sQ0FBV0MsUUFBWCxDQUFvQixjQUFwQixDQURVO0FBRWZDLGdCQUFZO0FBQ1ZDLGNBQVE7QUFDTkMsZUFBTyxDQUFDLFNBQUQsRUFBWSxPQUFaLENBREQ7QUFFTkMsaUJBQVM7QUFDTEMsK0JBQXFCO0FBRGhCO0FBRkg7QUFERSxLQUZHO0FBVWZDLFdBQU87QUFDTEMsa0JBQVk7QUFDVkMsZUFBTyxDQUFDLGNBQUQsQ0FERztBQUVWTCxlQUFPLENBQUMsWUFBRDtBQUZHO0FBRFAsS0FWUTtBQWdCZkksZ0JBQVk7QUFDVkUsWUFBTTtBQUNKTCxpQkFBUztBQUNQTSxxQkFBVyxDQUNULENBQUMsVUFBRCxFQUFhO0FBQ1hDLHFCQUFTLENBQUMsUUFBRCxFQUFXLE9BQVg7QUFERSxXQUFiLENBRFMsQ0FESjtBQU1QTCxpQkFBTyxJQU5BO0FBT1BNLDZCQUFtQjtBQUNqQkMsbUJBQU8sSUFEVTtBQUVqQkMsMkJBQWU7QUFGRTtBQVBaLFNBREw7QUFhSkMsYUFBSyxDQUFDLGNBQUQsQ0FiRDtBQWNKQyxjQUFNO0FBZEY7QUFESSxLQWhCRztBQWtDZkMsYUFBUztBQUNQQyxXQUFLO0FBQ0hDLGdCQUFRLFdBREw7QUFFSGYsaUJBQVM7QUFDUGdCLGtCQUFRLENBQUMsaUJBQUQsQ0FERDtBQUVQQyxvQkFBVSxrQkFBVUosT0FBVixFQUFtQjtBQUMzQkEsb0JBQVFLLEVBQVIsQ0FBVyxLQUFYLEVBQWtCLFVBQVVDLEtBQVYsRUFBaUI7QUFDakNDLHNCQUFRQyxHQUFSLENBQVlGLE1BQU1HLE1BQWxCO0FBQ0QsYUFGRDtBQUdBVCxvQkFBUUssRUFBUixDQUFXLGVBQVgsRUFBNEIsWUFBWTtBQUN4Q0sseUJBQVcsWUFBVztBQUNwQkMsd0JBQVEsTUFBUixFQUFnQix1QkFBaEI7QUFDRCxlQUZELEVBRUcsSUFGSDtBQUdDLGFBSkQ7QUFLRDtBQVhNO0FBRk47QUFERTtBQWxDTSxHQUFqQjtBQXFEQWhDLFFBQU1pQyxZQUFOLENBQW1CLHFCQUFuQjtBQUNBakMsUUFBTWlDLFlBQU4sQ0FBbUIsa0JBQW5CO0FBQ0FqQyxRQUFNaUMsWUFBTixDQUFtQixlQUFuQjtBQUNBakMsUUFBTWlDLFlBQU4sQ0FBbUIsa0JBQW5CO0FBQ0FqQyxRQUFNa0MsWUFBTixDQUFtQixTQUFuQixFQUE4QixDQUFDLE9BQUQsRUFBVSxtQkFBVixDQUE5QjtBQUNBbEMsUUFBTWtDLFlBQU4sQ0FBbUIsT0FBbkIsRUFBNEIsQ0FBQyxZQUFELENBQTVCO0FBQ0QsQ0E1REQiLCJmaWxlIjoiR3J1bnRmaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihncnVudCkge1xuICBncnVudC5pbml0Q29uZmlnKHtcbiAgICBwa2c6IGdydW50LmZpbGUucmVhZEpTT04oJ3BhY2thZ2UuanNvbicpLFxuICAgIGNvbmN1cnJlbnQ6IHtcbiAgICAgIHRhcmdldDoge1xuICAgICAgICB0YXNrczogWydub2RlbW9uJywgJ3dhdGNoJ10sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGxvZ0NvbmN1cnJlbnRPdXRwdXQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgIGJyb3dzZXJpZnk6IHtcbiAgICAgICAgZmlsZXM6IFsnc3JjLyoqLyouanN4J10sXG4gICAgICAgIHRhc2tzOiBbJ2Jyb3dzZXJpZnknXVxuICAgICAgfVxuICAgIH0sXG4gICAgYnJvd3NlcmlmeToge1xuICAgICAgZGlzdDoge1xuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBbXG4gICAgICAgICAgICBbJ2JhYmVsaWZ5Jywge1xuICAgICAgICAgICAgICBwcmVzZXRzOiBbJ2VzMjAxNScsICdyZWFjdCddXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIF0sXG4gICAgICAgICAgd2F0Y2g6IHRydWUsXG4gICAgICAgICAgYnJvd3NlcmlmeU9wdGlvbnM6IHtcbiAgICAgICAgICAgIGRlYnVnOiB0cnVlLFxuICAgICAgICAgICAgaW5zZXJ0R2xvYmFsczogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3JjOiBbJ3NyYy8qKi8qLmpzeCddLFxuICAgICAgICBkZXN0OiAnc3JjL2luZGV4LmpzJ1xuICAgICAgfVxuICAgIH0sXG4gICAgbm9kZW1vbjoge1xuICAgICAgZGV2OiB7XG4gICAgICAgIHNjcmlwdDogJ3NlcnZlci5qcycsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBpZ25vcmU6IFsnbm9kZV9tb2R1bGVzLyoqJ10sXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChub2RlbW9uKSB7XG4gICAgICAgICAgICBub2RlbW9uLm9uKCdsb2cnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQuY29sb3VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbm9kZW1vbi5vbignY29uZmlnOnVwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJlcXVpcmUoJ29wZW4nKSgnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH0pO1xuICBncnVudC5sb2FkTnBtVGFza3MoJ2dydW50LWNvbnRyaWItd2F0Y2gnKTtcbiAgZ3J1bnQubG9hZE5wbVRhc2tzKCdncnVudC1icm93c2VyaWZ5Jyk7XG4gIGdydW50LmxvYWROcG1UYXNrcygnZ3J1bnQtbm9kZW1vbicpO1xuICBncnVudC5sb2FkTnBtVGFza3MoJ2dydW50LWNvbmN1cnJlbnQnKTtcbiAgZ3J1bnQucmVnaXN0ZXJUYXNrKCdkZWZhdWx0JywgWydidWlsZCcsICdjb25jdXJyZW50OnRhcmdldCddKTtcbiAgZ3J1bnQucmVnaXN0ZXJUYXNrKCdidWlsZCcsIFsnYnJvd3NlcmlmeSddKTtcbn0iXX0=