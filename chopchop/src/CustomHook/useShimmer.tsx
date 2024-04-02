import { useState, useEffect } from "react";

interface ShimmerProps {
  width: number;
  height: number;
  style?: React.CSSProperties;
}

const useShimmer = (
  isLoading: boolean,
  props: ShimmerProps
): { isVisible: boolean; shimmerStyle: React.CSSProperties } => {
  const [isVisible, setIsVisible] = useState(isLoading);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(isLoading), 0);
    return () => clearTimeout(timeout);
  }, [isLoading]);

  const shimmerStyle: React.CSSProperties = {
    width: props.width,
    height: props.height,
    background:
      "linear-gradient(to right, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.3) 100%)",
    animation: "shimmer 1.5s infinite linear",
    ...props.style,
  };

  return { isVisible, shimmerStyle };
};

export default useShimmer;
