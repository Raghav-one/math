(function () {
  'use strict';
  window.AI_MATH_TREES = [
    {
      id: 'whole-map', number: '01', title: 'AI mathematics dependency map',
      subtitle: 'The shortest complete route from quantities to modern model architectures.',
      use: 'Use this first when you need to decide what to learn next.',
      columns: [
        { label: 'Foundations', nodes: [
          ['Quantities & units', 'root'], ['Arithmetic & ratios', 'root'], ['Algebra & functions', 'root'], ['Powers, logs & notation', 'root']
        ]},
        { label: 'Represent & reason', nodes: [
          ['Vectors & matrices', 'core'], ['Probability & distributions', 'core'], ['Derivatives & gradients', 'core'], ['Statistics & estimation', 'core']
        ]},
        { label: 'Learn from data', nodes: [
          ['Loss functions', 'core'], ['Optimization', 'core'], ['Generalization & metrics', 'core'], ['Numerical stability', 'core']
        ]},
        { label: 'Modern AI', nodes: [
          ['Embeddings & retrieval', 'advanced'], ['Attention & transformers', 'advanced'], ['Autoregressive decoding', 'advanced'], ['Diffusion models', 'advanced']
        ]}
      ],
      edges: [[[0,0],[1,0]], [[0,1],[1,0]], [[0,2],[1,0]], [[0,3],[1,1]], [[0,1],[1,1]], [[0,2],[1,2]], [[0,3],[1,3]], [[1,0],[2,0]], [[1,1],[2,0]], [[1,2],[2,1]], [[1,3],[2,2]], [[2,0],[2,1]], [[2,1],[2,2]], [[2,3],[3,0]], [[1,0],[3,0]], [[1,0],[3,1]], [[1,1],[3,1]], [[2,0],[3,1]], [[1,1],[3,2]], [[2,0],[3,2]], [[1,1],[3,3]], [[2,1],[3,3]]]
    },
    {
      id: 'foundations', number: '02', title: 'Mathematical language and linear algebra',
      subtitle: 'How raw measurements become vectors, matrices, and model inputs.',
      use: 'Use this tree when shapes, dot products, or embeddings feel like symbols without meaning.',
      columns: [
        { label: 'Measure', nodes: [
          ['Quantity', 'root'], ['Unit & scale', 'root'], ['Ratio & rate', 'root'], ['Variable & equation', 'root']
        ]},
        { label: 'Represent', nodes: [
          ['Scalar', 'core'], ['Vector', 'core'], ['Coordinate system', 'core'], ['Norm & distance', 'core']
        ]},
        { label: 'Transform', nodes: [
          ['Dot product', 'core'], ['Matrix multiply', 'core'], ['Transpose & axes', 'core'], ['Tensor & batch shape', 'core']
        ]},
        { label: 'AI use', nodes: [
          ['Feature vector', 'advanced'], ['Embedding', 'advanced'], ['Linear layer', 'advanced'], ['Attention score QKᵀ', 'advanced']
        ]}
      ],
      edges: [[[0,0],[1,0]], [[0,1],[1,0]], [[0,2],[1,1]], [[0,3],[1,1]], [[1,1],[1,2]], [[1,1],[1,3]], [[1,0],[2,0]], [[1,1],[2,0]], [[1,1],[2,1]], [[1,2],[2,1]], [[1,2],[2,2]], [[1,1],[2,3]], [[2,0],[3,0]], [[2,1],[3,1]], [[2,1],[3,2]], [[2,2],[3,3]], [[2,0],[3,3]]]
    },
    {
      id: 'functions-calculus', number: '03', title: 'Functions, calculus, and gradients',
      subtitle: 'How a model turns inputs into outputs, then learns which parameter change reduces error.',
      use: 'Use this tree when backpropagation or the chain rule feels magical.',
      columns: [
        { label: 'Function', nodes: [
          ['Input → output', 'root'], ['Composition', 'root'], ['Linear function', 'root'], ['Nonlinear activation', 'root']
        ]},
        { label: 'Change', nodes: [
          ['Finite difference', 'core'], ['Derivative', 'core'], ['Partial derivative', 'core'], ['Chain rule', 'core']
        ]},
        { label: 'Many parameters', nodes: [
          ['Gradient vector', 'core'], ['Jacobian', 'core'], ['Hessian / curvature', 'core'], ['Backpropagation', 'core']
        ]},
        { label: 'AI use', nodes: [
          ['Neural network layer', 'advanced'], ['Loss gradient', 'advanced'], ['Optimizer update', 'advanced'], ['Vanishing / exploding signal', 'advanced']
        ]}
      ],
      edges: [[[0,0],[0,1]], [[0,2],[1,0]], [[0,0],[1,0]], [[1,0],[1,1]], [[0,1],[1,3]], [[1,1],[1,2]], [[1,2],[2,0]], [[1,3],[2,3]], [[2,0],[2,1]], [[2,0],[2,2]], [[2,0],[2,3]], [[0,3],[3,0]], [[2,3],[3,1]], [[2,0],[3,1]], [[2,2],[3,2]], [[2,3],[3,3]]]
    },
    {
      id: 'probability', number: '04', title: 'Probability, statistics, and uncertainty',
      subtitle: 'How AI systems express uncertain outcomes, estimate from data, and decide when a score can be trusted.',
      use: 'Use this tree for classifiers, Bayesian updates, confidence, and calibration.',
      columns: [
        { label: 'Events', nodes: [
          ['Outcome & event', 'root'], ['Conditional probability', 'root'], ['Bayes rule', 'root'], ['Random variable', 'root']
        ]},
        { label: 'Distribution', nodes: [
          ['Probability mass / density', 'core'], ['Expectation', 'core'], ['Variance & covariance', 'core'], ['Sampling', 'core']
        ]},
        { label: 'Infer', nodes: [
          ['Likelihood', 'core'], ['Maximum likelihood', 'core'], ['Estimator & confidence interval', 'core'], ['Calibration', 'core']
        ]},
        { label: 'AI use', nodes: [
          ['Class probability', 'advanced'], ['Uncertainty threshold', 'advanced'], ['Bayesian update', 'advanced'], ['Reliability curve', 'advanced']
        ]}
      ],
      edges: [[[0,0],[0,1]], [[0,1],[0,2]], [[0,0],[0,3]], [[0,3],[1,0]], [[1,0],[1,1]], [[1,1],[1,2]], [[1,0],[1,3]], [[1,3],[2,2]], [[1,0],[2,0]], [[2,0],[2,1]], [[1,3],[2,1]], [[1,3],[2,3]], [[1,0],[3,0]], [[2,3],[3,1]], [[0,2],[3,2]], [[2,3],[3,3]]]
    },
    {
      id: 'optimization', number: '05', title: 'Loss, optimization, and generalization',
      subtitle: 'How training turns error into parameter updates, and why a lower training loss is not enough.',
      use: 'Use this tree when learning rate, overfitting, or evaluation metrics feel disconnected.',
      columns: [
        { label: 'Define success', nodes: [
          ['Target & prediction', 'root'], ['Residual / error', 'root'], ['Loss function', 'root'], ['Metric & threshold', 'root']
        ]},
        { label: 'Train', nodes: [
          ['Gradient', 'core'], ['Gradient descent', 'core'], ['Mini-batch SGD', 'core'], ['Learning rate', 'core']
        ]},
        { label: 'Control fit', nodes: [
          ['Regularization', 'core'], ['Constraints', 'core'], ['Train / validation / test', 'core'], ['Bias–variance tradeoff', 'core']
        ]},
        { label: 'Operate', nodes: [
          ['Cross-entropy / MSE', 'advanced'], ['Monitoring by slice', 'advanced'], ['Drift & recalibration', 'advanced'], ['Human review routing', 'advanced']
        ]}
      ],
      edges: [[[0,0],[0,1]], [[0,1],[0,2]], [[0,2],[1,0]], [[1,0],[1,1]], [[1,1],[1,2]], [[1,2],[1,3]], [[0,2],[2,0]], [[1,3],[2,0]], [[2,0],[2,1]], [[0,2],[2,2]], [[2,2],[2,3]], [[0,2],[3,0]], [[0,3],[3,1]], [[2,2],[3,1]], [[3,1],[3,2]], [[3,2],[3,3]]]
    },
    {
      id: 'modern-ai', number: '06', title: 'Mathematics of modern AI models',
      subtitle: 'The branches that combine the earlier trees inside retrieval systems, language models, and generative models.',
      use: 'Use this tree after the core trees, when you want to understand why transformers and diffusion models work.',
      columns: [
        { label: 'Represent', nodes: [
          ['Token / feature encoding', 'root'], ['Embedding vector', 'root'], ['Similarity & cosine', 'root'], ['Probability distribution', 'root']
        ]},
        { label: 'Attend & predict', nodes: [
          ['Query, key, value', 'core'], ['Softmax weights', 'core'], ['Next-token distribution', 'core'], ['Cross-entropy', 'core']
        ]},
        { label: 'Generate', nodes: [
          ['Sampling & temperature', 'core'], ['Entropy & KL divergence', 'core'], ['Noise schedule', 'core'], ['Denoising step', 'core']
        ]},
        { label: 'Systems', nodes: [
          ['Retrieval ranking', 'advanced'], ['Transformer block', 'advanced'], ['Autoregressive decoding', 'advanced'], ['Diffusion generation', 'advanced']
        ]}
      ],
      edges: [[[0,0],[0,1]], [[0,1],[0,2]], [[0,3],[1,1]], [[0,1],[1,0]], [[0,2],[1,0]], [[1,0],[1,1]], [[1,1],[1,2]], [[1,2],[1,3]], [[1,2],[2,0]], [[1,3],[2,1]], [[0,3],[2,1]], [[2,2],[2,3]], [[0,2],[3,0]], [[1,0],[3,1]], [[2,0],[3,2]], [[2,2],[3,3]], [[2,3],[3,3]]]
    }
  ];
})();
