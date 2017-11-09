app.controller('MainController', ['$scope', function($scope) {
  $scope.projects = [
    {
      title: 'Human Design',
      img: './images/hd.png',
      url: 'https://humandesign.com/'
    }, 
    {
      title: 'MTHRship',
      img: './images/mthrship.png',
      url: 'https://mthrship.com/'
    }, 
    {
      title: 'Wanderlust',
      img: './images/wanderlust.png',
      url: 'https://wanderlust-trails.herokuapp.com'
    }
  ];
}]);