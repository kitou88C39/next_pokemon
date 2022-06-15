import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home({ pokemon }) {
  return (
    <Layout title='NextJS PokeDex'>
      <div>
        {pokemon.map((item, index) => (
          <p key={index}>
            <Link href={`/pokemon/${index + 1}`}>
              <a className='border-b-2 py-3 border-grey my-0 hover:shadow-md capitalize flex items-center text-xl font-bold bg-gray-100'>
                <span className='mr-2 font-light'>{index + 1}</span>
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-10 h-10 mr-2 font-bold'
                />
                {item.name}
              </a>
            </Link>
          </p>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
  const { results } = await res.json();
  const pokemon = results.map((pokeman, index) => {
    const paddedId = ('00' + (index + 1)).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    return { ...pokeman, image };
  });
  return {
    props: { pokemon },
  };
};
