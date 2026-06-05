# Remotion / HyperFrames / Manim Decision Rules

Condensed from `AI教学视频分镜制作与Remotion-Manim判定规则.md`.

## Per-Shot Questions

For each scene or shot, answer:

1. Does the frame contain Chinese text, place names, numbers, formulas, or precise labels?
2. Does it contain routes, arrows, tracks, path movement, map following, or object-position editing?
3. Does it need strict synchronization with narration/subtitles?
4. Does it include mathematical graphs, geometry, formula derivation, ratio relationships, or proof logic?
5. Should it become a reusable or batch-replaceable template?

## Prefer Remotion / HyperFrames When

- There are routes, maps, timelines, text overlays, numeric labels, UI-like panels, data visualization, or strict frame timing.
- Content needs reusable React/component structure, templates, or batch generation.
- Coordinates, labels, object positions, or timings need manual adjustment.
- The scene is a programmatic explainer with many precise visual states.

## Prefer Manim When

- The shot is mainly formula derivation, geometry proof, coordinate transformation, graph construction, algebraic step expansion, or mathematical object manipulation.
- Correct math construction is more important than visual scene richness.
- Complex geometry should be computed first and then drawn precisely.

## Prefer AI Image/Video Or Asset Compositing Only When

- The shot is atmospheric, character/emotion-driven, background-driven, or does not require precise text, numbers, formulas, routes, or logic.
- Precision elements can be separated and overlaid later by Remotion/HyperFrames/Manim.

## Split Mixed Shots

If a shot has both atmosphere and precise elements:

- Separate background/character atmosphere from text, route, formula, diagram, and data layers.
- Use AI image/video only for non-precise visual material.
- Use Remotion/HyperFrames/Manim for precise overlays and final timing.

## Required Summary

After storyboard planning, output:

- Remotion/HyperFrames shot list.
- Manim shot list.
- AI image/video or asset-compositing shot list.
- Full asset requirement list.
- Risk list.

## Hard Rules

- Do not default all shots to AI video.
- Text, place names, numbers, formulas, and labels should be generated or overlaid programmatically unless the user explicitly wants image-baked text.
- Routes, map follow, avatar movement, and path animation should be marked Remotion/HyperFrames first.
- Math, geometry, formula, and logic derivation should be marked Manim only when precision derivation is the main need; otherwise Remotion/HyperFrames can still host the final video.
- Every shot needing Remotion/HyperFrames/Manim must be clearly marked.
