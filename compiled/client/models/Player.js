// Generated by CoffeeScript 1.7.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.Player = (function(_super) {
    __extends(Player, _super);

    function Player() {
      return Player.__super__.constructor.apply(this, arguments);
    }

    Player.prototype.initialize = function(config) {
      return this.set({
        hand: new Hand()
      });
    };

    Player.prototype.requestCard = function() {
      return this.trigger('requestCard', this);
    };

    Player.prototype.requestManyCards = function(numCards) {
      return this.trigger('requestManyCards', [this, numCards]);
    };

    return Player;

  })(Backbone.Model);

}).call(this);