import React from 'react'
import RightReview from './RightContainer.review'

const RightInfo = () => {
  return (
    <>
      <div className='flex lg:flex-row flex-col gap-2 border-2'>
        <div className='w-full'>
          <div className='rounded-md flex p-2 mb-2 bg-white'>
            <div className='flex flex-col items-center justify-center border-r-2 border-black px-2'>
              <span className='bg-black text-white px-8 rounded-md text-[16px]'>Score</span>
              <h2 className='text-3xl '>8.47</h2>
              <p>Favorites : 7777</p>
            </div>
            <div className='flex lg:flex-row flex-col px-4 text-2xl lg:gap-16 gap-2 w-full lg:items-center items-start'>
              <div className='flex'>
                <span className='mr-2 bg-black text-white px-2 rounded-md text-[16px]'>Popularity</span>
                <h2>145</h2>
              </div>
              <div className='flex'>
                <span className='mr-2 bg-black text-white px-2 rounded-md text-[16px]'>Members</span>
                <h2>442,987</h2>
              </div>
              <div className='flex'>
                <span className='mr-2 bg-black text-white px-2 rounded-md text-[16px]'>Rank</span>
                <h2>145</h2>
              </div>
            </div>
          </div>
          <div className='flex bg-white rounded-md p-[6px] justify-between items-center'>
            <button className='px-2 py-[5px] bg-black text-white rounded-md hover:bg-white hover:text-black duration-150'>Add to My List</button>
            <div className='flex'>
              <p>Episodes : </p>
              <p> 0/12</p>
            </div>
          </div>
        </div>
        <iframe 
          className='lg:w-[250px] w-full lg:h-[162px] h-full rounded-md object-cover border-none lg:mb-0 mb-4'
          src="https://www.youtube.com/embed/xKEyo2BOldk?si=za7dCURYE8J8mtBk" 
          title="YouTube video player" 
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      </div>
      <h2 className='lg:text-2xl text-3xl border-b-2 border-black mb-2'>Synopsis</h2>
      <div className='bg-white p-2 rounded-md mt-2'>
        <p>
          Ten years ago, "the Gate" appeared and connected the real world with the realm of magic and monsters. To combat these vile beasts, ordinary people received superhuman powers and became known as "Hunters." Twenty-year-old Sung Jin-Woo is one such Hunter, but he is known as the "World's Weakest," owing to his pathetic power compared to even a measly E-Rank. Still, he hunts monsters tirelessly in low-rank Gates to pay for his mother's medical bills.
          However, this miserable lifestyle changes when Jin-Woo—believing himself to be the only one left to die in a mission gone terribly wrong—awakens in a hospital three days later to find a mysterious screen floating in front of him. This "Quest Log" demands that Jin-Woo completes an unrealistic and intense training program, or face an appropriate penalty. Initially reluctant to comply because of the quest's rigor, Jin-Woo soon finds that it may just transform him into one of the world's most fearsome Hunters.
        </p>
      </div>
      <div >
        <RightReview/>
      </div>
    </>
  )
}

export default RightInfo