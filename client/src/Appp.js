import React, { Component } from 'react'
import * as Blockly from 'blockly'
import { createPlayground} from '@blockly/dev-tools'

class Appp extends Component {

  componentDidMount(){
    Blockly.inject('blocklyDiv', {
  });
  }
  render() {
    return (
      <blocklyDiv className='blocklyDiv'>
         <h3>blockkkkkkly</h3>        
      </blocklyDiv>
    )
  }
}

export default Appp;