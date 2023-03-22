import PlanCard from './PlanCard';

// List of all the features that are included in the free plan of the bookmarks website app
const freeFeatures = [
   'Unlimited bookmarks',
   'Unlimited collections',
   'Tagging system',
   'Search functionality',
   'Import/export bookmarks',
   'Duplicate bookmark detection',
   'Dark mode',
   'Basic themes (pre-defined, non-customizable)'
];

const premiumFeatures = [
   'Unlimited highlights',
   'Nested collections',
   'Bookmark thumbnails',
   'Broken link detection',
   'Bookmark annotations',
   'Automatic categorization',
   'Reading progress tracking',
   'Bookmark recommendations',
   'URL shortening',
   'Offline access',
   'Sync across devices',
   'Save bookmarks to read later',
   'Mobile app support',
   'Priority support'
];

export default function PlansSection() {
   return (
      <section>
         <h2 className="text-3xl font-bold mb-10">Plans</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <PlanCard name='Free' features={freeFeatures} price={0} />
            <PlanCard name='Premium' features={premiumFeatures} price={19} saveAmount={20} tryable dark />
            <PlanCard name='Enterprise' features={freeFeatures} price={19} saveAmount={20} tryable />
         </div>
      </section>
   );
}
