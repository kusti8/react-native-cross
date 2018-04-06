import React, { Component } from 'react';
import {
  render,
  Window,
  App,
  Box,
  Menu,
  Button,
  Slider,
  Area,
  Rectangle,
  Line,
  Arc,
  Circle,
  Path,
  AreaGroup,
} from '../src/';

class Example extends Component {
  state = { bool: false, val: 40 };

  render() {
    return (
      <App>
        <Menu>
          <Menu.Item type="Quit" />
        </Menu>
        <Window title="Test" size={{ w: 600, h: 600 }} margined={true}>
          <Box>
            <Area
              // onKeyUp={(area, evt) => console.log("up", evt.getKey())}
              // onKeyDown={(area, evt) => console.log("down", evt.getKey())}
              // onMouseEnter={area => console.log('enter')}
              // onMouseLeave={area => console.log('leave')}
              // onMouseMove={(area, evt) => console.log(evt)}
              stretchy={false}
              strokeWidth="4"
            >
              <AreaGroup
                stroke="black"
                strokeWidth="10"
                transform="translate(200, 50)"
              >
                <Rectangle x="0" y="0" width="100" height="100" fill="red" />
                <Rectangle x="100" y="0" width="100" height="100" fill="blue" />
              </AreaGroup>
              <Rectangle
                transform={`translate(-50%, -50%)`}
                // transform={`scale(1, 10%, 20%)`}
                // transform={`scale(${this.state.val / 100.0 + 0.5}, ${this.state.val/100.0 +0.5}, 25, 25)`}
                x="50%"
                y="50%"
                width="25%"
                height="25%"
                stroke="black"
                strokeWidth="7"
                fill={this.state.bool ? 'red' : 'blue'}
              />
              <Line
                transform={`rotate(${this.state.val * 3.6})`}
                x1="78%"
                y1="5%"
                x2="98%"
                y2="25%"
                stroke="green"
              />
              <Arc
                stroke={'red'}
                x="50%"
                y="50%"
                r="40%"
                start="0"
                sweep={this.state.val * 3.6}
                strokeWidth="10"
                strokeLinecap={this.state.bool ? 'square' : 'round'}
              />
              <Circle
                stroke={`rgb(${255 - Math.round(this.state.val * 2.5)}, ${255 -
                  Math.round(this.state.val * 2.5)}, ${Math.round(
                  this.state.val * 2.5
                )})`}
                x="85%"
                y="85%"
                r="40"
              />
              <Rectangle
                // transform={this.state.bool ? 'matrix(1, 2, -1, 1, 80, 80)' : ''}
                transform={`skew(${(this.state.val / 100 - 0.5) * 2 * 30}, 0)`}
                x="30"
                y="15"
                width="10%"
                height="10%"
                stroke="blue"
                fill="lime"
              />
              <Path
                d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
                // d="M10 80 Q 95 10 180 80"
                // d="M10 10 H 90 V 90 H 10 Z"
                stroke="red"
                transform="translate(0, 100)"
              />
              <Rectangle
                transform={`scale(${0.5 + this.state.val / 100}, 0, 0)`}
                x="8%"
                y="85%"
                width="10%"
                height="10%"
                stroke="black"
              />
            </Area>
            <Button
              onClick={() =>
                this.setState({
                  bool: !this.state.bool,
                })
              }
            >
              Toggle
            </Button>
            <Slider
              value={this.state.val}
              onChange={v => this.setState({ val: v })}
            />
          </Box>
        </Window>
      </App>
    );
  }
}

render(<Example />);
