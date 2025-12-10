import NavigationBar from "@/components/NavigationBar";
export default function HomeLayout({ children }) {
  return (
    <>
      <main className="p-4 relative z-0">
        <NavigationBar />

        {children}
      </main>
    </>
  );
}
