// 格式化cookies
export const formatCookieToString = (cookies: any[]) => {
  let cookieString = "";
  cookies.forEach((item) => {
    const { name, value } = item;
    cookieString += `${name}=${value};`;
  });
  return cookieString;
};

// 复制指定内容
export const copyToClipboard = (content: string) => {
  let copy = (e: any) => {
    e.preventDefault();
    e.clipboardData.setData("text/plain", content);
    document.removeEventListener("copy", copy);
  };
  document.addEventListener("copy", copy);
  document.execCommand("Copy");
};
