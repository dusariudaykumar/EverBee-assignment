/*
 * @param text -> the text you want to copy
 */

export const copyTextToClipboard = (text) => {
  return navigator.clipboard.writeText(text.toString());
};
