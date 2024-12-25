export default function Button({ title, onClick }) {
  return (
    <button className="w-25 h-10 bg-slate-500 p-4" onClick={onClick}>
      {title}
    </button>
  );
}
