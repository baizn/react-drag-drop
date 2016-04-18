import React, { Component } from 'react';
import SourceBox from './SourceBox';
import TargetBox from './TargetBox';
import Colors from './Colors';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)
export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: [
                { accepts: ['row'], lastDroppedItem: null, text: '将维度拖到此处作为列标签' },
                { accepts: ['col'], lastDroppedItem: null, text: '将维度拖到此处作为行标签' }
            ],
            dragSource: [
                {
                    type: 'row',
                    name: 'green'
                },
                {
                    type: 'row',
                    name: 'red'
                },
                {
                    type: 'row',
                    name: 'black'
                }
            ]
        }
    }
  render() {
    return (
      <div style={{ overflow: 'hidden', clear: 'both', margin: '-.5rem' }}>
        <div style={{ float: 'left' }}>
          <SourceBox color='red'>
            <SourceBox color='blue'>
              <SourceBox color='black' />
              <SourceBox color='green' />
            </SourceBox>
            <SourceBox color='piek'>
              <SourceBox color='xxx' />
            </SourceBox>
          </SourceBox>
        </div>

        <div style={{ float: 'left', marginLeft: '5rem', marginTop: '.5rem' }}>
          <TargetBox targetSource={this.state.target}/>
        </div>
      </div>
    );
  }
}
