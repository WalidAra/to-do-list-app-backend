/* eslint-disable @typescript-eslint/no-unused-vars */
type Props = {
  text: string;

};

const Button = ({text }:Props) => {
  return <button  className="px-3 duration-200 hover:bg-purple-800 rounded-xl bg-purple-600  py-2"> {text} </button>;
};

export default Button;
