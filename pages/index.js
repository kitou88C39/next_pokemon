import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home({ pokemon }) {
  /**
   * 足りない桁数を0埋めする関数
   * @param num: 表示させたい数値
   * @param len: 表示させたい桁数
   * @returns {string}
   */
  const zeroPadding = (num, len) => {
    // 指定した数値の前に指定した桁数分0を追加したあと、後ろから0桁を返す
    return (Array(len).join("0") + num).slice(-len);
  }

  return (
    <Layout title='NextJS PokeDex'>
      <div className={"grid grid-cols-3 gap-3"}>
        {pokemon.map((item, index) => (
          <p key={index}>
            <Link href={`/pokemon/${index + 1}`}>
              <a className='border-b-2 py-3 border-grey my-0 hover:shadow-md capitalize flex items-center text-xl font-bold bg-gray-100'>
                <span className='mr-2 font-light'>{zeroPadding(index + 1, 3)}</span>
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
