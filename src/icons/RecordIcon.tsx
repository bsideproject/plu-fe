const RecordIcon = (props: { color?: React.CSSProperties['color'] }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 1C5 0.447715 5.44772 0 6 0C6.55228 0 7 0.447715 7 1V3H17V1C17 0.447715 17.4477 0 18 0C18.5523 0 19 0.447715 19 1V3H22C22.5523 3 23 3.44772 23 4V23C23 23.5523 22.5523 24 22 24H2C1.44772 24 1 23.5523 1 23V4C1 3.44772 1.44772 3 2 3H5V1ZM15.9037 9.10212L10.3896 15.2952L8.09632 12.7177C7.65566 12.2227 6.89714 12.1786 6.40212 12.6193C5.9071 13.06 5.86302 13.8185 6.30368 14.3135L9.49441 17.8979C9.97169 18.434 10.8098 18.434 11.2871 17.8979L17.6963 10.6979C18.137 10.2029 18.0929 9.44434 17.5979 9.00368C17.1029 8.56303 16.3443 8.6071 15.9037 9.10212Z"
        fill={props?.color ?? '#E6E6E6'}
      />
    </svg>
  );
};

export default RecordIcon;
