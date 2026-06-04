# Issue Log

Search this file by task tags before making or modifying a demo animation. Read only matching entries unless the user explicitly asks for a full audit.

## I001: Preview Before Export

Tags: workflow, preview-first, export-format-error, visual-layout-error, hyperframes, remotion

Trigger: Any task that asks to create, modify, preview, or export a formal animation/video.

Mistake: Exporting or rendering the final video before the user has reviewed a preview can lock in visual or knowledge-expression mistakes and causes avoidable rework.

Fix: Produce a HyperFrames/Remotion preview URL or keyframe preview screenshots first. Export only after preview acceptance or an explicit export request.

Rule: Never synthesize the final video before preview acceptance unless the user explicitly asks for export in the same instruction.

Source: `examples/puzzle-board-fill-demo`

## I002: Do Not Replace The Problem Type

Tags: math, spatial-relationship, knowledge-expression-error, animation-design-error, puzzle, symmetry

Trigger: A math puzzle asks to complete a figure, construct symmetry, fill a missing block, or verify a geometric condition.

Mistake: Treating the task as generic fit/collision testing or inserting an entire candidate puzzle piece when the problem asks to add minimum cells/triangles to construct an axially symmetric figure.

Fix: Identify the exact unit being added, the target relation, and the required verification before drawing or animating candidates.

Rule: Restore the problem statement first: given objects, unit size, allowed number of additions, and target relation. Do not animate a different task.

Source: `examples/puzzle-board-fill-demo`

## I003: Symmetry Axis Must Be Proven And Visible

Tags: math, symmetry, spatial-relationship, visual-layout-error, axis, puzzle

Trigger: A task asks to construct or verify an axially symmetric figure.

Mistake: Drawing the wrong axis, using center symmetry when the problem asks for axial symmetry, or writing an axis label without visibly drawing the axis through the figure.

Fix: Determine the axis from corresponding cells/triangles or invariant cells. Draw the axis clearly through the relevant figure and keep it visible during verification.

Rule: If the target is axial symmetry, do not use center points, rotation arrows, or center-symmetry wording. The axis must be visible and geometrically aligned.

Source: `examples/puzzle-board-fill-demo`

## I004: Rebuild Grids From Exact Counts Before Coloring

Tags: math, grid, triangle-grid, visual-accuracy, spatial-relationship, puzzle

Trigger: A task includes square grids, triangular grids, filled cells, or a reference image whose grid structure must be reproduced.

Mistake: Drawing the wrong number of subdivisions, creating nested or offset triangles, adding unintended third fill colors, or placing filled cells by rough visual guess.

Fix: Count the subdivisions first, generate the grid from shared vertices, and use only the colors present in the original unless a new candidate color is intentionally introduced.

Rule: For triangular grids, confirm edge subdivision count, bottom-row count, orientation of up/down triangles, filled-cell count, and fill palette before adding animations.

Source: `examples/puzzle-board-fill-demo`

## I005: Candidate Blocks Must Snap To The Exact Grid

Tags: math, grid, visual-layout-error, animation-design-error, puzzle, candidate-block

Trigger: A task animates added cells, added triangles, candidate blocks, or solution markers on a grid.

Mistake: Scaling, offsetting, or overlaying candidate blocks so they do not perfectly align with existing grid boundaries; labels or arrows may hide the candidate.

Fix: Draw candidate blocks from the same grid path functions used for the base grid. Avoid transform scaling for final candidate positions. Keep labels and arrows outside the block.

Rule: Candidate geometry must reuse the base grid coordinates and remain unobstructed in preview frames.

Source: `examples/puzzle-board-fill-demo`

## I006: Browser Preview Must Be Immediately Visible

Tags: workflow, preview-first, hyperframes, technical-implementation-error, timing-sync-error, visual-layout-error

Trigger: A HyperFrames animation is delivered as an HTML preview file or opened directly through a browser/file URL.

Mistake: Building only a seek-driven composition so the browser opens at an empty or near-empty first frame, or relying on remote runtime dependencies that may not load in local preview.

Fix: Make the ordinary browser preview show meaningful content immediately, use local dependencies for preview playback, and keep deterministic seek support for HyperFrames inspection/rendering.

Rule: A preview file must not appear blank when opened normally. If the first seconds are an intentional build-in, default the browser preview to a visible time or provide a deterministic preview timeline without breaking frame seek.

Source: `examples/light-shadow-channel-demo`

## I007: Do Not Add Unrequested Spatial Decorations To Math Diagrams

Tags: math, spatial-relationship, knowledge-expression-error, animation-design-error, visual-layout-error, route, shortest-path

Trigger: A math route, reflection, shortest-path, or spatial-relationship problem provides a minimal diagram with named givens.

Mistake: Adding a colored region, outline, door swing curve, or other decorative geometry that is not part of the problem and distracts from the actual givens.

Fix: Restore the diagram to only the required givens and proof helpers: entry, exit, wall/mirror line, mirror point, helper line, touch point, and final route.

Rule: For shortest-path route animations, do not add unrequested area fills, boundary outlines, extra curves, or labels. Every visible element must either be a stated given or a necessary construction step.

Source: `examples/light-shadow-channel-demo`

## I008: Recompute Route Geometry After Moving Given Points

Tags: math, spatial-relationship, knowledge-expression-error, animation-design-error, route, shortest-path, reflection

Trigger: A user changes the position of an entry, exit, wall, mirror line, or other given point in a shortest-path or reflection construction.

Mistake: Moving the visible point without updating the mirror point, intersection point, helper path, final path, dash lengths, and labels, causing the animation to show stale geometry.

Fix: Recalculate the reflected point and wall intersection from the updated coordinates, then update every route path and keyframe screenshot.

Rule: Any coordinate change to a given point must trigger a full geometry recomputation for all dependent construction elements before preview is shown.

Source: `examples/light-shadow-channel-demo`

## I009: Keep Reflection Route Construction Direction And Colors Unambiguous

Tags: math, spatial-relationship, knowledge-expression-error, animation-design-error, visual-layout-error, route, shortest-path, reflection, color-state, construction-direction

Trigger: A shortest-path or reflection-route animation uses mirror points, helper lines, touch points, and final route lines in the same diagram.

Mistake: Showing an unexplained dashed candidate triangle before the construction, drawing the helper line in the reverse direction from the intended reasoning order, or letting orange touch-point/moving markers cover blue mirror-point endpoints. These make viewers confuse constraints, mirror doors, and wall-touch points.

Fix: Remove ambiguous pre-construction dashed route shapes unless they are explicitly explained. Draw the mirror-point helper line in the same order as the intended reasoning, such as upper mirror door to lower mirror door. When touch points appear, keep mirror-point endpoints blue and use orange only for wall-touch points and the final route.

Rule: For reflection-based shortest-path animations, every helper shape must have a clear role before it appears; construction-line direction must match the learner's reasoning order; mirror points and touch points must remain visually distinct by color and marker state.

Source: `examples/optimal-route-remotion`

## I010: Distinguish User Annotations From Required Diagram Elements

Tags: workflow, visual-layout-error, knowledge-expression-error, annotation, axis, math, puzzle

Trigger: A user provides screenshots with colored arrows, boxes, handwritten marks, or other feedback annotations on top of a diagram.

Mistake: Treating the user's feedback annotation as a required visual element in the final animation, such as converting a red pointing arrow into the actual symmetry-axis marker.

Fix: Separate annotation intent from final diagram language. Ask whether a mark is a reference annotation if unclear; otherwise use the established project visual style for the real element.

Rule: Feedback screenshots may contain markup that only indicates what to change. Do not reproduce those marks literally unless the user explicitly asks; keep final mathematical markers consistent with the animation's visual system.

Source: `examples/puzzle-board-fill-demo`

## I011: Remove Stale Concept Wording Before Export

Tags: workflow, knowledge-expression-error, math, summary, export-gate, puzzle

Trigger: A project has been corrected through multiple iterations, especially when the problem type or verification relation changed.

Mistake: Leaving old wording in late summary frames, plans, labels, or narration after the visual solution has been corrected, causing the final export to still teach the earlier wrong concept.

Fix: Search the source and production plan for the rejected concept before export, then update every visible summary and record to match the final accepted solution.

Rule: Before export, run a targeted stale-concept check for rejected terms, labels, and visual metaphors. The final summary must match the accepted mathematical relation.

Source: `examples/puzzle-board-fill-demo`
