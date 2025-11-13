function HistoryList({ history, onSelect }) {
  if (history.length === 0) return null;

  return (
    <div className="mt-5">
      <h3 className="text-lg font-semibold mb-2">Recent Searches:</h3>

      <div className="flex flex-wrap gap-2">
        {history.map((item, index) => (
          <button
            key={index}
            onClick={() => onSelect(item)}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HistoryList;
