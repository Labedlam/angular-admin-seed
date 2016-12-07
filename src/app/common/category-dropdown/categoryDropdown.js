angular.module('ordercloud-dropdown', [])
    .directive('categoryDropDown', CategoryDropDownDirective)
    .controller('categoryDropDownCtrl', CategoryDropDownController);

function CategoryDropDownDirective(){
    return {
        scope: {
            categoryList: '='
        },
        restrict: 'E',
        templateUrl: 'common/category-dropdown/templates/categoryDropdown.tpl.html',
        controller: 'categoryDropDownCtrl',
        controllerAs: 'categoryDropdown'
    };
}



function CategoryDropDownController(){
    var vm = this;

    vm.categoryTreeClick = function(scope){
        console.log('scope', scope);
        scope[scope.category.ID] = !scope[scope.category.ID];
        //$state.go('productBrowse.products', {categoryid: scope.category.ID});
    };
}

