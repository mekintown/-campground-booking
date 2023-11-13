import InteractiveCard from "./InteractiveCard";
import Image from 'next/image'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from "next/link";


export default function CampgroundCard({campName, imgSrc, campId}: {campName:string, imgSrc:string, campId:string}){



    return(
        <InteractiveCard contentName="Khaoyai">
            <div className=''>
                <div className='w-full h-[200px] relative'>
                    <Image
                    src={imgSrc}
                    alt='Picture'
                    fill={true}
                    className='object-cover rounded-t-lg'
                    />
                </div>
                <div className='absolute right-0'>
                    <Link href=''><EditIcon className='text-gray-500 mr-2 text-xl'/></Link>
                    <Link href=''><DeleteIcon className='text-red-500 text-xl'/></Link>
                </div>
                <div className='h-[80px] w-full flex justify-center items-center'>
                    <p className='text-xl'>{campName}</p>
                </div>
            </div>
        </InteractiveCard>
    )
}