
import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const WrappedSingleListItem = ({
  index,
  isSelected,
  onClickHandler,
  text,
}) => {
  return (
    <li className='li'
      style={{ backgroundColor: isSelected ? 'green' : 'red'}}
      onClick={()=>onClickHandler(index)}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({
  items,
}) => {
  
  const [selectedIndex ,setSelectedIndex] = useState();

  useEffect(() => {
    setSelectedIndex(4);
  }, [items])

  const handleClick = index => {
    console.log(index)
    setSelectedIndex(index);

  };

  return (
    <>
    <ul style={{ textAlign: 'left' }}>
       Rate My Answers ! 
      { items && items.map((item, index) => (
        <SingleListItem
          key={index}
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={index === selectedIndex}
        />
      ))}
    </ul>
    </>
  )
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({

    text: PropTypes.string.isRequired,

  })),
};

WrappedListComponent.defaultProps = {
  items:
  [
    { text: "0"},
    { text: "1"},
    {text:"2"},
    {text:"3"},
    {text :"4"},
    ],
};

const List = memo(WrappedListComponent);

export default List;

