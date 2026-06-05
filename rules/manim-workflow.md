# Manim Workflow Rules

Condensed from `Manim教学动画专项工作流与系统提示词.md`.

## When To Use Manim

Use Manim only when formula derivation, geometry proof, coordinate transformation, graph construction, mathematical object control, or step-by-step symbolic reasoning benefits from Manim precision. Do not use Manim as the default route for every teaching animation.

## Required Manim Workflow

1. Content input.
2. Teaching analysis.
3. Explanation/solution route design.
4. Voiceover or narration script.
5. TTS or user audio.
6. SRT/timecode extraction.
7. Manim storyboard by timestamp.
8. Mathematical object data JSON.
9. SVG/HTML/static preview for layout.
10. Check shapes, labels, occlusion, and highlight order.
11. Generate Manim Python code.
12. Render Manim video.
13. Composite with audio, subtitles, and foreground if needed.
14. Verify and export.

## Hard Rules

- Do not jump directly to Manim code.
- Complete teaching analysis before route design.
- Generate or read narration/timecodes before animation storyboard.
- Organize math object data before Manim code.
- For complex geometry, use reliable calculation helpers such as `numpy`, `sympy.geometry`, or `shapely`; Manim should draw and animate the verified geometry.
- If formulas, labels, highlights, or graph objects are involved, define object IDs and layout first.
- Avoid overlap among text, formulas, labels, and graphics.
- Animation must serve teaching logic; do not change the problem or solution for visual effect.
- If SRT exists, align animation to SRT timestamps.
- If no real audio exists, output a simulated timeline and mark it for later audio calibration.

## Manim Output Requirements

- Code must be runnable with Manim Community.
- Include required imports and a clear Scene class name.
- Name graph objects clearly.
- Animate by steps and align wait times to the time plan.
- Keep labels readable and stable.
- Provide render commands.

## Manim QA

Check object placement, label overlap, formula order, highlight order, timing, mathematical correctness, and final compositing before export.
