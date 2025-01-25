interface StatsProp {
  title: string;
  amount: number;
}
export default function Stats({ title, amount }: StatsProp) {
  return (
    <div className="flex flex-col justify-center">
      <p>{title}</p>
      <h1>{amount}</h1>
    </div>
  );
}
