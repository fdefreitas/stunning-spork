'use strict';

/**
 * @ngdoc service
 * @name fantooAppApp.gameEngine
 * @description
 * # gameEngine
 * Service in the fantooAppApp.
 */
angular.module('fantooAppApp')
  .service('gameEngine', function () {
      var gameFormats = [
          {
              'name': 'Two out of Three',
              'toWin': 2,
              'games': 3
          },
          {
              'name': 'Three out of Five',
              'toWin': 3,
              'games': 5
          },
          {
              'name': 'Four out of Seven',
              'toWin': 4,
              'games': 7
          }
      ];
    var gameMoves = [
        {
            'move': 'rock',
            'defeats': 'scissors',
            'defeatedBy': 'paper'
        },
        {
            'move': 'paper',
            'defeats': 'rock',
            'defeatedBy': 'scissors'
        },
        {
            'move': 'scissors',
            'defeats': 'paper',
            'defeatedBy': 'rock'
        }
    ];
    var currentGame = {};
    var service = {
        getGameFormats: getGameFormats,
        getGameMoves: getGameMoves,
        startNewGame: startNewGame,
        rockPaperScissors: rockPaperScissors
    };

    return service;
    
    function rockPaperScissors(humanMove){
        var computerMove = _getComputerMove();
        var moveWinner;
        var moveResult;
        var winner;
        console.log('human :', humanMove.move, '-', computerMove.move, ': computer');
        if(humanMove.defeats === computerMove.move){
            console.log("Human wins!");
            moveWinner = 'human';
            currentGame.human = currentGame.human + 1;
            if(currentGame.human  >= currentGame.format.toWin){
                winner = 'human';    
            }
            moveResult = {
                'human': true,
                'computer': false 
            };
        } else if(humanMove.move === computerMove.defeats) {
            console.log("Computer wins!");
            moveWinner = 'computer';
            currentGame.computer = currentGame.computer + 1;
            if(currentGame.computer  >= currentGame.format.toWin){
                winner = 'computer';    
            }
            moveResult = {
                'human': false,
                'computer': true 
            };
        } else {
            console.log("It's a tie");
            moveWinner = 'tie';
            moveResult = {
                'human': false,
                'computer': false 
            };
        }
        
        moveResult.humanMove = humanMove.move;
        moveResult.computerMove = computerMove.move;
        
        var response = angular.copy(currentGame);
        response.moveResult = moveResult;
        if(winner){ response.winner = winner; }
        return response;
    }
    
    function startNewGame(format){
        if(!format){ format = gameFormats[0]; }
        currentGame = {
            'format': format,
            'human': 0,
            'computer': 0
        };
    }
    
    function getGameFormats(){
        return gameFormats;
    }
    
    function getGameMoves(){
        return gameMoves;
    }
    
    function _getComputerMove(){
        var move = Math.floor(Math.random() * gameMoves.length);
        return gameMoves[move];
    }
  });
