import { useEffect, useState, useCallback, useRef } from 'react';

/**
 * Reusable Drawer Component
 *
 * Props:
 * - isOpen        : boolean
 * - onClose       : () => void
 * - children      : ReactNode
 * - title         : string (optional)
 * - defaultWidth  : number — desktop width % (min 30, default 38)
 * - defaultHeight : number — mobile height % (default 70)
 */

const MOBILE_MIN_HEIGHT = 20;   // is se kam karo toh auto close
const DESKTOP_MIN_WIDTH = 30;   // is se kam karo toh auto close

export default function Drawer({
  isOpen,
  onClose,
  children,
  title = "",
  defaultWidth = 38,
  defaultHeight = 70,            // ← mobile default 70%
}) {
  const [size, setSize] = useState({ width: defaultWidth, height: defaultHeight });
  const [isMobile, setIsMobile] = useState(false);
  const dragging = useRef(false);
  const startPos = useRef(0);
  const startSize = useRef(0);
  const overlayRef = useRef(null);

  // Reset size when drawer opens
  useEffect(() => {
    if (isOpen) {
      setSize({ width: defaultWidth, height: defaultHeight });
    }
  }, [isOpen, defaultWidth, defaultHeight]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const onDragStart = useCallback((e) => {
    dragging.current = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    startPos.current = isMobile ? clientY : clientX;
    startSize.current = isMobile ? size.height : size.width;
    e.preventDefault();
  }, [isMobile, size]);

  const onDragMove = useCallback((e) => {
    if (!dragging.current) return;
    if (isMobile) {
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const delta = startPos.current - clientY;
      const newH = Math.min(92, Math.max(5, startSize.current + (delta / window.innerHeight) * 100));
      setSize(s => ({ ...s, height: newH }));
    } else {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = startPos.current - clientX;
      const newW = Math.min(80, Math.max(5, startSize.current + (delta / window.innerWidth) * 100));
      setSize(s => ({ ...s, width: newW }));
    }
  }, [isMobile]);

  const onDragEnd = useCallback(() => {
    if (!dragging.current) return;
    dragging.current = false;

    // Auto close if dragged below threshold
    if (isMobile) {
      if (size.height < MOBILE_MIN_HEIGHT) {
        onClose();
      }
    } else {
      if (size.width < DESKTOP_MIN_WIDTH) {
        onClose();
      }
    }
  }, [isMobile, size, onClose]);

  useEffect(() => {
    window.addEventListener("mousemove", onDragMove);
    window.addEventListener("mouseup", onDragEnd);
    window.addEventListener("touchmove", onDragMove, { passive: false });
    window.addEventListener("touchend", onDragEnd);
    return () => {
      window.removeEventListener("mousemove", onDragMove);
      window.removeEventListener("mouseup", onDragEnd);
      window.removeEventListener("touchmove", onDragMove);
      window.removeEventListener("touchend", onDragEnd);
    };
  }, [onDragMove, onDragEnd]);

  const drawerStyle = isMobile
    ? {
        position: "fixed",
        bottom: 0, left: 0, right: 0,
        height: isOpen ? `${size.height}vh` : "0vh",
        zIndex: 9999,
        borderRadius: "16px 16px 0 0",
        boxShadow: "0 -4px 32px rgba(0,0,0,0.15)",
        transition: dragging.current ? "none" : "height 0.42s cubic-bezier(0.4,0,0.2,1)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        pointerEvents: isOpen ? "auto" : "none",
        willChange: "height",
      }
    : {
        position: "fixed",
        top: 0, right: 0, bottom: 0,
        width: isOpen ? `${size.width}vw` : "0vw",
        zIndex: 9999,
        borderRadius: "16px 0 0 16px",
        boxShadow: "-4px 0 32px rgba(0,0,0,0.12)",
        transition: dragging.current ? "none" : "width 0.42s cubic-bezier(0.4,0,0.2,1)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        pointerEvents: isOpen ? "auto" : "none",
        willChange: "width",
      };

  return (
    <>
      {/* Backdrop */}
      <div
        ref={overlayRef}
        onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.4)",
          zIndex: 9998,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.42s ease",
          backdropFilter: isOpen ? "blur(3px)" : "none",
        }}
      />

      {/* Drawer */}
      <div style={drawerStyle} className="bg-white dark:bg-gray-800">

        {/* Desktop — left resize handle */}
        {!isMobile && (
          <div
            onMouseDown={onDragStart}
            onTouchStart={onDragStart}
            className="bg-gray-100 dark:bg-gray-700 border-r border-gray-200 dark:border-gray-600"
            style={{
              width: "18px", flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "ew-resize", userSelect: "none",
            }}
            title="Drag to resize or close"
          >
            <div className="bg-gray-400"
              style={{ width: "4px", height: "48px", borderRadius: "2px" }}
            />
          </div>
        )}

        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

          {/* Mobile — top drag handle */}
          {isMobile && (
            <div
              onMouseDown={onDragStart}
              onTouchStart={onDragStart}
              style={{
                padding: "14px 0 6px",
                display: "flex", justifyContent: "center",
                cursor: "ns-resize", userSelect: "none", flexShrink: 0,
              }}
            >
              <div className="bg-gray-400"
                style={{ width: "44px", height: "4px", borderRadius: "2px" }}
              />
            </div>
          )}

          {/* Header */}
          <div
            className="border-b border-gray-200 dark:border-gray-600"
            style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 20px", flexShrink: 0,
            }}
          >
            <span className="text-lg font-bold text-violet-600 dark:text-white">
              {title}
            </span>
            <button
              onClick={onClose}
              className="flex bg-gray-600 py-1 px-2 rounded-md text-gray-200 hover:bg-gray-500 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto p-6">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}