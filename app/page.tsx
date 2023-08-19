import BlogList from "@/components/BlogList";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl text-center font-bold">ポートフォリオ</h1>
      <Link className="text-xl underline underline-offset-2" href="/techBlog">
        Blog一覧へ →
      </Link>
    </>
  );
}
