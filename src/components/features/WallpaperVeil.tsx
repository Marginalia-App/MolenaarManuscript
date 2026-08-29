import wallpaper from "@/assets/wallpaper-texture.jpg";
import { cn } from "@/lib/utils";

interface WallpaperVeilProps {
  className?: string;
  opacity?: number;
  fixed?: boolean;
}

/**
 * The creeping Yellow-Wallpaper overlay. Rendered above the page background
 * and below content, it gives every surface the sense of paper that is
 * slowly remembering it was once a wall.
 */
export default function WallpaperVeil({
  className,
  opacity = 0.16,
  fixed = true,
}: WallpaperVeilProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none inset-0 wallpaper-veil",
        fixed ? "fixed" : "absolute",
        className
      )}
      style={
        {
          opacity,
          "--wallpaper-image": `url(${wallpaper})`,
        } as React.CSSProperties
      }
    />
  );
}
