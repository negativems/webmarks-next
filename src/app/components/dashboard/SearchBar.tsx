import { SearchIcon } from '@heroicons/react/solid';
import { TextInput } from '@tremor/react';

export default function SearchBar() {
   return (
      <div className="search-bar flex gap-2 items-center">
         <TextInput
            className="w-1/3"
            icon={SearchIcon}
            placeholder="Search..." />
      </div>
   );
};
