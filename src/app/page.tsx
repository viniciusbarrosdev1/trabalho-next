import { redirect } from "next/navigation";

// A página inicial (/) só manda o usuário para o login
export default function Home() {
  redirect("/login");
}
