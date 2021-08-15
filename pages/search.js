import { useRouter } from 'next/dist/client/router';
import InfoCard from "@components/InfoCard"
import Header from "@components/Header"
import Footer from "@components/Footer"
import Map from "@components/Map"
import { format } from 'date-fns'

function search({searchResults}) {
    const router = useRouter()

    const { location, startDate, endDate, noOfGuests } = router.query

    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
    const range = `${formattedStartDate} ${formattedEndDate}`

    return (
        <div className="h-screen">
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays for {noOfGuests} Number of quests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stay in {location}</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">
                            Cancellation Flexibility
                        </p>
                        <p className="button">
                            Type of place
                        </p>
                        <p className="button">
                            Price
                        </p>
                        <p className="button">
                            Rooms and beds
                        </p>
                        <p className="button">
                            More filters
                        </p>
                    </div>

                    <div className="flex flex-col">
                        {searchResults?.map( (item, idx) => (
                            <InfoCard 
                                key={idx}
                                img={item.img}
                                location={item.location}
                                tile={item.title}
                                description={item.description}
                                star={item.star}
                                price={item.price}
                                total={item.total}
                            />
                        ))}
                    </div>
                </section>

                <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                    <Map searchResults={searchResults} />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default search

export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json())

    return {
        props: {
            searchResults
        }
    }
}