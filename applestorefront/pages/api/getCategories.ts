// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq, createClient } from "next-sanity";

const client = createClient({
  projectId: "35y5xlut",
  dataset: "production",
  apiVersion: "v1",
  useCdn: false,
});

const query = groq`*[_type == "category"]{
  _id,
  ...
}`;

type Data = {
  categories: Category[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const categories = await client.fetch(query);
  res.status(200).json({ categories });
}
