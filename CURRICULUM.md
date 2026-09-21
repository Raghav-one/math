# Mathematics for AI curriculum

The site is a beginner-first path through the mathematics that is directly useful for understanding, implementing, evaluating, and debugging AI systems. It is not a formula glossary. Each chapter begins with an AI situation, explains the mechanism in connected prose, introduces notation only after the idea is concrete, works one numerical example line by line, and closes with a failure mode or decision rule.

## 0. Mathematical language and algebra

1. Quantities, units, time, and data boundaries
2. Arithmetic, fractions, ratios, percentages, and rates
3. Variables, expressions, equations, inequalities, and rearranging
4. Powers, roots, logarithms, and scientific notation

Capstone: convert delivery measurements into consistent units and solve a one-variable model equation.

## 1. Linear algebra and the geometry of data

5. Scalars, vectors, coordinates, and shape
6. Vector arithmetic and feature scaling
7. Dot products and weighted scores
8. Norms, distance, and cosine similarity
9. Matrix multiplication, transpose, and linear transformations
10. Tensors, axes, safe batching, broadcasting, and embeddings

Capstone: calculate two embedding similarities and explain how scaling changes a ranking.

## 2. Functions and model outputs

11. Functions, graphs, domains, ranges, and composition
12. Linear regression as a fitted function
13. Nonlinear activations and decision boundaries
14. Logits, sigmoid, and softmax

Capstone: trace a feature vector through a small classifier.

## 3. Calculus for learning

15. Finite change and slope
16. Derivatives and partial derivatives
17. The chain rule
18. Gradients and backpropagation
19. Jacobians, curvature, and optimizer behavior

Capstone: perform a one-weight gradient update, including the sign and learning-rate effect.

## 4. Probability and statistics

20. Events, conditional probability, and Bayes' rule
21. Random variables, common distributions, and Gaussian noise
22. Expectation, variance, covariance, and correlation
23. Sampling, estimates, confidence intervals, and model confidence
24. Likelihood and maximum-likelihood estimation
25. Calibration, thresholds, uncertainty, and decisions

Capstone: choose a threshold when false positives and false negatives have different costs.

## 5. Loss, optimization, and generalization

26. Targets, residuals, and mean squared error
27. Classification loss: cross-entropy from logits and softmax
28. Stochastic gradient descent and mini-batches
29. Learning rates, regularization, and constraints
30. Data splits, overfitting, underfitting, and bias-variance
31. Confusion matrices, precision/recall, ROC/PR, regression metrics, slices, and monitoring

Capstone: diagnose a training run as underfit, overfit, or mis-specified from its evidence.

## 6. Modern AI connections

32. Entropy and KL divergence as distribution comparison
33. Embeddings, retrieval, and similarity search
34. Attention as matrix scores, softmax, and value mixing
35. Autoregressive likelihood and decoding
36. Diffusion: Gaussian noise and denoising probabilities
37. Numerical reality: floating point, normalization, overflow, underflow, log-sum-exp, and shape errors

Capstone: distinguish a transformer score, a calibrated probability, and a generated token choice. Compare an autoregressive likelihood with a diffusion denoising step without pretending they are the same mechanism.

## Authoring gates

- The final curriculum has at least 25,000 instructional prose words. Every chapter has at least 600 words and the curriculum average is at least 700.
- Every chapter includes one worked numerical example: stated inputs, substitutions, intermediate arithmetic, result, and an interpretation with units where applicable. It also defines and reads every new symbol, gives an AI application, and includes a failure mode or selection rule.
- Diagrams must show a state transformation described by adjacent prose; every node and arrow is named in that prose, and it must fit a 320px viewport without horizontal scrolling.
- Each chapter visibly names what it requires and where it is used next. The prerequisite/use map supplements chronological navigation.
- Before a domain is coded, after its draft content is written, and after its browser render is tested, an independent adversarial review must issue a pass/fail report. A navigation item cannot be merged on fail.
- Every completed domain receives desktop and mobile route, sidebar, top-of-page, diagram, and overflow checks before deployment.
- The final review includes a coverage matrix for every chapter: route, prose-word count, mechanism, numeric example, diagram, AI connection, misconception, prerequisite/use links, and visual verification.
