import Link from 'next/link'
import type{ Metadata } from 'next'
import { CustomButton, CustomFilter, Hero, SearchBar, CarCard } from "@/components"


import { Inter } from 'next/font/google'
import { fetchCars } from '@/utils';
import { fuels, yearsOfProduction } from '@/constants';
const inter = Inter({ subsets: ['latin'] });
import { useSearchParams } from 'next/navigation';
import ShowMore from '@/components/ShowMore';
import { HomeProps } from '@/types';


export default async function Home({ searchParams }: HomeProps) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    model: searchParams.model || '',
    year: searchParams.year || 2022,
    limit: searchParams.limit || 12,
    fuel: searchParams.fuel || '',
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars;

  return (
    <main className='overflow-hidden'> {/* dark:bg-black-100 */}
      <Hero/>

      <div className='mt-12 padding-x padding-y max-width' id="discover"> {/*dark:bg-black-100*/}

        <div className='Home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Car Catalog
          </h1>
          <p>
            Explore the cars you might likes
          </p>
        </div>

        <div className="home__filters">
          <SearchBar />
          
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {
          !isDataEmpty ? (
            <section>
              <div className='home__cars-wrapper'>
                {
                  allCars?.map((car) =>  (
                    <CarCard key={car.id} car={car}/>
                  ))
                }
              </div>

              <ShowMore
                pageNumber={(searchParams.limit || 10) / 10 }
                isNext={(searchParams.limit || 10) > allCars?.length}
              />
            </section>
          ): (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
              <p>{allCars?.message}</p>
            </div>
          )
        }
      </div>

    </main>
  )
}
