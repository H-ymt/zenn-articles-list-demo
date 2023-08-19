import BlogList from "@/components/BlogList";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl text-center font-bold">ポートフォリオ</h1>
      <Link href="/techBlog">Blog</Link>
    </>
  );
}
