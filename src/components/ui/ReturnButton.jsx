import { ChevronLeft } from "lucide-react";

export default function ReturnButton({ children, onClick }) {
  return (
    <div className="flex justify-start w-full py-2">
      <button
        className="flex text-textTertiary font-poppins font-semibold py-[10px] px-4"
        onClick={onClick}
      >
        <ChevronLeft className="mr-2" color="#76787A" />
        {children}
      </button>
    </div>
  );
}
