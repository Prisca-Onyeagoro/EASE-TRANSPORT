import NavigationBar from "../../Components/NavigationBar";

export default function HomeLayout({ children }) {
  return (
    <main className="p-4">
      <NavigationBar />
      {children}
    </main>
  );
}
