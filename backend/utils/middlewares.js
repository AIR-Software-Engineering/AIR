const header = async (res) => {
  const Header = res.setHeader('Content-Type', 'application/json');
  return Header;
}
global.header = header;