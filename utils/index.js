import { DateTime } from 'luxon';

const getStatus = (startISO, endISO) => {
  const startDateTime = DateTime.fromISO(startISO).setZone('Asia/Kolkata');
  const endDateTime = DateTime.fromISO(endISO).setZone('Asia/Kolkata');

  const now = DateTime.now();

  if (now.toMillis() < startDateTime.toMillis()) return 'UPCOMING';
  if (now.toMillis() < endDateTime.toMillis()) return 'ONGOING';

  return 'COMPLETED';
};

export default getStatus;
