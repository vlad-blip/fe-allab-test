import Option from "../Option/Option";

const Options: React.FC<{type: string, data: string[]}> = ({ type, data }) => {
  return (
    <ul className='grid gap-4 grid-cols-options xl:grid-cols-options-xl'>
      {data.map((el, index) => (
        <Option key={index} type={type}>
          {el}
        </Option>
      ))}
    </ul>
  );
};

export default Options;