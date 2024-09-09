import CreatePost from "@/server/actions/CreatePost";
import GetPost from "@/server/actions/GetPost";

export default async function Home() {
  const { error, data } = await GetPost();

  if (error) throw new Error(error);

  return (
    <main>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <form action={CreatePost}>
        <input
          className="bg-black"
          type="text"
          name="title"
          placeholder="Title"
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
