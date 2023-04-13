
export default function Dashboard({ children }: { className?: string, children: JSX.Element }) {
   return (
      <main className="bg-white flex-1 rounded-3xl p-10">
         {children}
      </main>
   );
}
