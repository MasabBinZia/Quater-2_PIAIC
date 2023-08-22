const getData = async () => {
  const res = await fetch("https://simple-books-api.glitch.me/books");
  const data = await res.json();
  return data;
};

export default async function Home() {
  const data = await getData();
  // console.log(data);

  return (
    <>
      <div>ID: {data[2].id}</div>
      <div>BOOK: {data[2].name}</div>
      <div>TYPE: {data[2].type}</div>
    </>
  );
}
