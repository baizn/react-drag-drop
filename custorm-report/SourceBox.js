import React, { Component, PropTypes } from 'react';
import Colors from './Colors';
import { DragSource } from 'react-dnd';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem',
  margin: '0.5rem',
};

const ColorSource = {
  canDrag(props) {
    return !props.forbidDrag;
  },

  beginDrag(props) {
    let item = {
        key: props.color
    }
    return item;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      // You can check whether the drop was successful
      // or if the drag ended but nobody handled the drop
      return;
    }

    // When dropped on a compatible target, do something.
    // Read the original dragged item from getItem():
    const item = monitor.getItem();

    // You may also read the drop result from the drop target
    // that handled the drop, if it returned an object from
    // its drop() method.
    const dropResult = monitor.getDropResult();

    console.log(item.name, dropResult.name);
    // This is a good place to call some Flux action
    //CardActions.moveCardToList(item.id, dropResult.listId);
  }

};

@DragSource(props => props.color, ColorSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
class SourceBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'key'
        }
    }
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    forbidDrag: PropTypes.bool.isRequired,
    //onToggleForbidDrag: PropTypes.func.isRequired,
    children: PropTypes.node
  };

  render() {
    const { color, children, isDragging, connectDragSource, forbidDrag } = this.props;
    const opacity = isDragging ? 0.4 : 1;
    debugger
    return connectDragSource(
      <div style={{
        ...style,
        opacity,
        cursor: forbidDrag ? 'default' : 'move'
      }}>

        <small>Forbid drag</small>

        {children}
      </div>
    );
  }
}

export default class StatefulSourceBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forbidDrag: false
    };
  }

  render() {
    return (
      <SourceBox {...this.props}
                 forbidDrag={this.state.forbidDrag} />
    );
  }

  // handleToggleForbidDrag() {
  //   this.setState({
  //     forbidDrag: !this.state.forbidDrag
  //   });
  // }
}
