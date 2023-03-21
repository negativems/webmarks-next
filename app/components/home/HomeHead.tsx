import Link from 'next/link';

const HeadCurve = (): JSX.Element => (
   <svg className="absolute bottom-0 right-0" xmlns="http://www.w3.org/2000/svg" width={1195} height={688} fill="none">
      <g filter="url(#a)">
         <path fill="#9DFF7A" d="M297.922 418.189c33.539-99.787 219.755 12.157 310.827-58.459C685.943 299.875 738.056 202.578 870.5 222.5 1050 249.5 1003.5 44 1046 0h149v688H11.097c-60.808-65.814 239.293-128.395 286.825-269.811Z" />
      </g>
      <defs>
         <filter id="a" width={1195} height={691} x={0} y={-3} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx={-3} dy={-3} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.228583 0 0 0 0 0.879167 0 0 0 0 0 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_6_72" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_6_72" result="shape" />
         </filter>
      </defs>
   </svg>
);

export default function HomeHead(): JSX.Element {
   return (
      <div className="hero">
         <div className="container mx-auto flex justify-between relative z-10">
            <div className="left flex flex-col gap-20">
               <h1>The simplest way to manage your bookmarks</h1>
               <div className="buttons">
                  <Link href="#" className="bg-accent-light px-6 py-3 rounded-lg shadow-solid-xl hover:bg-accent font-bold duration-150 hover:px-7 hover:py-4 active:bg-accent-dark focus:ring focus:bg-accent-light ring-accent-dark">Start now</Link>
               </div>
            </div>
            <div className="right">
               <div className="square w-80 h-80 bg-gray-300 rounded-2xl shadow-solid-xl p-5">
                  asd
               </div>
            </div>
         </div>
      </div>
   );
}
