'use client';

interface Props {
   type: 'success' | 'error' | 'warning' | 'info'
   children: React.ReactNode
}

// tailwind class names for every type
const typeClassNames = {
   success: 'bg-green-100 text-green-800 border-green-400 border-2',
   error: 'bg-red-100 text-red-800 border-red-400 border-2',
   warning: 'bg-yellow-100 text-yellow-800 border-yellow-400 border-2',
   info: 'bg-blue-100 text-blue-800 border-blue-400 border-2'
};

const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
   if (!e.currentTarget.parentElement) return;
   e.currentTarget.parentElement?.remove();
   document.cookie = 'top-notification=1; max-age=31536000';
};

const TopNotification = ({ type, children }: Props) => {
   return (
      <div className={'top-notification absolute top-0 left-1/2 -translate-x-1/2 px-10 py-4 rounded-md duration-300' + ' ' + typeClassNames[type]}>
         <p className="text-sm">{children}</p>
         <button className="absolute top-2 right-2" onClick={clickHandler}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
         </button>
      </div>
   );
};

export default TopNotification;
