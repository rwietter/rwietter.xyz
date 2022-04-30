import React, { useEffect, useState } from 'react';

import { IoIosTimer } from 'react-icons/io';
import { getDate } from '../../utils/get-date';

const date = new Date();
const UpdatedDate: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(getDate(date));

  useEffect(() => {
    const interval = setInterval(() => {
      const updateDate = new Date();
      setCurrentDate(getDate(updateDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p>
      <IoIosTimer size={18} />
      {currentDate}
    </p>
  );
};

export { UpdatedDate };
