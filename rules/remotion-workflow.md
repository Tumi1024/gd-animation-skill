# Remotion Workflow Rules

Condensed from `AI Remotion 动画生产数据生成器.md` and `remotion文件结构.md`.

## When To Use Remotion

Use Remotion for React component structure, data-driven animation, editable coordinates, map-route animation, reusable templates, batch generation, timeline graphics, text/number overlays, and strict frame-based control.

## Required Remotion Outputs

For a Remotion task, prepare:

1. Shot analysis.
2. Voiceover/dialogue plan.
3. Asset list.
4. Image generation prompts when needed.
5. File naming rules.
6. JSON data, such as route, coordinates, timing nodes, labels, camera movement, or object states.
7. Main video component.
8. Optional editor component for coordinate/time adjustment.
9. `Root.tsx` composition registration.
10. Preview and export commands.
11. Manual fine-tuning notes.

## Recommended Structure

```text
remotion-project/
├── package.json
├── src/
│   ├── Root.tsx
│   ├── components/
│   ├── data/
│   └── compositions/
├── public/
│   └── assets/
└── out/
```

## Data Rules

- Put editable route, timeline, coordinates, labels, and camera values in JSON or structured constants.
- Do not bury editable timing/position values inside scattered JSX.
- Provide initial coordinates and time nodes that can be manually adjusted.
- Use stable IDs for scenes, elements, labels, and route nodes.

## Component Rules

- Register each composition with width, height, fps, and `durationInFrames`.
- Use `useCurrentFrame`, `useVideoConfig`, `interpolate`, and deterministic frame math.
- Use `staticFile` for assets and `Audio` for sound.
- Keep preview/editor components separate from final video components.
- Hide editor UI in final export.

## Export Rules

- Provide preview command and render command.
- Check resolution, fps, duration, audio, subtitles, and key frames.
- For map/route projects, verify labels, paths, camera follow, node timing, and route continuity.
