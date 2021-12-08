export default function drum(props) {
  const { name, src, keycode } = props;

  return (
    <>
      <button className="drum-pad" keycode={keycode}>
        {name}
        <audio className="clip" id={name} src={src}></audio>
      </button>
    </>
  );
}
