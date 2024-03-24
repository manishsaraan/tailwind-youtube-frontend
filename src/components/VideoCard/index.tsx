interface Props {
  title: string;
  image: string;
  thumbImage: string;
  author: string;
  views: string;
  channel: string;
  timestamp: string;
}

export const VideoCard = (props: Props) => {
  return (
    <div className="p-3 cursor-pointer">
      <img className="w-full rounded-xl" src={props.image} alt="" />
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1 col-span-2 flex justify-center pt-1">
          <img
            className="rounded-full w-12 h-12"
            src={props.thumbImage}
            alt=""
          />
        </div>
        <div className="col-span-10 pl-4">
          <div className="text-xl text-black line-clamp-2">{props.title}</div>

          <div className="col-span-11 text-gray-400 text-base">
            {props.channel}
          </div>
          <div className="col-span-11 text-gray-400 text-base flex">
            {props.views} <span className="flex flex-center w-px pl-1 pr-1">.</span> {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
};
