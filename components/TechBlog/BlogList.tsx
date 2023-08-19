export default async function BlogList() {
  const res = await fetch("https://zenn.dev/api/articles?username=h_ymt&order=latest");
  const data = await res.json();
  const posts = data.articles;

  return (
    <>
      <ul className="grid py-5">
        {posts.map((post: any) => (
          <li key={post.id}>
            <a className="flex gap-4 items-center py-4" href={`https://zenn.dev/${post.path}`}>
              <span className="text-2xl">{post.emoji}</span>
              <h2 className="md:text-xl">{post.title}</h2>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
