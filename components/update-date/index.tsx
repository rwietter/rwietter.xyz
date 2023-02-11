import React, { useEffect, useState } from 'react';

import { IoIosTimer } from 'react-icons/io';
import { getDate } from '../../utils/get-date';
import { DateTime } from './styled';

const date = new Date();
const UpdatedDate = () => {
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
      <DateTime>
        <span>{currentDate}</span>
      </DateTime>
    </p>
  );
};

export default UpdatedDate;
