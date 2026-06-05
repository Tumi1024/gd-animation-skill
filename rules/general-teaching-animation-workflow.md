# General Teaching Animation Workflow Rules

Condensed from `通用型教学动画制作工作流.md`.

## Core Principle

Teaching accuracy and comprehension come before visual richness. The animation must preserve the user's original teaching goal, script meaning, sequence, and subject logic.

## Required Layered Workflow

1. Content input: identify script, topic, audience, duration, visual requirements, assets, audio/subtitle state, and output format.
2. Subject and route judgment: decide whether the content is math-heavy, code/programmatic animation, AI-image/video support, or mixed production.
3. Teaching analysis: clarify knowledge points, student misconceptions, learning barriers, key objects, and final takeaway.
4. Script/voiceover planning: keep original meaning; optimize only sentence breaks, rhythm, and technical expression.
5. Storyboard table: break content by teaching goal, not only by visual scene.
6. Production route: choose HyperFrames / Remotion / Manim / asset-compositing by scene.
7. Preview-first build: produce checkable preview and keyframes before export.
8. Final QA: check teaching accuracy, audio/visual sync, subtitle sync, obstruction, and export format.

## Mandatory Planning Tables

- Scene table: `scene | teaching goal | time range | content | visual focus | production method`
- Storyboard table: `shot | duration | narration | picture | action | asset need | method | risk`
- Timeline table: `start-end | audio/subtitle | visual action | element state | checkpoint`
- Asset table: `asset | purpose | source/generation method | naming | reusable?`
- QA table: `check item | expected result | actual result | fix`

## Hard Rules

- Do not enter math/Manim flow before subject judgment.
- Do not generate a script before teaching analysis.
- Do not generate final storyboard before audio or simulated time plan exists.
- Do not cut audio mechanically; split by meaning and storyboard beats.
- Do not force non-math content into SVG/Manim code flow.
- For math content, keep the code/preview/render path explicit.
- Every storyboard must include both visual description and production-method judgment.
- Final compositing must check audio sync, subtitle sync, visible obstruction, and teaching accuracy.
