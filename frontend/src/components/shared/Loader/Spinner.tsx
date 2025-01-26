type SpinnerSize = "small" | "default" | "large";

interface SpinnerProps {
  size?: SpinnerSize;
  className?: string;
}

const sizeClasses: Record<SpinnerSize, string> = {
  small: "w-4 h-4",
  default: "w-8 h-8",
  large: "w-12 h-12",
};

const Spinner = ({ size = "default", className = "" }: SpinnerProps) => {
  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className="absolute w-full h-full border-4 rounded-full"></div>
      <div className="absolute w-full h-full border-4 border-[#1D192C] rounded-full animate-spin border-t-transparent"></div>
    </div>
  );
};

export default Spinner;
