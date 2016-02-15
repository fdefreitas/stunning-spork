'use strict';
/* global angular */

/**
 * @ngdoc function
 * @name fantooAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fantooAppApp
 */
angular.module('fantooAppApp')
  .controller('MainCtrl', MainCtrl);
  MainCtrl.$inject = ['gameEngine'];
  function MainCtrl(gameEngine) {  
    var vm = this;
    angular.extend(vm, {
        formats: [],
        moves: [],
        strings: {
            'ACTION_GO': 'Go!',
            'ACTION_PLAY_AGAIN': 'Play Again',
            'COPY_TIE': "Tie!",
            'VICTORY_COMPUTER': "The Computer has won! Wanna play again?",
            'VICTORY_HUMAN': "You won! What do we say to Skynet? Not today! Wanna play again?"
        },
        format: null,
        isGameFinished: false,
        play: play,
        startNewGame: startNewGame  
    });
    
    _activate();
    
    /* Exposed Functions */
    
    function play(){
        vm.result = gameEngine.rockPaperScissors(vm.move);
        if(vm.result.winner){
            vm.isGameFinished = true;
        }
        console.log('result:', vm.result);
    }
    
    function startNewGame(){
        gameEngine.startNewGame(vm.format);
        vm.result = null;
        vm.isGameFinished = false;
    }
    
    function setFormat(){
        gameEngine.setFormat(vm.format);
    }
    
    /* Internal Methods */
    function _activate(){
        vm.formats = gameEngine.getGameFormats();
        vm.format = vm.formats[0];
        vm.moves = gameEngine.getGameMoves();
        startNewGame();
    }
  }
