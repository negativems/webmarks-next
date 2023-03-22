import { CheckIcon, CrossIcon } from '../Icons';

interface PlanCardProps {
   name: string
   features: string[]
   price: number
   tryable?: boolean
   saveAmount?: number
   dark?: boolean
}

const PlanCard = ({ name, features, price, tryable, saveAmount, dark = false }: PlanCardProps) => {
   return (
      <div className={'plan-card p-10 shadow-md shadow-black rounded-3xl relative ' + (dark ? 'bg-accent-darker text-white' : 'bg-white')}>
         <header className="plan-card-header flex justify-between relative mb-10">
            <h3 className="text-center w-full">{name}</h3>
            {
               saveAmount &&
               <span className={'plan-card-save absolute top-1/2 -translate-y-1/2 right-0 px-3 py-1 rounded-md text-[10px] ' + (dark ? 'bg-white text-black' : 'bg-red-400')}>
                  Saves {saveAmount}%
               </span>
            }
         </header>
         <div className="plan-card-body">
            <ul className="flex flex-col gap-4">
               {features.map((feature, index) => (
                  <li key={index} className="flex flex-row gap-2 items-center">
                     <CheckIcon />
                     <span>{feature}</span>
                  </li>
               ))}
            </ul>
         </div>
         <footer className="plan-card-footer">
            <div className="plan-card-price bg-red-300">
               <span className="plan-card-price-currency">$</span>
               {price}
            </div>
            <button className="btn btn--primary">Get Started</button>
            {tryable === true && <button className="btn btn--secondary">Try for free</button>}
         </footer>
      </div>
   );
};

export default PlanCard;
