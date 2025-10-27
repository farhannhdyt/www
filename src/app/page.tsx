import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW5yajFjMDc1Y3lxcnBhY29rbjI1aHplNDVoZzU4ajJjbWxsczhsbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l46CyJmS9KUbokzsI/giphy.gif"
        alt="Under construction"
        width={400}
        height={200}
        unoptimized
      />
    </div>
  );
}
