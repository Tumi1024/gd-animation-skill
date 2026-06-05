# Math Animation Workflow Rules

Condensed from `数学教学动画制作工作流.md`.

## Core Principle

Math animation must not change the problem meaning, known conditions, quantity relationships, geometry relationships, solution goal, or teaching intention. Visual beauty is secondary to correct reasoning.

## Required Workflow

1. Parse the exact problem: known conditions, unknown target, constraints, units, diagram elements, and allowed operations.
2. Build teaching design: knowledge points, likely student mistakes, step order, core construction, and verification method.
3. Build script/time plan: narration or simulated timeline; key actions tied to time or frame.
4. Build storyboard: one mathematical idea per stage.
5. Build geometry/object data: points, lines, angles, labels, equations, regions, colors, and object IDs.
6. Build SVG/HTML or static preview for layout and object-state check.
7. Choose final route: Remotion/HyperFrames first; Manim only when formula/geometric derivation benefits from it.
8. Render preview and inspect key frames before export.

## Math Visual Rules

- Preserve original topic, objects, quantities, target, and teaching intent.
- Correct typos or incomplete wording only when doing so does not change the math relation.
- Establish the whole figure first, then reveal known conditions, reasoning path, and conclusion.
- For geometry, explicitly define points, lines, angles, sides, circles, helper lines, shaded regions, congruence/similarity/area relations, and layer order.
- For word problems or quantity relations, use line diagrams, tables, arrows, blocks, or structured charts to show relationships.
- Text, formulas, labels, angle marks, and side labels must be readable and must not overlap the figure.
- Use stable color/highlight conventions: same color for corresponding relationships, bold stroke for current object, muted opacity for inactive helpers.
- Animation order must match reasoning order: understand problem -> show target -> find path -> derive -> verify -> summarize.
- Do not add unrelated roles, decorations, complex backgrounds, or visual metaphors that affect problem meaning.

## SVG/Preview Rules

- SVG preview should expose object IDs, label positions, highlight order, and occlusion risks.
- Suitable effects: path draw, point fade-in, segment extension, angle mark reveal, region fade, formula step reveal, slight emphasis scale, arrow path movement, opacity/color switching.
- Avoid cinema lighting, 3D perspective, heavy particles, and decorative backgrounds for core math explanation.
