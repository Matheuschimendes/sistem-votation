"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import ParticipantCard from "../ParticipantCard";

interface Participant {
  id: number;
  name: string;
  imageUrl: string;
  votes: number;
}

export default function Home() {
  const [participants, setParticipants] = useState<Participant[]>([]);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:3000/participants");
    setParticipants(res.data);
  };

  const vote = async (id: number) => {
    await axios.post(`http://localhost:3000/vote/${id}`);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Galeria de Participantes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {participants.map((p) => (
          <ParticipantCard
            key={p.id}
            name={p.name}
            imageUrl={p.imageUrl}
            votes={p.votes}
            onVote={() => vote(p.id)}
          />
        ))}
      </div>
    </main>
  );
}
