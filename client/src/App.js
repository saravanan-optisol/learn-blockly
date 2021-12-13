import React, {useEffect, useState} from 'react';
import Blockly from 'node-blockly/browser'; 
import BlocklyDrawer, { Block, Category, workspace } from 'react-blockly-drawer';
import PropertyPanel from './components/PropertyViewer';
import Styled from 'styled-components'
import './App.css'

const App = () =>{

  useEffect(() =>{
    console.log(workspace)
    console.log('useEffect')
    const bloc = document.querySelectorAll('.blocklyPath');
    console.log(bloc)
    
  })
  const [state, setState] = useState({
    data: '',
    rule: ''
  })

  const onclickHandeler = (nodevalue) =>{
    setState({
        data: nodevalue
      }) 

}

console.log(state);
  const helloWorld =  {
    name: 'HelloWorld',
    category: 'Category',
    block: {
      init: function () {
        this.jsonInit({
          message0: 'Helllo %1 %3',
          args0: [
            {
              type: 'field_input',
              name: 'NAME',
              check: 'String',
            },
            {
              type: 'field_input',
              name: 'NAME',
              check: 'String',
            },
            {
              type: 'field_input',
              name: 'NAME',
              check: 'String',
            },
          ],
          output: 'String',
          colour: 160,
          tooltip: 'Says Hello',
        });
      },
      onchange: function (event) {
        if (event.type === 'ui') {
            console.log('onclick', this);
            onclickHandeler(this);
        }
        } 
    },
    generator: (block) => {
      const message = `'${block.getFieldValue('NAME')}'` || '\'\'';
      const code = `console.log('Hello ${message}')`;
      return [code, Blockly.JavaScript.ORDER_MEMBER];
    },

  
  };

  return(
    <HomeDiv>
    <BlocklyDiv tools={[helloWorld]}
      language={Blockly.JavaScript}
      appearance={
        {
          categories: {
            Demo1: {
              colour: '123'
            }
          },
        }
      }>
    </BlocklyDiv>
    <PropertyPanel />
    </HomeDiv>
  )
}

export default App;
  
const HomeDiv  = Styled.div`
  display: flex;
  height: 100vh;
`
const BlockDiv  = Styled(Block)`
  height: 10px;
  width: 20px;
  background-color: red;
  cursor: pointer;
`

const BlocklyDiv = Styled(BlocklyDrawer)`
  width: 100%;
  height: 100%;
`