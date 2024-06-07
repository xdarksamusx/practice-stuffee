import Image from "next/image";

export default function City({ params }: { params: { cityId: string } }) {
  console.log("cheeseererere");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {params.cityId}
    </main>
  );
}
