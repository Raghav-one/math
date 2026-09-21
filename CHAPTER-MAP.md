# Reader chapter map

This is the implementation inventory for the public reader. Every ID below must resolve to authored prose before deployment; the map is not exposed as a placeholder navigation state.

| Domain | Chapter IDs |
| --- | --- |
| Mathematical language | quantities, rates, equations, logs |
| Linear algebra | scalars-vectors-shape, vector-arithmetic-scaling, dot-products, norms-distance-cosine, matrices-transpose-transformations, tensors-batches-broadcasting-embeddings |
| Functions and model outputs | functions-graphs-composition, linear-regression, nonlinear-activations, logits-sigmoid-softmax |
| Calculus for learning | finite-change-slope, derivatives-partials, chain-rule, gradients-backpropagation, jacobians-curvature-optimizers |
| Probability and statistics | events-conditionals-bayes, random-variables-distributions, expectation-variance-covariance, sampling-estimation-confidence, likelihood-mle, calibration-thresholds-uncertainty |
| Loss, optimization, and generalization | mse-targets, cross-entropy-classification, sgd-minibatches, learning-rate-regularization-constraints, data-splits-bias-variance, metrics-slices-monitoring |
| Modern AI and numerical reality | entropy-kl, embeddings-retrieval, attention, autoregressive-decoding, diffusion, numerical-reality |

Each entry must include: `id`, `domain`, `title`, `requires`, `usedNext`, at least 500 instructional words, a worked example, an AI scenario, a mechanism visual, and a failure or decision rule. The 37 routes will be authored and tested as one release unit; this map is an inventory, not a claim that every route is complete.
