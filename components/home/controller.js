angular.module("app")
    .controller("homeController", function($scope, $http, $window, $document) {

        $scope.sortType = ""
        $scope.sortReverse = null

        $scope.sortBy = function(type) {

            if ($scope.sortType == type) {

                if ($scope.sortReverse == null) {
                    $scope.sortReverse = false
                } else if ($scope.sortReverse == false) {
                    $scope.sortReverse = true
                } else {
                    $scope.sortReverse = null
                    $scope.sortType = ""
                }

            } else {

                $scope.sortType = type
                $scope.sortReverse = false

            }

        }

        $scope.showInImdb = function(imdbID) {

            $window.open("http://www.imdb.com/title/" + imdbID, "_blank")

        }

        $scope.scrollToTop = function() {

            var element = angular.element(document.getElementById("films-list"))
            $document.scrollToElement(element, 0, 200)

        }

        $http
            .get("/data/films.json")
            .then(
                function(res) {
                    $scope.films = res.data.films
                },
                function(res) {
                    console.error("Error loading films data.")
                }
            )

    })
