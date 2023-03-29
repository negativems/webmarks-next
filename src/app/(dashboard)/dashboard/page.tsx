'use client';
import TopNotification from '@components/TopNotification';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const DashboardPage = () => {
   const { status } = useSession();
   const [showNotification, setShowNotification] = useState(false);
   useEffect(() => {
      setShowNotification(status === 'unauthenticated');
   }, [status]);

   return (
      <div>
         {
            showNotification &&
            <TopNotification type='warning'>
               Remember that you are not logged, all the changes will be save at your browser cache.
            </TopNotification>
         }
         <h1>Dashboard</h1>
      </div>
   );
};

export default DashboardPage;
