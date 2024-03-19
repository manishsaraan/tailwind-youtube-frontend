import { VideoCard } from '@/components/VideoCard'
const VIDEOS = [
    {
        title :"How to learn coding in 30 days",
        image:"img.png",
        author:"Manish",
        thumbImage:"img.png",
        channel:"Manish",
        views:"100k",
        timestamp:"2 days ago"
    },
    {
        title :"How to learn coding in 30 days",
        image:"img.png",
        author:"Manish",
        thumbImage:"img.png",
        channel:"Manish",
        views:"100k",
        timestamp:"2 days ago"
    },
    {
        title :"How to learn coding in 30 days",
        image:"img.png",
        author:"Manish",
        thumbImage:"img.png",
        channel:"Manish",
        views:"100k",
        timestamp:"2 days ago"
    },
    {
        title :"How to learn coding in 30 days",
        image:"img.png",
        author:"Manish",
        thumbImage:"img.png",
        channel:"Manish",
        views:"100k",
        timestamp:"2 days ago"
    },
    {
        title :"How to learn coding in 30 days",
        image:"img.png",
        author:"Manish",
        thumbImage:"img.png",
        channel:"Manish",
        views:"100k",
        timestamp:"2 days ago"
    },
    {
        title :"How to learn coding in 30 days",
        image:"img.png",
        author:"Manish",
        thumbImage:"img.png",
        channel:"Manish",
        views:"100k",
        timestamp:"2 days ago"
    },
    {
        title :"How to learn coding in 30 days",
        image:"img.png",
        author:"Manish",
        thumbImage:"img.png",
        channel:"Manish",
        views:"100k",
        timestamp:"2 days ago"
    }
];
export const VideoGrids = () => {
    return (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
           {
            VIDEOS.map(video => (
                <VideoCard 
                     title = {video.title}
                     image={video.image}
                     author={video.author}
                     thumbImage={video.thumbImage}
                     channel={video.channel}
                     views={video.views}
                     timestamp={video.timestamp}
                />
            ))
           }
       </div>
    );
}