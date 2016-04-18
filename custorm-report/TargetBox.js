import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';
import Colors from './Colors';
import antd from 'antd';

const style = {
 // border: '1px solid gray',
   minHeight: '8rem',
   //width: '15rem',
   //padding: '1rem',
  textAlign: 'center',
  //background: '#ccc'
};

const ColorTarget = {
  drop(props, monitor, component) {
      //debugger
      console.log('xxx')
    const dragItemOnChild = monitor.didDrop();
    const item = monitor.getItem();
    if (dragItemOnChild) {
        return;
    }

    //props.onDrop(monitor.getItemType());
  }
};

function collect(connect, monitor) {

    let obj = {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
        //draggingColor: monitor.getItemType(),
        //draggingItem: monitor.getItem()
    }
    console.log(monitor.getItem(), monitor.getItemType())
    return obj;
}

@DropTarget(['blue', 'red', 'xxx', 'green', 'piek', 'black' ], ColorTarget, collect)
export default class TargetBox extends Component {
  static propTypes = {
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    //draggingColor: PropTypes.string,
    //draggingItem: PropTypes.string,
    //lastDroppedColor: PropTypes.string,
    connectDropTarget: PropTypes.func.isRequired,
    //dragItem: PropTypes.string.isRequired,
    //onDrop: PropTypes.func.isRequired
  };

  constructor(props) {
      super(props);
      this.handleDrop = this.handleDrop.bind(this);
      this.state = {
          colResult: [

          ],
          rowResult: [

          ]
      }
  }

  handleDrop(evt) {
      //debugger
      console.log('target=' + evt.target.title);
    //   this.setState({
    //       col: evt.target.title ? true : false
    //   })
      if(!evt.target.title) {
          //更新col数据
          this.setState({
              colResult: [
                  {
                      head: '浏览器',
                      children: [
                          {
                              title: 'col1',
                              key: 'col1'
                          },
                          {
                              title: 'col2',
                              key: 'col2'
                          },
                          {
                              title: 'col3',
                              key: 'col3'
                          }
                      ]
                  },
                  {
                      head: '用户访问',
                      children: [
                          {
                              title: 'col4',
                              key: 'col4'
                          },
                          {
                              title: 'col5',
                              key: 'col5'
                          },
                          {
                              title: 'col6',
                              key: 'col6'
                          },
                          {
                              title: 'col7',
                              key: 'col7'
                          }
                      ]
                  }
              ]
          })
      } else {
          //更新row数据
          this.setState({
              rowResult: [
                  {
                      head: '搜索引擎',
                      children: [
                          {
                              title: 'row1',
                              key: 'row1'
                          },
                          {
                              title: 'row2',
                              key: 'row2'
                          },
                          {
                              title: 'row3',
                              key: 'row3'
                          }
                      ]
                  },
                  {
                      head: '搜索引擎1',
                      children: [
                          {
                              title: 'row1',
                              key: 'row4'
                          },
                          {
                              title: 'row2',
                              key: 'row5'
                          },
                          {
                              title: 'row3',
                              key: 'row6'
                          },
                          {
                              title: 'row8',
                              key: 'row7'
                          }
                      ]
                  }
              ]
          })
      }
  }

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const opacity = isOver ? 1 : 0.7;

    //let backgroundColor = 'lightblue';

    let colHeads = [];
    let colChildren = [];
    for(let col of this.state.colResult) {
        debugger
        colHeads.push(col.head);
        colChildren.push(col.children);
    }

    let rowHeads = [];
    let rowChildren = [];
    for(let row of this.state.rowResult) {
        debugger
        rowHeads.push(row.head);
        rowChildren.push(row.children);
    }

    // let trs = [];
    // let firstlen = 0;
    // for(let i = 0, len = rowChildren.length; i < len; i++) {
    //     let rc = rowChildren[i];
    //     if(i === 0) {
    //         trs.push(`<tr>`);
    //         firstlen = rc.length;
    //         for(let j = 0, clen = firstlen; j < clen; j++) {
    //             let child = rc[j];
    //             trs.push(`<td colSpan=${clen}>${child.title}</td>`)
    //             //console.log(child);
    //         }
    //         trs.push(`</tr>`)
    //     } else {
    //         let mrc = rowChildren[1];
    //         trs.push(`<tr>`);
    //         for(let k = 0, klen = firstlen; k < klen; k++) {
    //
    //             for(let m = 0, mlen = mrc.length; m < mlen; m++) {
    //                 let cdm = mrc[m];
    //                 trs.push(`<td>${cdm.title}</td>`)
    //                 //console.log(child);
    //             }
    //         }
    //         trs.push(`</tr>`)
    //     }
    // }


    let firstRow = '';
    let lens = [];
    for(let i = 0, len = rowChildren.length; i < len; i++) {
        let rc = rowChildren[i];
        lens.push(rc.length);
    }
    let maxLen = Math.max(...lens);
    console.log(lens, maxLen)

    let firstCol = '';
    let collens = [];
    for(let i = 0, len = colChildren.length; i < len; i++) {
        let rc = colChildren[i];
        collens.push(rc.length);
    }
    let maxColLen = Math.max(...collens);


    return connectDropTarget(
      <div>

        <table className='ant-table table ant-table-large ant-table-bordered'>
            <tbody className='ant-table-tbody'>
                <tr className='ant-table-row  ant-table-row-level-0'>
                    <td>
                        <div style={{
    background: '#FFFFCC',
    fontSize: '20px',
    textAlign: 'left',
    marginTop: '115px'
}}>
                            {
                                colHeads.map((ch, index) => {
                                    return <span style={{padding: '1em'}} key={ch + index}>{ch}</span>
                                })
                            }
                        </div>

                    </td>
                    <td>
                        <div style={{ ...style, opacity }}
                            onDrop={this.handleDrop}
                            title='row'
                            className='ant-table ant-table-large'>
                            {/**row头部**/}
                            <div style={{
        background: '#FFFFCC',
        fontSize: '20px',
        textAlign: 'left'
    }}>
                                {
                                    rowHeads.map((rh, index) => {
                                        return <span style={{padding: '1em'}} key={rh + index}>{rh}</span>
                                    })
                                }
                            </div>
                            {
                                rowChildren.length > 0 ?
                                <table className='ant-table table ant-table-large ant-table-bordered'>
                                    <thead className='ant-table-thead'>
                                        {

                                            rowChildren.map( (rows, index) => {
                                                if(index == 0) {
                                                    firstRow = rows;
                                                    return <tr key={index + 'rows'}>
                                                        {
                                                            rows.map( (row, index1) => {
                                                                return <th style={{textAlign: 'center'}}  colSpan={maxLen}>{row.title}</th>
                                                            })
                                                        }
                                                    </tr>
                                                } else {

                                                    return <tr key={index + 'rows1'}>
                                                        {
                                                            firstRow.map( (rows1, index2) => {
                                                                return rows.map( (row2, index3) => {
                                                                    return <th style={{textAlign: 'center'}}>{row2.title}</th>
                                                                })
                                                            })
                                                        }
                                                        </tr>

                                                }
                                            })
                                        }
                                    </thead>
                                </table>
                                :
                                <p>将维度拖到此处作为列标签</p>
                            }

                        </div>
                    </td>
                </tr>
                <tr className='ant-table-row  ant-table-row-level-0'>
                    <td>
                        <div style={{ ...style, opacity }}
                            onDrop={this.handleDrop}>

                            {
                                colChildren.length > 0 ?
                                <table className='ant-table table ant-table-large ant-table-bordered'>
                                    <thead className='ant-table-thead'>
                                        {
                                            colChildren.length > 1 ?
                                                colChildren[0].map( (rows1, index2) => {
                                                    return colChildren[1].map( (row2, index3) => {
                                                        return <tr>
                                                        {index3 === 0 ? <th style={{textAlign: 'center'}}        rowSpan={maxColLen}>{rows1.title}</th> : ''}<th style={{textAlign: 'center'}}>{row2.title}</th></tr>
                                                    })
                                                })
                                            :
                                            colChildren[0].map( (row, index) => {
                                                return <tr>
                                                <th style={{textAlign: 'center'}}>{row.title}</th></tr>
                                            })
                                        }
                                    </thead>
                                </table>
                                :
                                <p>将维度拖到此处作为行标签</p>
                            }
                        </div>
                    </td>
                    <td>

                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    );

    // if(hasDropRow && !hasDropCol) {
    //     return connectDropTarget(
    //       <div style={{ ...style, backgroundColor, opacity }}>
    //
    //         <p>{this.props.text}</p>
    //
    //         {!canDrop && dragItem &&
    //           <p>Row dropped: {dragItem}</p>
    //         }
    //       </div>
    //     );
    // } else {
    //     return connectDropTarget(
    //       <div style={{ ...style, backgroundColor, opacity }}>
    //
    //         <p>{this.props.text}</p>
    //
    //         {!canDrop && dragItem &&
    //           <p>Col dropped: {dragItem}</p>
    //         }
    //       </div>
    //     );
    // }
  }
}
