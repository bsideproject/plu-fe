interface Props {
  color?: string;
}

const MinusIcon = (props: Props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11.5" fill={props.color} stroke="#333333" />
      <rect x="7" y="11.5" width="10" height="1" fill="#333333" />
    </svg>
  );
};

export default MinusIcon;
