(function () {
  'use strict';
  function escapeHtml(value) { return String(value).replace(/[&<>"']/g, function (character) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]; }); }
  function branch(column) {
    return '<section class="branch"><div class="folder-label">' + escapeHtml(column.label) + '</div><ul class="node-list">' + column.nodes.map(function (node) { return '<li class="node ' + node[1] + '"><i aria-hidden="true"></i><span>' + escapeHtml(node[0]) + '</span></li>'; }).join('') + '</ul></section>';
  }
  function tree(tree) {
    return '<section class="tree-section" id="' + escapeHtml(tree.id) + '"><header class="tree-header"><div><div class="tree-number">TREE ' + escapeHtml(tree.number) + '</div><h2>' + escapeHtml(tree.title) + '</h2><p>' + escapeHtml(tree.subtitle) + '</p></div><aside class="tree-use"><strong>Use it for:</strong> ' + escapeHtml(tree.use) + '</aside></header><div class="folder-tree" role="img" aria-label="Folder tree for ' + escapeHtml(tree.title) + '">' + tree.columns.map(branch).join('') + '</div><footer class="tree-foot">Read left to right: each folder supplies the concepts used by the folder after it. Follow a branch backward when a term becomes unfamiliar.</footer></section>';
  }
  window.renderAIMathTrees = function (container) { container.innerHTML = window.AI_MATH_TREES.map(tree).join(''); };
})();
