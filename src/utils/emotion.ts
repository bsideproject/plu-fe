const shouldForwardProp = (props: PropertyKey[]) => {
  return (propName: PropertyKey) => {
    return !props.includes(propName);
  };
};

export { shouldForwardProp };
