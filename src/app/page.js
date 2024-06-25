import Profile from "@/components/Profile/Profile";
import Header from "@/components/ui/Header";
import ReturnButton from "@/components/ui/ReturnButton";

export default function Home() {
  return (
    <>
      <Header />
      <ReturnButton> Вернуться к сотрудникам</ReturnButton>
      <main className="flex w-full">
        <Profile />
      </main>
    </>
  );
}
