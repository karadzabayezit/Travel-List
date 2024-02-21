export default function Stats({ items }) {
  if (!items.length) return <p className="stats">Start adding items 🚀</p>;
  const itemsNum = items.length;
  const doneItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((doneItems / itemsNum) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are ready to travel ✈"
          : `You have ${itemsNum} items on your list, and you already packed
        ${doneItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
