export default function Card({ children }) {
  return (
    <div className="flex flex-1 flex-col bg-bgSecondary rounded-xl">
      {children}
    </div>
  );
}
