import Option from "../Option/Option";

const Options: React.FC<{type: string, data: string[]}> = ({ type, data }) => {
  return (
    <ul className='flex gap-4'>
      {data.map((el, index) => (
        <Option key={index} type={type}>
          {el}
        </Option>
      ))}
    </ul>
  );
};

export default Options;