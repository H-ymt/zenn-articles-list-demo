import BlogList from "@/components/TechBlog/BlogList";

export default async function Home() {
  const res = await fetch("https://zenn.dev/api/articles?username=h_ymt&order=latest");
  const data = await res.json();
  const posts = data.articles;

  return (
    <>
      <div className="py-12">
        <h1 className="text-2xl font-bold">Zenn 投稿記事一覧</h1>
        <BlogList />
      </div>
    </>
  );
}
