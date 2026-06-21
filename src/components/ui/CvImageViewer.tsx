"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import { cn } from "@/lib/utils";

type CvImageViewerProps = {
  open: boolean;
  imageSrc: string;
  alt: string;
  onClose: () => void;
};

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const STEP = 0.25;

function clampScale(value: number) {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, value));
}

function getTouchDistance(touches: TouchEvent["touches"]) {
  if (touches.length < 2) return 0;
  const a = touches[0];
  const b = touches[1];
  return Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
}

export function CvImageViewer({ open, imageSrc, alt, onClose }: CvImageViewerProps) {
  const [scale, setScale] = useState(1);
  const lastPinchDistance = useRef(0);

  const resetZoom = useCallback(() => setScale(1), []);

  useEffect(() => {
    if (!open) return;

    resetZoom();
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, resetZoom]);

  function zoomIn() {
    setScale((current) => clampScale(current + STEP));
  }

  function zoomOut() {
    setScale((current) => clampScale(current - STEP));
  }

  function handleWheel(event: React.WheelEvent) {
    event.preventDefault();
    setScale((current) =>
      clampScale(current + (event.deltaY < 0 ? STEP * 0.5 : -STEP * 0.5)),
    );
  }

  function handleTouchStart(event: React.TouchEvent) {
    if (event.touches.length === 2) {
      lastPinchDistance.current = getTouchDistance(event.touches);
    }
  }

  function handleTouchMove(event: React.TouchEvent) {
    if (event.touches.length !== 2) return;

    const distance = getTouchDistance(event.touches);
    if (lastPinchDistance.current > 0) {
      const delta = (distance - lastPinchDistance.current) * 0.008;
      setScale((current) => clampScale(current + delta));
    }
    lastPinchDistance.current = distance;
  }

  function handleTouchEnd() {
    lastPinchDistance.current = 0;
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-black/90" role="dialog" aria-modal="true" aria-label={alt}>
      <div className="flex shrink-0 items-center justify-between px-4 py-3">
        <p className="text-sm font-medium text-white/90">Lý lịch bác sĩ</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={zoomOut}
            disabled={scale <= MIN_SCALE}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/15 text-lg text-white transition-colors hover:bg-white/25 disabled:opacity-40"
            aria-label="Thu nhỏ"
          >
            −
          </button>
          <button
            type="button"
            onClick={resetZoom}
            className="min-w-[3rem] cursor-pointer rounded-full bg-white/15 px-2 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/25"
          >
            {Math.round(scale * 100)}%
          </button>
          <button
            type="button"
            onClick={zoomIn}
            disabled={scale >= MAX_SCALE}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/15 text-lg text-white transition-colors hover:bg-white/25 disabled:opacity-40"
            aria-label="Phóng to"
          >
            +
          </button>
          <button
            type="button"
            onClick={onClose}
            className="ml-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white text-xl font-light text-slate-900 transition-colors hover:bg-slate-100"
            aria-label="Đóng"
          >
            ×
          </button>
        </div>
      </div>

      <div
        className="min-h-0 flex-1 overflow-auto overscroll-contain px-3 pb-4 touch-pan-x touch-pan-y"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex min-h-full min-w-full items-start justify-center py-2">
          <div
            className="origin-top transition-transform duration-150"
            style={{ transform: `scale(${scale})` }}
          >
            <Image
              src={imageSrc}
              alt={alt}
              width={1200}
              height={1600}
              className="h-auto w-[min(100vw-1.5rem,720px)] max-w-none select-none"
              draggable={false}
              priority
            />
          </div>
        </div>
      </div>

      <p className="shrink-0 pb-[max(0.75rem,env(safe-area-inset-bottom))] text-center text-xs text-white/60">
        Dùng nút +/− hoặc chụm 2 ngón để phóng to · thu nhỏ
      </p>
    </div>
  );
}
