# Storyboard And Visual Prompt Rules

Condensed from `通用型教学动画生成器3.0.md` and `通用型教学动画生成器3.0_v5_谨慎判定Remotion-Manim_分镜图Prompt强制版.md`.

## Core Role

For teaching animation planning, produce teaching analysis, script structure, usable narration, timecodes, director-level storyboard, shot action nodes, production-method judgment, visual reference prompts, and special Remotion/Manim data only after the planning gates pass.

## Source Priority

- Preserve user script, dialogue, subtitles, narration, teaching sequence, and role lines.
- Optimize only sentence breaks, visual rhythm, and technical expression unless the user asks for rewriting.
- Do not change the original teaching meaning.

## Director Storyboard Table

Each major section should answer:

- Teaching function.
- Viewer emotion or cognitive state.
- Best visual expression.
- Camera language.
- Core visual focus.
- Information hierarchy.
- Relation to previous/next shot.
- Initial production-method judgment.
- Production risk.

## Storyboard Image Prompt Rules

Generate storyboard/first-frame/reference prompts when:

- The shot uses AI video, AI image, Seedance, or asset compositing.
- The shot needs a static first frame before video generation.
- The user asks for storyboard stills, first frames, visual references, or shot references.
- The shot belongs to Remotion/Manim but still needs a visual reference for composition, style, or final look.
- The shot is a map, route, timeline, formula, geometry, flowchart, or data diagram and needs visual framing before code.

## Prompt Boundaries

- A storyboard image prompt describes static composition, character state, scene content, expression, props, lighting, color, style, and final look.
- Do not mix camera motion, transition timing, audio, subtitles, or full video action into a still-image prompt.
- Do not mix Remotion/Manim code into image prompts.
- Chinese text, subtitles, place names, numbers, formulas, labels, and titles should default to programmatic/post overlay unless the user explicitly asks for baked-in text.

## Consistency Rules

- Keep character face, hairstyle, clothes, accessories, and body type consistent.
- Keep prop shape, color, scale, and purpose consistent.
- Keep scene structure, palette, era, and light direction consistent.
- Keep character/scene proportions consistent.
- Remotion/Manim shots can still need storyboard prompts to define composition and style, but precision content must remain programmatic.

## Code Generation Boundary

For Remotion/Manim, output production advice and data during storyboard planning. Generate full code or project files only after the user confirms the plan or explicitly asks to build.
