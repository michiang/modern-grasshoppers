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
        dest: 'src/bundle.js'
      }
    },
    nodemon: {
      dev: {
        script: 'server/server.js',
        options: {
          ignore: ['node_modules/**'],
          callback: function callback(nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });
            nodemon.on('config:update', function () {
              setTimeout(function () {
                require('open')('http://localhost:1337');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0dydW50ZmlsZS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZ3J1bnQiLCJpbml0Q29uZmlnIiwicGtnIiwiZmlsZSIsInJlYWRKU09OIiwiY29uY3VycmVudCIsInRhcmdldCIsInRhc2tzIiwib3B0aW9ucyIsImxvZ0NvbmN1cnJlbnRPdXRwdXQiLCJ3YXRjaCIsImJyb3dzZXJpZnkiLCJmaWxlcyIsImRpc3QiLCJ0cmFuc2Zvcm0iLCJwcmVzZXRzIiwiYnJvd3NlcmlmeU9wdGlvbnMiLCJkZWJ1ZyIsImluc2VydEdsb2JhbHMiLCJzcmMiLCJkZXN0Iiwibm9kZW1vbiIsImRldiIsInNjcmlwdCIsImlnbm9yZSIsImNhbGxiYWNrIiwib24iLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjb2xvdXIiLCJzZXRUaW1lb3V0IiwicmVxdWlyZSIsImxvYWROcG1UYXNrcyIsInJlZ2lzdGVyVGFzayJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQixVQUFTQyxLQUFULEVBQWdCO0FBQy9CQSxRQUFNQyxVQUFOLENBQWlCO0FBQ2ZDLFNBQUtGLE1BQU1HLElBQU4sQ0FBV0MsUUFBWCxDQUFvQixjQUFwQixDQURVO0FBRWZDLGdCQUFZO0FBQ1ZDLGNBQVE7QUFDTkMsZUFBTyxDQUFDLFNBQUQsRUFBWSxPQUFaLENBREQ7QUFFTkMsaUJBQVM7QUFDTEMsK0JBQXFCO0FBRGhCO0FBRkg7QUFERSxLQUZHO0FBVWZDLFdBQU87QUFDTEMsa0JBQVk7QUFDVkMsZUFBTyxDQUFDLGNBQUQsQ0FERztBQUVWTCxlQUFPLENBQUMsWUFBRDtBQUZHO0FBRFAsS0FWUTtBQWdCZkksZ0JBQVk7QUFDVkUsWUFBTTtBQUNKTCxpQkFBUztBQUNQTSxxQkFBVyxDQUNULENBQUMsVUFBRCxFQUFhO0FBQ1hDLHFCQUFTLENBQUMsUUFBRCxFQUFXLE9BQVg7QUFERSxXQUFiLENBRFMsQ0FESjtBQU1QTCxpQkFBTyxJQU5BO0FBT1BNLDZCQUFtQjtBQUNqQkMsbUJBQU8sSUFEVTtBQUVqQkMsMkJBQWU7QUFGRTtBQVBaLFNBREw7QUFhSkMsYUFBSyxDQUFDLGNBQUQsQ0FiRDtBQWNKQyxjQUFNO0FBZEY7QUFESSxLQWhCRztBQWtDZkMsYUFBUztBQUNQQyxXQUFLO0FBQ0hDLGdCQUFRLGtCQURMO0FBRUhmLGlCQUFTO0FBQ1BnQixrQkFBUSxDQUFDLGlCQUFELENBREQ7QUFFUEMsb0JBQVUsa0JBQVVKLE9BQVYsRUFBbUI7QUFDM0JBLG9CQUFRSyxFQUFSLENBQVcsS0FBWCxFQUFrQixVQUFVQyxLQUFWLEVBQWlCO0FBQ2pDQyxzQkFBUUMsR0FBUixDQUFZRixNQUFNRyxNQUFsQjtBQUNELGFBRkQ7QUFHQVQsb0JBQVFLLEVBQVIsQ0FBVyxlQUFYLEVBQTRCLFlBQVk7QUFDeENLLHlCQUFXLFlBQVc7QUFDcEJDLHdCQUFRLE1BQVIsRUFBZ0IsdUJBQWhCO0FBQ0QsZUFGRCxFQUVHLElBRkg7QUFHQyxhQUpEO0FBS0Q7QUFYTTtBQUZOO0FBREU7QUFsQ00sR0FBakI7QUFxREFoQyxRQUFNaUMsWUFBTixDQUFtQixxQkFBbkI7QUFDQWpDLFFBQU1pQyxZQUFOLENBQW1CLGtCQUFuQjtBQUNBakMsUUFBTWlDLFlBQU4sQ0FBbUIsZUFBbkI7QUFDQWpDLFFBQU1pQyxZQUFOLENBQW1CLGtCQUFuQjtBQUNBakMsUUFBTWtDLFlBQU4sQ0FBbUIsU0FBbkIsRUFBOEIsQ0FBQyxPQUFELEVBQVUsbUJBQVYsQ0FBOUI7QUFDQWxDLFFBQU1rQyxZQUFOLENBQW1CLE9BQW5CLEVBQTRCLENBQUMsWUFBRCxDQUE1QjtBQUNELENBNUREIiwiZmlsZSI6IkdydW50ZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZ3J1bnQpIHtcbiAgZ3J1bnQuaW5pdENvbmZpZyh7XG4gICAgcGtnOiBncnVudC5maWxlLnJlYWRKU09OKCdwYWNrYWdlLmpzb24nKSxcbiAgICBjb25jdXJyZW50OiB7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdGFza3M6IFsnbm9kZW1vbicsICd3YXRjaCddLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBsb2dDb25jdXJyZW50T3V0cHV0OiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICBicm93c2VyaWZ5OiB7XG4gICAgICAgIGZpbGVzOiBbJ3NyYy8qKi8qLmpzeCddLFxuICAgICAgICB0YXNrczogWydicm93c2VyaWZ5J11cbiAgICAgIH1cbiAgICB9LFxuICAgIGJyb3dzZXJpZnk6IHtcbiAgICAgIGRpc3Q6IHtcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIHRyYW5zZm9ybTogW1xuICAgICAgICAgICAgWydiYWJlbGlmeScsIHtcbiAgICAgICAgICAgICAgcHJlc2V0czogWydlczIwMTUnLCAncmVhY3QnXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHdhdGNoOiB0cnVlLFxuICAgICAgICAgIGJyb3dzZXJpZnlPcHRpb25zOiB7XG4gICAgICAgICAgICBkZWJ1ZzogdHJ1ZSxcbiAgICAgICAgICAgIGluc2VydEdsb2JhbHM6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNyYzogWydzcmMvKiovKi5qc3gnXSxcbiAgICAgICAgZGVzdDogJ3NyYy9idW5kbGUuanMnXG4gICAgICB9XG4gICAgfSxcbiAgICBub2RlbW9uOiB7XG4gICAgICBkZXY6IHtcbiAgICAgICAgc2NyaXB0OiAnc2VydmVyL3NlcnZlci5qcycsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBpZ25vcmU6IFsnbm9kZV9tb2R1bGVzLyoqJ10sXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChub2RlbW9uKSB7XG4gICAgICAgICAgICBub2RlbW9uLm9uKCdsb2cnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQuY29sb3VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbm9kZW1vbi5vbignY29uZmlnOnVwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJlcXVpcmUoJ29wZW4nKSgnaHR0cDovL2xvY2FsaG9zdDoxMzM3Jyk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH0pO1xuICBncnVudC5sb2FkTnBtVGFza3MoJ2dydW50LWNvbnRyaWItd2F0Y2gnKTtcbiAgZ3J1bnQubG9hZE5wbVRhc2tzKCdncnVudC1icm93c2VyaWZ5Jyk7XG4gIGdydW50LmxvYWROcG1UYXNrcygnZ3J1bnQtbm9kZW1vbicpO1xuICBncnVudC5sb2FkTnBtVGFza3MoJ2dydW50LWNvbmN1cnJlbnQnKTtcbiAgZ3J1bnQucmVnaXN0ZXJUYXNrKCdkZWZhdWx0JywgWydidWlsZCcsICdjb25jdXJyZW50OnRhcmdldCddKTtcbiAgZ3J1bnQucmVnaXN0ZXJUYXNrKCdidWlsZCcsIFsnYnJvd3NlcmlmeSddKTtcbn0iXX0=