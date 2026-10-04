import { clinic } from '../data/clinic';
import { findUs } from '../data/homeCopy';
import { formatTime } from './time';

/** The timing rows shown on the page, with hours taken from clinic.timings */
export const timingRows = findUs.timingRows.map((row) => {
  const session = clinic.timings[row.session];
  return { label: row.label, hours: `${formatTime(session.opens)} – ${formatTime(session.closes)}` };
});
