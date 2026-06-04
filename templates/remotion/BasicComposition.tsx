import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export function BasicComposition() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(frame, [0, fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  });

  return (
    <AbsoluteFill
      style={{
        background: "#f7f4ef",
        color: "#1d1d1f",
        fontFamily: "Inter, Arial, sans-serif",
        alignItems: "center",
        justifyContent: "center",
        opacity
      }}
    >
      Demo animation preview
    </AbsoluteFill>
  );
}
