const copyToClipboard = (content: string): void => {
  const el = document.createElement('textarea');
  el.style.opacity = '0';
  el.value = content;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

export default copyToClipboard;
