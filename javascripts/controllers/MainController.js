app.controller('MainController', ['$scope', function($scope) {
  $scope.projects = [
    {
      title: 'Human Design',
      img: './images/hd.png',
      url: 'https://humandesign.com/',
      type: 'Work Project',
      description: 'A fully responsive site, combining custom interactive javascript and visual effects.'
    }, 
    {
      title: 'MTHRship',
      img: './images/mthrship.png',
      url: 'https://mthrship.com/',
      type: 'Work Project',
      description: 'A fully responsive site where companies or individuals can pitch investment ideas to Human Design. '
    }, 
    {
      title: 'Wanderlust',
      img: './images/wanderlust.png',
      url: 'https://wanderlust-trails.herokuapp.com',
      type: 'Side Project',
      description: 'An app that provides weather and hiking trail information for the user\'s location.'
    }
  ];
}]);