// PascalCasing
function Message() {
  // JSX: JavaScript XML (Not html! Gets compiled down to JS)
  const name = 'MNY';
  if (name)
    return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>
}

export default Message;
