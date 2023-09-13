import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "../../sanity/lib/image";

async function getData() {
  const data = await client.fetch(
    `*[_type == "products"]`,
    {},
    { cache: "no-store" }
  );

  return data;
}
export default async function Home() {
  const data = await getData();
  return (
    <div>
      {data.map((data: any, index: number) => {
        return (
          <div className="mb-20">
            <h1>Title: {data.product_name}</h1>
            <h1>Price: {data.price}</h1>
            <h1>
              Description: <PortableText value={data.description} />
            </h1>
            <Image
              src={urlForImage(data.image).url()}
              width={500}
              height={500}
              alt="image"
            />
          </div>
        );
      })}
    </div>
  );
}
