import { useState } from "react";
import { X } from "lucide-react";

const PromoBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-sale text-sale-foreground py-2 px-4 text-center relative">
      <p className="text-sm font-medium">
        🔥 FLASH SALE: Extra 20% off everything! Use code{" "}
        <span className="font-bold underline">SAVE20</span> at checkout
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
        aria-label="Close promo banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default PromoBar;
