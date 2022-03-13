import React, {useContext} from 'react';
import ColorContext, {ColorConsumer} from "../contexts/color";

const SelectColor = () => {
  const { colors, action } = useContext(ColorContext);

  return (
    <div>
      <h2>색상을 선택하세요</h2>
        {colors.map((i) => (
          <div
            key={i}
            style={{
              background: i,
              width: '24px',
              height: '24px',
              cursor: 'pointer'
            }}
            onClick={() => action.setColor(i)}
          />
        ))}
      <hr/>
    </div>
  );
};

export default SelectColor;