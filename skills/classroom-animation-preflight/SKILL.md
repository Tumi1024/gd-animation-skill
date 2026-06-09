---
name: classroom-animation-preflight
description: Check classroom animation projects before preview or export when the task involves geometry, symmetry, shortest-path, route planning, or puzzle-board demos. Use when the user asks to create, revise, preview, or export a classroom animation and you need the proven QA sequence.
argument-hint: "[project-path]"
disable-model-invocation: true
user-invocable: false
allowed-tools:
  - Read
  - Grep
  - Bash
---

# Classroom Animation Preflight

## When to use

Use this skill when:
1. The task is in a classroom-animation workspace or a nearby courseware animation repo.
2. The animation involves geometry, axial symmetry, reflection shortest path, route planning, or puzzle-board fill.
3. You are about to generate a preview, export a video, or summarize accepted corrections.
4. The user is correcting route coordinates, ground guides, callout positions, or demo-only calibration UI.

Do not use this skill for:
1. General AIGC research tasks with no animation artifact.
2. Pure model-selection or morning-briefing work.

## Inputs / context to gather

1. Confirm whether the artifact is final delivery or only a prototype.
2. Read the project instructions and any local memory block for classroom animation workflow.
3. Identify the exact math constraint: `axis of symmetry`, `entrance -> display wall -> exit`, `reflection shortest path`, or `补一块/补全`.
4. Note any user-specified coordinate changes, accepted screenshots, or explicit visual corrections.
5. For ground-route scenes, identify the actual ground reference line, any ground dashed guides, and every dependent construct tied to those endpoints.

## Procedure

1. Lock the delivery path.
   - Default final delivery to `Remotion` or `HyperFrames`.
   - Treat standalone `HTML/SVG/Canvas` as prototype-only unless the user explicitly wants that as the final artifact.
2. Apply the preview gate before export.
   - Generate a checkable preview first.
   - Do not jump straight to MP4 before the user accepts the preview.
   - Ensure browser preview opens on a visible frame or stable autoplay state.
3. Strip the scene to required elements.
   - Keep only the given problem elements plus necessary construction helpers.
   - Remove unrequested borders, decorative fills, door arcs, or screenshot annotation arrows/boxes.
4. Rebuild the math from the exact givens.
   - For axial symmetry, derive the axis from corresponding known vertices/shapes.
   - For `entrance -> display wall -> exit`, show the wall-touch constraint before any direct path baseline.
   - For reflection shortest path, avoid an unexplained dashed candidate triangle before the construction.
5. Preserve stable visual semantics.
   - Reflection helper line should draw in learner reasoning order.
   - Keep mirror points visually distinct from touch points.
   - If axial symmetry is required, every final solution figure must show a visible aligned symmetry axis.
6. Recompute all dependent geometry after edits.
   - If entrance/exit/wall coordinates change, recompute mirror points, touch points, helper lines, and final path together.
   - If the scene uses ground dashed guides, make sure they sit on the ground reference line, not a wall edge or visual frame border.
   - When guide endpoints move, recompute mirrored-door lines, reference points, helper lines, final route, and character motion from the frozen endpoints.
   - For triangular boards, rebuild exact subdivision counts, orientation, filled-cell count, and candidate-piece geometry before recoloring.
7. Use drag calibration when text feedback is insufficient.
   - If the user repeatedly says a line, point, label, or path is offset, or gives a screenshot annotation that is hard to translate into exact coordinates, create a temporary draggable preview for only the affected element points.
   - Tell the user exactly which named point(s) to drag.
   - After the user finishes adjusting, read the dragged coordinates, freeze them into the animation code, and recompute all dependent geometry.
   - Remove drag handles, reset controls, calibration panels, and temporary labels before final preview/export.
8. Check labels, motion, and obstruction after geometry is stable.
   - Text callout boxes must fully cover the text and avoid reference points, mirror doors, route segments, and dashed guides.
   - If the user asks to slow movement to `20%`, keep linear progress and extend the duration instead of switching to `ease-out`.
9. Export only after a final stale-check pass.
   - Search for rejected concepts like `中心对称` or outdated counts like `再补 1 个三角格`.
   - Make sure final summaries and captions match the accepted correction set.
   - Sample key frames to confirm ground guides are aligned, captions are unobstructed, and no debug UI remains.

## Efficiency plan

1. Read only the classroom-animation memory block instead of scanning all memories.
2. Determine the exact math constraint early; it decides most of the validation path.
3. Stop expanding once you have preview acceptance criteria, geometry constraints, and export checks.

## Pitfalls and fixes

- Symptom: final artifact is exported before anyone can inspect it.
  Fix: enforce preview-first and wait for acceptance before MP4.
- Symptom: geometry looks clean but solves the wrong problem.
  Fix: derive from the exact givens, not from generic helper geometry.
- Symptom: shortest-path explanation is confusing.
  Fix: delay candidate triangles until after the construction and keep point colors semantically separated.
- Symptom: coordinate edits break overlays.
  Fix: recompute every dependent construction instead of patching one path segment.
- Symptom: repeated screenshot-based position feedback still produces offset lines or labels.
  Fix: switch to temporary drag calibration, freeze the user-adjusted coordinates, then remove editor UI before export.
- Symptom: route guides look correct in one frame but float off the floor overall.
  Fix: align the guide endpoints to the ground reference line first, then verify with key-frame sampling after recomputation.
- Symptom: callout text overlaps geometry after a position fix.
  Fix: move and resize the full text box with the text instead of nudging the text node alone.
- Symptom: puzzle-board correction still reflects an old interpretation.
  Fix: rebuild from accepted counts and remove stale rejected labels from the output summary.

## Verification checklist

1. Final stack is `Remotion` or `HyperFrames` unless the user explicitly chose prototype-only output.
2. A visible preview exists before export.
3. The scene contains only given elements plus necessary helpers.
4. The math constraint shown matches the problem statement.
5. Symmetry axes, mirror points, touch points, and candidate pieces use consistent geometry and color semantics.
6. Any coordinate change was propagated through all dependent constructions.
7. Ground dashed guides, if present, land on the real ground reference line and remain visually distinct.
8. Any drag-calibrated coordinates were frozen into deterministic code and editor UI was removed before export.
9. Final captions/summary contain no stale rejected concept or outdated counts.
