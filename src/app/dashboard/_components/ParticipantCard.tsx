import React from "react";

interface Props {
  name: string;
  imageUrl: string;
  votes: number;
  onVote: () => void;
}

export default function ParticipantCard({ name, imageUrl, votes, onVote }: Props) {
  return (
    <div className="border rounded-xl p-4 shadow-md flex flex-col items-center">
      <img src={imageUrl} alt={name} className="w-48 h-48 object-cover rounded-lg mb-2" />
      <h3 className="font-semibold text-lg mb-1">{name}</h3>
      <p className="mb-2 text-gray-500">{votes} voto(s)</p>
      <button onClick={onVote} className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
        Votar
      </button>
    </div>
  );
}