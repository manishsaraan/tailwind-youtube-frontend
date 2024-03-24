import { VideoCard } from "@/components/VideoCard";
import { Short } from "@/components/Shots";

function generateRandomTimestamp() {
  // Generate a random number between 1 and 4 to represent days, weeks, months, or years
  let randomPeriod = Math.floor(Math.random() * 4) + 1;

  // Generate a random number for the duration
  let duration = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10

  // Define the time periods
  let periods = ["days", "weeks", "months", "years"];

  // Calculate the date based on the random period and duration
  let currentDate = new Date();
  let pastDate = new Date(currentDate);

  switch (periods[randomPeriod - 1]) {
    case "days":
      pastDate.setDate(currentDate.getDate() - duration);
      break;
    case "weeks":
      pastDate.setDate(currentDate.getDate() - duration * 7);
      break;
    case "months":
      pastDate.setMonth(currentDate.getMonth() - duration);
      break;
    case "years":
      pastDate.setFullYear(currentDate.getFullYear() - duration);
      break;
    default:
      break;
  }

  // Format the date
  let options = { year: "numeric", month: "long", day: "numeric" };

  return `${duration} ${periods[randomPeriod - 1]} ago `;
}

function generateRandomViews() {
  // Generate a random number between 1 and 96
  let randomNumber = Math.floor(Math.random() * 96) + 1;

  // Randomly choose between K and M for thousands or millions
  let suffix = randomNumber < 10 ? "k views" : "k views";

  // Calculate the actual number of views

  return randomNumber + suffix;
}

const REELS = [
  {
    title: "Cameraman Runs Faster Than The Athletes!",
    image:
      "https://i.ytimg.com/vi/VJT_2J_-kf4/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDN1ydNEwqOvFC1XmLoUSd4tOAqBg",
    author: "\n  \n    \n  \n  \n  \n    \n  \n\n\n",
    thumbImage:
      "https://i.ytimg.com/vi/VJT_2J_-kf4/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDN1ydNEwqOvFC1XmLoUSd4tOAqBg",
    channel: "\n  \n    \n  \n  \n  \n    \n  \n\n\n",
    views: "Not available",
    timestamp: "Not available",
  },
  {
    title: "Day 44: Finally aj plumber aa gya 😅😅",
    image:
      "https://i.ytimg.com/vi/8It8UO4bgBk/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDZhTf1_xr3vPgUtobK7mB-A-57MA",
    author: "\n  \n    \n  \n  \n  \n    \n  \n\n\n",
    thumbImage:
      "https://i.ytimg.com/vi/8It8UO4bgBk/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDZhTf1_xr3vPgUtobK7mB-A-57MA",
    channel: "\n  \n    \n  \n  \n  \n    \n  \n\n\n",
    views: "Not available",
    timestamp: "Not available",
  },
  {
    title: "Magical Prank 😱😂 #priyalkukreja #shorts #ytshorts",
    image:
      "https://i.ytimg.com/vi/THph07gHCEQ/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDzdvuE8XmQzkQRNOPAC2E7NQEfIw",
    author: "\n  \n    \n  \n  \n  \n    \n  \n\n\n",
    thumbImage:
      "https://i.ytimg.com/vi/THph07gHCEQ/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDzdvuE8XmQzkQRNOPAC2E7NQEfIw",
    channel: "\n  \n    \n  \n  \n  \n    \n  \n\n\n",
    views: "Not available",
    timestamp: "Not available",
  },
  {
    title: "Ronaldo Rare Moments",
    image:
      "https://i.ytimg.com/vi/UfW7_6xu7cA/oardefault.jpg?sqp=-oaymwEdCJwEENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBIvBnGCb5Xwg1cBXbMBBbGdrvwww",
    author: "\n  \n    \n  \n  \n  \n    \n  \n\n\n",
    thumbImage:
      "https://i.ytimg.com/vi/UfW7_6xu7cA/oardefault.jpg?sqp=-oaymwEdCJwEENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBIvBnGCb5Xwg1cBXbMBBbGdrvwww",
    channel: "\n  \n    \n  \n  \n  \n    \n  \n\n\n",
    views: "Not available",
    timestamp: "Not available",
  },
  {
    title: "Wait For Sai Pallavi 🥰⚡ #shorts #sanatandharma",
    image:
      "https://i.ytimg.com/vi/klQUxQhi1cw/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLClcreKLhK0ikK4jUS5E7AdwLpJPg",
    author: "\n  \n    \n  \n  \n  \n    \n  \n\n\n",
    thumbImage:
      "https://i.ytimg.com/vi/klQUxQhi1cw/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLClcreKLhK0ikK4jUS5E7AdwLpJPg",
    channel: "\n  \n    \n  \n  \n  \n    \n  \n\n\n",
    views: "Not available",
    timestamp: "Not available",
  },
  {
    title: "Tuning a 270+whp Kawasaki H2R",
    image:
      "https://i.ytimg.com/vi/6Z1Losd6Rao/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCp3RF--v-ulsGMfd8LYH0eVg0E0g",
    author: "\n  \n    \n  \n  \n  \n    \n  \n\n\n",
    thumbImage:
      "https://i.ytimg.com/vi/6Z1Losd6Rao/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCp3RF--v-ulsGMfd8LYH0eVg0E0g",
    channel: "\n  \n    \n  \n  \n  \n    \n  \n\n\n",
    views: "Not available",
    timestamp: "Not available",
  },
];
const VIDEOS = [
  {
    title:
      "Taarak Mehta Ka Ooltah Chashmah - तारक मेहता - Ep 2995 - Full Episode - 17th September 2020",
    image:
      "https://i.ytimg.com/vi/L_A_BQJcjUk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIjtuIV41G0W_A6h99sxSlwh_VtQ",
    author: "Sony SAB",
    thumbImage:
      "https://i.ytimg.com/vi/L_A_BQJcjUk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIjtuIV41G0W_A6h99sxSlwh_VtQ",
    channel: "Sony SAB",
    views: "Not available",
    timestamp: "Not available",
  },
  {
    title: "FIGHTING WITH THE BIG BOSS POKEMON | PALWORLD GAMEPLAY #4",
    image:
      "https://i.ytimg.com/vi/9fcOxNS3chI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADVmjOoTwokMS4885ehNMfn1uGLA",
    author: "Techno Gamerz",
    thumbImage:
      "https://i.ytimg.com/vi/9fcOxNS3chI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADVmjOoTwokMS4885ehNMfn1uGLA",
    channel: "Techno Gamerz",
    views: "Not available",
    timestamp: "Not available",
  },
  {
    title: "Welcome to Ini vlogs | Dubai Series Ep 01 | Vj Siddhu Vlogs",
    image:
      "https://i.ytimg.com/vi/ZoI2wfj_OX0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJ45CJ-syRBF8SD5nNyYMtfpwJWw",
    author: "Vj Siddhu Vlogs",
    thumbImage:
      "https://i.ytimg.com/vi/ZoI2wfj_OX0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJ45CJ-syRBF8SD5nNyYMtfpwJWw",
    channel: "Vj Siddhu Vlogs",
    views: "Not available",
    timestamp: "Not available",
  },

  {
    title:
      "Shark Tank India 3 | 'Smotect' के Formula पर क्यों नहीं हुआ Aman को यकीन? | Pitches",
    image:
      "https://i.ytimg.com/vi/raP3Ifl0JZ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCg7pbu-_BUF6S-t2obe2zjRJYkqA",
    author: "SET India",
    thumbImage:
      "https://i.ytimg.com/vi/raP3Ifl0JZ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCg7pbu-_BUF6S-t2obe2zjRJYkqA",
    channel: "SET India",
    views: "Not available",
    timestamp: "Not available",
  },
  {
    title:
      "Aam Jahe Munde | Parmish Verma feat Pardhaan | Desi Crew | Laddi Chahal",
    image:
      "https://i.ytimg.com/vi/muds1gFUTN8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHC7MvoxV1LexaSc9KVk1dJUJBOg",
    author: "Parmish Verma",
    thumbImage:
      "https://i.ytimg.com/vi/muds1gFUTN8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHC7MvoxV1LexaSc9KVk1dJUJBOg",
    channel: "Parmish Verma",
    views: "Not available",
    timestamp: "Not available",
  },
  {
    title:
      "Ram Siya Ram Siya Ram Jay Jay Ram | राम सिया राम सिया राम जय जय राम | 4K Sound",
    image:
      "https://i.ytimg.com/vi/VedXXaCLFhg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBrbtRYNoKVaL3wGeULMfUpERfRMA",
    author: "Dj Sandeep Official ",
    thumbImage:
      "https://i.ytimg.com/vi/VedXXaCLFhg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBrbtRYNoKVaL3wGeULMfUpERfRMA",
    channel: "Dj Sandeep Official ",
    views: "Not available",
    timestamp: "Not available",
  },
  {
    title:
      "Taarak Mehta Ka Ooltah Chashmah - तारक मेहता - Ep 2995 - Full Episode - 17th September 2020",
    image:
      "https://i.ytimg.com/vi/L_A_BQJcjUk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIjtuIV41G0W_A6h99sxSlwh_VtQ",
    author: "Sony SAB",
    thumbImage:
      "https://i.ytimg.com/vi/L_A_BQJcjUk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIjtuIV41G0W_A6h99sxSlwh_VtQ",
    channel: "Sony SAB",
    views: "Not available",
    timestamp: "Not available",
  },
  {
    title: "FIGHTING WITH THE BIG BOSS POKEMON | PALWORLD GAMEPLAY #4",
    image:
      "https://i.ytimg.com/vi/9fcOxNS3chI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADVmjOoTwokMS4885ehNMfn1uGLA",
    author: "Techno Gamerz",
    thumbImage:
      "https://i.ytimg.com/vi/9fcOxNS3chI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADVmjOoTwokMS4885ehNMfn1uGLA",
    channel: "Techno Gamerz",
    views: "Not available",
    timestamp: "Not available",
  },
];


export const VideoGrids = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map((video) => (
          <VideoCard
            title={video.title}
            image={video.image}
            author={video.author}
            thumbImage={video.thumbImage}
            channel={video.channel}
            views={generateRandomViews()}
            timestamp={generateRandomTimestamp()}
          />
        ))}
      </div>
      <div className="feather feather-youtube px-3 text-xl font-bold py-5 flex">
        Shorts
        <svg
          className="w-7 ml-1 fill-red-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21.13 8a2.92 2.92 0 0 0-2.06-2.06C17.05 5 12 5 12 5s-5.05 0-7.07.94A2.92 2.92 0 0 0 2 8.06C2 10 2 12 2 12s0 2 1.93 3.06A2.92 2.92 0 0 0 5.93 16c2.02.94 7.07.94 7.07.94s5.05 0 7.07-.94A2.92 2.92 0 0 0 22 12.06c0-1.05 0-3.05-1.87-4.06zM10 15V9l5.5 3z"></path>
        </svg>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 pb-5">
        {REELS.map((video) => (
          <Short
            title={video.title}
            image={video.image}
            author={video.author}
            thumbImage={video.thumbImage}
            channel={video.channel}
            views={generateRandomViews()}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
           {
            VIDEOS.map(video => (
                <VideoCard 
                     title = {video.title}
                     image={video.image}
                     author={video.author}
                     thumbImage={video.thumbImage}
                     channel={video.channel}
                     views={generateRandomViews()}
                     timestamp={generateRandomTimestamp()}
                />
            ))
           }
       </div>
    </>
  );
};
