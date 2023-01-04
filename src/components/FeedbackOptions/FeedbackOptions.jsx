export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(item => (
        <li key={item}>
          <button type="button" onClick={() => onLeaveFeedback(item)}>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};
