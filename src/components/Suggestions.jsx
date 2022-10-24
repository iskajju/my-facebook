import React from 'react'
import { FreindRequestOption } from './FreindRequestOption'
import { Headings } from './Headings'
import { SidebarOption } from './SidebarOption'

export const Suggestions = ({freinds,contact,birthday}) => {
       const contacts = [
        {
            sno: 1,
            name: 'RockyBhai',
            image: 'https://editzstock.com/wp-content/uploads/2022/04/Yash-Wallpaper-KGF-Chapter-2-Rocky-Bhai-Hd-Background.jpg',
        },
        {
            sno: 2,
            name: 'Pushpa Raj',
            image: 'https://telanganatoday.com/wp-content/uploads/2022/01/Pushpa-Raj-mania-everywhere.jpg',
        },
        {
            sno: 3,
            name: 'pokii',
            image: 'https://fsb.zobj.net/crop.php?r=FlJw6d9ukKNCHEnvxNsp60DeTNSbQWHoQ9aIcfPcAAPvBk9MBN0b7rdPzr2y7YBxqTbqFPJldssgbD-c1cZsqXpxwCjgItsfSH9UsrZJ7HwHKlttZRmqfNKVUK9ciA2WFpuhK990BP4PtO42PwRTrBtH2US9zfeLMW25nZZrH3F_ofqQlu5C7aL8HEWhOFv39UCH4_lXRQYC4tKC',
        },
        {
            sno: 4,
            name: 'Chaman',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT291jvSXb9vCnNs5BGxwkWc1hcIR4hqcDnPsVRNR_cVYwL50wQYVzEfWSsVf9hNi4xLTg&usqp=CAU ",
        },
    ];


    return (
        <>
            <div className='hidden  md:inline-flex flex-col mt-2  md:w-[30%] lg:w-[22%] h-screen overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full '>
                <div className='w-full py-2 pr-1 '>
                    <Headings heading='Your Pages And Profiles' icon />
                    <SidebarOption img="group.png" title='FREINDS!!' />
                </div>
                <hr />
                <div className='py-2 w-full' >
                    <Headings heading='Freind requests' btn='See all' />
                    { freinds && <FreindRequestOption mutual />}
                    {freinds && <FreindRequestOption /> }
                </div>
                <hr />
                <div className='py-2 w-full' >
                    <Headings heading='Birthdays' />
                    {birthday && <SidebarOption img="gift.png" title='Nikhil and 4 Others have Birthdays today' />}
                </div>
                <hr />
                <div className='py-2 w-full mb-4' >
                    <Headings heading='Contacts' icon />


                    {contact && contacts.map(({ name, image,sno }) => (
                        <SidebarOption
                            key={sno}
                            title={name}
                            logos={image}
                        />
                    ))}

                </div>
            </div>
        </>
    )
}
