import { headers } from "next/headers";
import { auth } from "@/lib/authGoogle";
import { ButtonSignOut } from "./_components/button-signout";
import { redirect } from "next/navigation";
import ParticipantCard from "./_components/ParticipantCard";
import Index from "./_components/pages/index";
import Register from "./_components/pages/register";

export default async function Dashboard() {
  const session = await auth.api.getSession({ // obtem a sessao do usuario
    headers: await headers(), // headers() retorna os headers da request do usuario para proteger a rota
  })

  if (!session) { // se o usuario nao estiver logado
    redirect("/") // redireciona para a home
  }

  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold mb-2">Página dashboard</h1>
      <h3>Usuario logado: {session.user.name}</h3>
      <ButtonSignOut />
      <Register />
    </div>

  );
}