function nLinesClamp($timeout) {

  function link (scope, element, attrs) {

      var lineHeight = parseInt($(element).css('line-height').split('px')[0]);
      var maxHeight = scope.limit * lineHeight;
      var textBlockHeight;

      $(element).addClass('sis-n-lines-clamp').css('max-height', maxHeight);

      $timeout(function(){
          textBlockHeight = $(element).children().first().height();
          scope.clampRequired = textBlockHeight > maxHeight;
      }, 0);
  }

  return {
      restrict: 'A',
      templateUrl: 'n-lines-clamp-template',
      scope: {
          text: '=nLinesClamp', // Text to display
          limit: '=nLinesLimit', // Line limit
          link: '=nLinesLink', // href for link
          linkText: '@nLinesLinkText' // Link text
      },
      link: link
  };
};

angular
  .module('app')
  .directive('nLinesClamp', nLinesClamp);

nLinesClamp.$inject = ['$timeout'];
