function formatDateTime(date) {
  const datePart = date.toLocaleDateString('en-CA');
  const timePart = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  const tzPart = new Intl.DateTimeFormat('en-US', { timeZoneName: 'short' })
    .formatToParts(date)
    .find(part => part.type === 'timeZoneName').value;

  const result = `${datePart} at ${timePart} ${tzPart}`;

  return result;
}

module.exports = formatDateTime;