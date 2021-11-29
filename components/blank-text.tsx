type Props = {
  text: string;
  length?: number;
};

const BlankText = ({ text, length = 1 }: Props) => {
  const strings = new Array(length).fill(text);

  return (
    <span className="bg-gray-200 text-gray-200 break-all">
      {strings.join(' ')}
    </span>
  );
};

export default BlankText;
