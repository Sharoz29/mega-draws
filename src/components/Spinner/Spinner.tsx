import React from "react";

export default function Spinner({
  height,
  isFullScreen,
}: {
  height: number;
  isFullScreen: boolean;
}) {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        height: isFullScreen ? "100vh" : `${height}px`,
      }}
    >
      <div className="w-20 h-20 border-4 border-solid border-t-gray-500 animate-spin rounded-full"></div>
    </div>
  );
}
