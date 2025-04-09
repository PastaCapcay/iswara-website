export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-emerald-200 rounded-full"></div>
        <div className="w-12 h-12 border-4 border-emerald-600 rounded-full border-t-transparent animate-spin absolute top-0"></div>
      </div>
    </div>
  );
} 