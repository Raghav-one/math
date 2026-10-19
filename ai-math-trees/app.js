(function () {
  'use strict';
  var trees = window.AI_MATH_TREES || [];
  var navigation = document.getElementById('tree-nav');
  var container = document.getElementById('tree-list');
  navigation.innerHTML = trees.map(function (tree) { return '<a href="#' + tree.id + '">' + tree.number + ' · ' + tree.title + '</a>'; }).join('');
  window.renderAIMathTrees(container);
})();
