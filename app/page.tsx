import Image from "next/image";
import MessageFrom from "./../components/messageFrom";
import { getmessage } from "@/action/get-message";

export default async function Home() {
  const data = await getmessage();

  return (
    <main className="">
      <div>
        <MessageFrom />
      </div>
      <div>
        <ul>
          {data?.map((item) => (
            <li key={item.id}>{item.message}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
