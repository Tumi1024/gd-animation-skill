# Reference Rule Index

This skill incorporates condensed rules from project reference documents. Do not load the original workspace documents during normal skill use unless the user explicitly asks for a source-doc audit. Use the rule files below instead.

## Source Documents

- `Manim教学动画专项工作流与系统提示词.md` -> `rules/manim-workflow.md`
- `AI Remotion 动画生产数据生成器.md` -> `rules/remotion-workflow.md`
- `remotion文件结构.md` -> `rules/remotion-workflow.md`
- `数学教学动画制作工作流.md` -> `rules/math-animation-workflow.md`
- `通用型教学动画制作工作流.md` -> `rules/general-teaching-animation-workflow.md`
- `AI教学视频分镜制作与Remotion-Manim判定规则.md` -> `rules/remotion-manim-decision.md`
- `通用型教学动画生成器3.0.md` and `通用型教学动画生成器3.0_v5_谨慎判定Remotion-Manim_分镜图Prompt强制版.md` -> `rules/storyboard-prompt-rules.md`

## When To Read Which Rule File

- Read `rules/general-teaching-animation-workflow.md` for any teaching animation, courseware animation, explainer animation, script-to-storyboard task, or full teaching-video workflow.
- Read `rules/math-animation-workflow.md` for math, geometry, formula, route, proof, quantity relationship, chart, or problem-solving animation.
- Read `rules/remotion-manim-decision.md` before deciding Remotion / HyperFrames / Manim, especially for storyboard segmentation or mixed production methods.
- Read `rules/remotion-workflow.md` when the selected route is Remotion or when the task includes route maps, timelines, data-driven elements, editable coordinates, React components, or batch templates.
- Read `rules/manim-workflow.md` when the selected route includes Manim or when math/formula/geometry derivation needs Manim-level precision.
- Read `rules/storyboard-prompt-rules.md` when the task asks for storyboard, storyboard image prompts, first-frame prompts, visual reference prompts, or mixed AI-image/video plus programmatic animation planning.

## Minimum Routing Rule

For every animation task, read:

1. `memory/rules.json`
2. `rules/reference-index.md`
3. `rules/production-rules.md`
4. The task-specific rule files selected from the list above

Then produce the scene table, timeline table, element state table, key action table, and self-check checklist before implementation.
