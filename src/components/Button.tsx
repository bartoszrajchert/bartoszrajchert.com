interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <button className="bg-button hover:bg-button-hover active:bg-button-active py-12 px-24 text-white rounded-4">
      {text}
    </button>
  );
};

export default Button;
