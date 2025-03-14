"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

const Page = () => {
  const [todos, setTodos] = useState<Todo[] | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("https://dummyjson.com/todos");
        const data = await res.json();
        setTodos(data.todos);
      } catch (e) {
        console.error(e);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-10 px-5">
      {/* Back Button */}
      <div className="px-7">
        <Link
          href="/"
          className="text-lg text-blue-400 hover:text-blue-300 transition duration-200"
        >
          ⬅ Back
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-5">
        All ToDos
      </h1>

      {/* Table Section */}
      <div className="overflow-x-auto mt-10">
        <table className="w-3/4 mx-auto border border-gray-700 shadow-lg rounded-lg overflow-hidden bg-gray-900">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-3 px-6 text-left">Todo</th>
              <th className="py-3 px-6 text-center">Completed</th>
            </tr>
          </thead>
          <tbody>
            {todos?.map((p) => (
              <tr
                key={p.id}
                className="border-b border-gray-700 hover:bg-gray-800 transition duration-200"
              >
                <td className="py-4 px-6">{p.todo}</td>
                <td
                  className={`py-4 px-6 text-center font-semibold ${
                    p.completed ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {p.completed ? "✔ Yes" : "❌ No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;