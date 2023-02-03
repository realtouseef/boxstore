import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios, { AxiosResponse } from 'axios';

type ProductProps = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

const ProductCard: React.FunctionComponent = () => {
  const [data, setData] = useState<AxiosResponse | null>(null);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_STORE_ENDPOINT as string
      );
      setData(res);
    })();
  }, []);

  console.log(data);

  return (
    <div className='grid grid-cols-3 mx-auto max-w-screen-2xl'>
      {data?.data.map(
        ({
          id,
          title,
          description,
          category,
          image,
          price,
          rating,
        }: ProductProps) => (
          <div
            key={id}
            className='w-96 my-4 border border-purple-300 rounded-sm p-4'
          >
            <div className='relative'>
              <Image
                src={image}
                alt={title}
                width={300}
                height={300}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div>
              <small className='bg-purple-100 p-1 my-2'>{category}</small>
              <h3 className='font-semibold text-xl'>{title}</h3>
              <p>{description.slice(0, 150)}...</p>
              <p>{price}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProductCard;
