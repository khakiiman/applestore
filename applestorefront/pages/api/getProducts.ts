import type { NextApiRequest, NextApiResponse } from 'next';
import { groq, createClient } from 'next-sanity';

const client = createClient({
    projectId: "35y5xlut",
    dataset: "production",
    apiVersion: "v1",
    useCdn: false
});

const query = groq`*[_type == "product"]{
    _id,
      ...
    } | order(_createdAt asc)`;

type Data = {
    products: Product[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const products = await client.fetch(query);
    res.status(200).json({ products });
}