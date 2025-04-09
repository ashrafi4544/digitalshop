export default function Home() {
  const renderName = (name2: any) => {
    const name = 'ali';
    return <span>{name}</span>;
  };
  return <div>home page --- , ,{renderName(1)}</div>;
}
