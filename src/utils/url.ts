export function isUrl(url: string): boolean {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3})|' +
      'localhost' +
      ')$',
    'i',
  );
  return pattern.test(url);
}
