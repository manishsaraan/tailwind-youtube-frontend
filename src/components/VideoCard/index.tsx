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
        <div className="col-span-1 col-span-1 flex justify-center">
          <img
            className="rounded-full w-12 h-12 "
            src={props.thumbImage}
            alt=""
          />
        </div>
        <div className="col-span-11 pl-5">
          <div className="text-lg text-black">{props.title}</div>

          <div className="col-span-11text-gray-400 text-base">
            {props.channel}
          </div>
          <div className="col-span-11 text-gray-400 text-base">
            {props.views} . {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
};
