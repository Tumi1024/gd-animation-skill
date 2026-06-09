---
name: generate-demo-animation
description: Mandatory for requests containing 生成演示动画, 生成教学动画, 制作 Remotion 动画, 制作 HyperFrames 动画, 制作课件动画, 根据文稿生成动画分镜, 生成可预览动画项目, 演示动画, 教学动画, 课件动画, Remotion动画, HyperFrames动画, 代码动画, 可预览动画, or 制作演示动画. Use to create, design, modify, preview, or export programmatic demo/explainer/teaching/courseware/code animations using HyperFrames, Remotion, or Manim when appropriate. Must read memory/ and rules/ before storyboarding or code; must not skip the skill workflow.
---

# Generate Demo Animation

Use this skill to make production-ready programmatic animation videos, not disposable webpage demos. Default to HyperFrames or Remotion, keep animation deterministic, and require user confirmation before writing or editing code.

At the start of every task, enforce five gates before implementation: problem-understanding audit, issue/lesson memory retrieval, HyperFrames-or-Remotion route selection, tooling readiness check, and strict self-check plan. If any gate fails, stop and fix the plan before coding.

For the full rule set, read `rules/reference-index.md` and `rules/production-rules.md` when starting a new animation project, when changing architecture, when syncing to audio/subtitles, or before final export. `references/production-rules.md` is kept as a compatibility copy.

Use memory only by targeted retrieval. Before a new animation task, read `memory/rules.json`, then search `memory/issue_log.md` and `memory/lessons_index.md` by task tags. Select the most relevant issue entries and at most 3 lesson files. Do not read all `memory/lessons/` files, all archived cases, or the full issue log when targeted search is enough.

## 强制触发规则

当用户提出以下任务时，必须使用本 Skill：

- 生成演示动画
- 生成教学动画
- 制作 Remotion 动画
- 制作 HyperFrames 动画
- 制作课件动画
- 根据文稿生成动画分镜
- 生成可预览动画项目
- 演示动画
- 教学动画
- 课件动画
- Remotion动画
- HyperFrames动画
- 代码动画
- 可预览动画
- 制作演示动画

执行本 Skill 时必须：

1. 先读取 `memory/` 和 `rules/`。
2. 再制定分镜方案。
3. 再判断 Remotion / HyperFrames / Manim。
4. 不允许直接跳过 Skill 流程生成代码。

## Reference Rule Routing

After reading `rules/reference-index.md`, select task-specific rule files:

- Teaching animation, courseware animation, explainer workflow, or script-to-storyboard: read `rules/general-teaching-animation-workflow.md`.
- Math, geometry, route, proof, formula, quantity relation, or problem-solving animation: read `rules/math-animation-workflow.md`.
- Remotion project, route map, data-driven animation, timeline, editable coordinates, or React video: read `rules/remotion-workflow.md`.
- Manim, formula derivation, geometry proof, graph construction, or precise math object animation: read `rules/manim-workflow.md`.
- Any Remotion / HyperFrames / Manim decision: read `rules/remotion-manim-decision.md`.
- Storyboard, storyboard image prompt, first-frame prompt, visual reference, AI image/video mixed plan: read `rules/storyboard-prompt-rules.md`.

When a task matches more than one category, read all relevant rule files before presenting the plan.

## Core Stance

- Act as a programmatic animation director, knowledge-visualization designer, and HyperFrames/Remotion engineer.
- Use HyperFrames or Remotion as the first implementation route. A normal HTML page, SVG-only file, Canvas-only file, or Manim-only project is only allowed as a temporary prototype unless the user explicitly requests that final format.
- Use HyperFrames for course animations, explainer videos, HTML/CSS/SVG/Canvas/GSAP visuals, audio-synced timelines, and information visualization.
- Use Remotion for React component structure, data-driven animation, complex scene management, reusable templates, or batch generation.
- Do not use AI video generation models as the final animation method unless the user explicitly requests them.
- Do not build only a normal webpage unless the user only wants a web preview. The project must support formal video export.
- Every visible element and motion must serve explanation, emphasis, guidance, transition, or controlled decoration.

## Required Workflow

1. **Extract Task Tags And Retrieve Issue Memory**
   - Analyze the user request and output task tags:
     - Content domain: history, geography, math, science, humanities, archaeology, astronomy, product, process, story, or other.
     - Expression type: timeline, map-location, process-demo, quantity-change, structure-breakdown, comparison, causality, spatial-relationship, camera-motion, transparent-export, or other.
     - Potential risks: knowledge-expression-error, animation-design-error, technical-implementation-error, visual-layout-error, timing-sync-error, export-format-error, or other.
   - Read `memory/rules.json`.
   - Read `rules/reference-index.md`.
   - Read `rules/production-rules.md`.
   - Read task-specific rule files selected from `rules/reference-index.md`.
   - Search `memory/issue_log.md` with the task tags, object names, and risk tags. Prefer `rg` and read only matching entry ranges.
   - Select up to 5 issue entries with the highest overlap in content domain, expression type, object type, and risk.
   - State the selected issue IDs and the concrete rule they impose on the current task.
   - If no issue entry matches, state that no similar issue was found.
   - This step is mandatory. Do not proceed to content analysis, storyboarding, or code if `memory/rules.json`, `rules/reference-index.md`, `rules/production-rules.md`, and task-specific rule files have not been read and `memory/issue_log.md` plus `memory/lessons_index.md` have not been searched.

2. **Retrieve Lessons**
   - Search only `memory/lessons_index.md` for matching lessons.
   - Match priority: content domain first, expression type second, risk tags third.
   - Read at most 3 matching lesson files from `memory/lessons/`.
   - If no lesson matches, state that no relevant lesson was found and use the default workflow.
   - Never load all lessons or all archived cases.

3. **Audit Problem Understanding And Answer Logic**
   - Restate the user's task in one short paragraph.
   - For math, science, puzzle, route, proof, diagram, or other accuracy-sensitive tasks, extract:
     - Given conditions
     - Required answer or target
     - Constraints and forbidden assumptions
     - Known objects and relationships
     - Candidate solution path
     - Final answer or construction result
   - Verify the solving path before storyboarding. If the answer, construction, formula, causality, or interpretation is uncertain, pause and ask for confirmation or verify with reliable references.
   - Do not animate a solution that has not passed this problem-understanding audit.

4. **Analyze Content**
   - Classify the content type: scientific principle, history, product, data visualization, process, story, tutorial, concept explanation, or other.
   - Extract the core message, participants/objects, relationships, change process, and intended viewer takeaway.
   - Audit script accuracy before storyboarding. If facts, logic, terminology, or wording are inaccurate or misleading, propose corrections before production.
   - Split the content into scenes. Each scene should carry one main expression goal.

5. **Choose Medium And Check Tooling**
   - Pick HyperFrames or Remotion before considering any other implementation route.
   - Note why the chosen medium fits.
   - Check whether the project already has the required tooling. Prefer the repository `package.json` if present; otherwise run or recommend `npm install` for Remotion/HyperFrames dependencies before implementation.
   - Use the bundled starter templates in `templates/remotion/` or `templates/hyperframes/` when creating a new project from scratch.
   - Judge Remotion / HyperFrames / Manim only after memory/rules retrieval and storyboard planning. Use Manim only when formula/geometric derivation is genuinely needed, and still keep video export in scope.

6. **Build Time Plan**
   - If audio/subtitles exist, read the duration/timecodes and build a "timecode -> line/content -> visual action -> element state" table.
   - If no audio/subtitles exist, plan natural timing with start/end times, scene goals, and holds for comprehension.
   - Key actions must bind to absolute time or frame numbers, not rough intuition.
   - If knowledge points or plot beats progress step by step, preserve visual continuity across scenes, including style, composition, spatial structure, camera logic, recurring objects, and motion direction.

7. **Build Visual-Causality Plan**
   - For each scene, list objects, meanings, why each object moves, how it moves, labels/lines/colors, primary vs auxiliary elements, and hidden/export-only decisions.
   - Match visuals to the script's knowledge stage, historical stage, or cognitive stage. Do not use a later correct model to visualize an earlier partial or mistaken model.
   - When accuracy is uncertain, verify with reliable references or image references before drawing the model.
   - If the animation will be inserted into an existing video, first extract the source video's style rules: character style, space, palette, lighting, camera, material, and visual density. The new animation must belong to that style system.
   - Remove meaningless guides, arrows, particles, labels, glows, or motion.

8. **Build Knowledge-Expression Design Before SVG**
   - Before generating any SVG animation, extract the core knowledge points from the current script segment.
   - Identify likely viewer misunderstandings.
   - State the visual method that best expresses each knowledge point.
   - List what must not be drawn incorrectly, including causality, time order, spatial relationships, quantities, proportions, and metaphor boundaries.
   - Output the animation storyboard notes.
   - Only after completing these steps may SVG code be generated.

9. **Explain Memory And Lesson Application**
   - When presenting the animation plan, include a short issue-memory note for any retrieved issues.
   - Format: `Applied Ixxx because this task involves <tag>; therefore <rule>.`
   - When presenting the animation plan, include a short lesson-application note for any retrieved lessons.
   - Format: `Applied Lxxx because this task involves <tag>; therefore <rule>.`
   - Issues and lessons support judgment but never replace current task analysis.

10. **Ask For User Confirmation Before Code**
   - Before writing or editing implementation code, present the problem-understanding audit, answer/logic audit, scene plan, timing plan, visual-causality plan, technical approach, tooling check, and any assumptions.
   - For animation production, the confirmation package must include five tables/checklists:
     - Scene table
     - Timeline table
     - Element state table
     - Key action table
     - Self-check checklist
   - Wait for explicit user confirmation before code changes. This prevents avoidable rework.
   - For a narrow bug fix, state the exact files/areas and intended edits first; proceed only after user approval unless the user already explicitly asked to apply that fix.

11. **Implement Deterministically**
   - HyperFrames: define composition metadata, mount audio clips, register paused timelines on `window.__timelines`, and make all animation seekable.
   - Remotion: define `Composition` width/height/fps/duration, use frame-driven animation, `staticFile`, and `Audio`.
   - Do not drive core animation with real time, uncontrolled randomness, or browser playback state.

12. **Preview And Iterate**
   - Provide a preview URL/path.
   - Check that the current visual matches the current script/audio moment and the validated answer/logic path.
   - Check whether the frame contains unnecessary elements, unclear visual expression, unclear styling/motion, or inaccurate visual meaning. If so, report the issue and ask the user to decide before changing it.
   - If the user says an element position is inaccurate, offset, not aligned with a screenshot mark, or hard to describe precisely, switch that element into a temporary drag-calibration mode instead of repeatedly guessing coordinates.
   - In drag-calibration mode, expose only the relevant control points with clear names, tell the user which point(s) to drag, then read the adjusted coordinates and freeze them into the animation code.
   - After freezing dragged coordinates, recompute every dependent element, regenerate the preview, and remove drag handles, reset buttons, helper panels, and debug labels before final export.
   - If logic, answer, layout, timing, or visual meaning is wrong, self-correct and regenerate the preview before presenting it as ready.
   - Modify only the affected scope when the user gives feedback.

13. **Retrospect After User Feedback**
   - When the user points out animation problems, requests a correction, corrects an expression error, or adds a requirement, do not only fix the current output.
   - Also output a concise lesson retrospective:
     - Original request
     - Initial plan problem
     - User feedback
     - Final revision direction
     - Error type
     - Reusable lesson
     - Suggested tags
     - Whether it should be added to the lesson library
   - If the lesson is reusable, propose adding it to `memory/lessons_index.md` and `memory/lessons/Lxxx.md`. Write it only when the user explicitly asks to add/save/record it, or when the current task explicitly includes updating the skill memory.
   - If the issue is procedural, visual, or implementation-specific and likely to recur, append a concise tagged entry to `memory/issue_log.md` when the user explicitly asks to record it or when the current task explicitly includes updating this skill memory.

14. **Export And Verify**
   - Export only after preview is accepted or the user asks for export.
   - Check resolution, fps, duration, audio, subtitle state, output file path, and key frames.
   - If any check fails, fix and re-export before saying it is complete.

## Hard Rules

- Do not skip the problem-understanding audit for math, science, puzzle, route, proof, diagram, or accuracy-sensitive tasks. Wrong interpretation or wrong answer invalidates the animation.
- Do not implement the final animation as plain HTML/SVG/Canvas when HyperFrames or Remotion can satisfy the task. Plain HTML/SVG/Canvas may be used only as a prototype layer or inside HyperFrames/Remotion.
- Do not start coding before checking Remotion/HyperFrames tooling and selecting one as the primary route.
- Do not generate code directly after the user request. Read `memory/`, `rules/reference-index.md`, `rules/production-rules.md`, and selected task-specific rules; create the storyboard/plan; then judge Remotion / HyperFrames / Manim.
- Do not leave debug UI, browser controls, side panels, caption boxes, or progress controls in final video unless requested.
- Do not read all lesson files, all archived cases, or the full issue log during normal generation. Retrieve issue entries by searching `memory/issue_log.md` with task tags, then retrieve lessons from `memory/lessons_index.md` and read at most 3 lesson files.
- Do not proceed if issue/lesson memory was not retrieved. Read/search the memory files first, then state which rules apply.
- Do not burn subtitles by default. Use subtitle files for timing unless the user asks to display subtitles.
- Do not produce from an inaccurate script without first flagging factual, logical, terminology, or wording issues and proposing fixes.
- Do not draw a visual model that contradicts the script's knowledge stage, historical stage, cognitive stage, or intended misconception/correction sequence.
- Do not generate SVG animation code before completing knowledge-expression design: core knowledge point, likely misunderstanding, visual expression method, forbidden wrong drawings, and storyboard notes.
- Do not insert a visually unrelated animation into an existing video. Match the source video's style system first.
- Do not break visual continuity in progressive knowledge or story sequences. Keep style, composition, structure, camera logic, and recurring visual anchors coherent unless the break is intentional and justified.
- Do not let text overlap the subject, leave the frame, or hide important motion.
- Do not keep guessing coordinates after repeated visual-position feedback. Use a temporary drag-calibration preview, then freeze the user-adjusted coordinates into deterministic code.
- Do not silently accept unnecessary elements, unclear visual expression, unclear style/motion, or inaccurate visual meaning. Flag these issues to the user and wait for a decision before changing direction.
- Do not use `Date.now`, `performance.now`, `requestAnimationFrame`, `setInterval`, or CSS infinite animations for core exported motion.
- Use seeded or deterministic logic for particles, flicker, random layouts, and loops.
- Fixed video canvas dimensions must drive layout; avoid final-render dependence on unstable viewport height such as `100vh`.

## Self-Check Gate

Before any "done" response, verify:

- Problem understanding: the task has been restated; givens, target answer, constraints, forbidden assumptions, and solution path are listed and consistent.
- Answer logic: math/science/puzzle/route/proof answers have been checked before visuals are produced.
- Planning artifacts: scene table, timeline table, element state table, key action table, and self-check checklist have been created before implementation.
- Content: current scene matches current script/audio/subtitle moment.
- Accuracy: script claims have been checked; inaccurate or misleading knowledge points have proposed corrections.
- Logic: every motion, color, label, line, arrow, and position has a meaning.
- Visual clarity: no unnecessary elements; visual style, motion, and layout express the intended point clearly.
- Visual accuracy: the frame's visual meaning accurately represents the script, knowledge point, process, or story beat.
- SVG knowledge expression: after generating SVG, remove narration mentally and check whether the picture alone communicates the core knowledge point.
- SVG causality: the picture must not imply a wrong causal relationship.
- SVG logic: animation direction, order, proportion, and position must follow the knowledge logic.
- SVG metaphor boundary: do not draw a metaphor as if it were literal fact.
- SVG relationship order: do not reverse time order, spatial relationships, or quantity relationships.
- SVG risk handling: if expression risk exists, revise the storyboard first, then revise the SVG.
- Stage fidelity: the visual model matches the current knowledge/historical/cognitive stage.
- Style continuity: if inserted into existing media, the animation style matches the source video's palette, lighting, material, camera, and density.
- Progressive continuity: if the content is step-by-step, visual style, composition, structure, recurring objects, and camera logic remain coherent across stages.
- Engineering: the project is HyperFrames or Remotion first, with required tooling checked, seekable, previewable, and exportable.
- Layout: no extra UI, no borders/bands, no overflow, no unreadable or obstructive text.
- Media: assets load, audio is mounted/exported, subtitle display follows user instruction.
- Export: final file path, resolution, fps, duration, and keyframe screenshots have been checked.
- Issue memory: `memory/rules.json` was read, `memory/issue_log.md` was searched by task tags, relevant issue IDs were applied, and new reusable issues were recorded when explicitly requested or when updating skill memory.
- Lesson memory: task tags were extracted, at most 3 lessons were retrieved from the index, applied lessons were named, and user feedback produced a retrospective when applicable.

If any item fails, fix it before presenting completion.
