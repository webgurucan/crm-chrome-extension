import React, { Component } from 'react';
import style from './infographView.css';

// we need inline as PDF export required it
const ctdiv = {
  height: '300px',
  'text-align': 'center'
};

const subbutton = {
  border: '2px solid gray',
  padding: '5px',
  'margin-bottom': '20px',
  'margin-left': '200px',
  color: 'green'
};

const topdiv = {
  width: 0,
  height: 0,
  'border-style': 'solid',
  'border-width': '200px 400px 0 0',
  'border-color': '#78CED7 transparent transparent transparent',
  margin: 'auto'
};

const bottomdiv = {
  width: 0,
  height: 0,
  'border-style': 'solid',
  'border-width': '0 0 200px 400px',
  'border-color': 'transparent transparent #90C549 transparent',
  position: 'relative',
  top: '-198px',
  margin: 'auto'
};

const gtdivinner = {
  width: '100%',
  position: 'relative',
  height: '260px',
  'border-left': '2px solid',
  'margin-bottom': '20px',
  'border-bottom': '2px solid'
};

const rbddiv = {
  width: '260px',
  height: '183px',
  position: 'relative',
  top: '77px',
  'border-top': '2px dashed red',
  'border-right': '2px dashed red'
};

const ppad = {
  padding: '30px'
};

const gtddiv1 = {
  width: '228px',
  height: '78',
  position: 'relative',
  top: '-3px',
  'border-top': '2px dashed green',
  'border-right': '2px dashed green'
};

const gtddiv2 = {
  width: '165px',
  height: '123px',
  position: 'relative',
  top: '-128px',
  'border-top': '2px dashed green',
  'border-right': '2px dashed green'
};

const svgstyle = { position: 'absolute', top: '0px' };
const svgstyle2 = { position: 'absolute', top: '90px' };
const pathcss = {
  'stroke-width': '2px',
  stroke: 'red',
  'stroke-linecap': 'round',
  fill: 'none'
};

const img1s = {
  width: '60px;',
  position: 'absolute;',
  left: '-70px;',
  top: '150px;'
};

const img2s = {
  width: '60px;',
  position: 'absolute;',
  left: '-70px;',
  top: '150px;'
};


class InfoGraphView extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
    this.document = null;
    this.pdfButton = null;
    this.outputd1 = null;
    this.outputd2 = null;
  }

  componentDidMount() {
    this.outputd1.style.display = 'none';
    this.outputd2.style.display = 'none';
  }

  exportPDF() {
    this.pdfButton.style.display = 'none';
    window.print();
    setTimeout(() => {
      this.pdfButton.style.display = 'block';
    }, 100);
  }

  loadFile(event, type) {
    if (type === 1) {
      this.outputd1.src = URL.createObjectURL(event.target.files[0]);
      this.outputd1.style.display = 'block';
      this.outputd1.style.width = '60px';
      this.outputd1.style.position = 'absolute';
      this.outputd1.style.left = '-70px';
      this.outputd1.style.top = '150px';
      this.filei1.style.display = 'none';
    } else if (type === 2) {
      this.outputd2.src = URL.createObjectURL(event.target.files[0]);
      this.outputd2.style.display = 'block';
      this.outputd2.style.width = '60px';
      this.outputd2.style.position = 'absolute';
      this.outputd2.style.right = '-25px';
      this.outputd2.style.top = '50px';
      this.filei2.style.display = 'none';
    }
    //var output = document.getElementById('output');
    //output.src = URL.createObjectURL(event.target.files[0]);
  }

  render() {
    const { actions, routes } = this.props;
    return (
      <div>
        <div ref={(r) => this.document = r}>
          <p style={ppad}>
            Thank you for your time earlier. Based on our discussion about your business, we believe you face a trade off
between two different priorities. On the one hand you are looking for a high level of quality / reward / return. On<br />
            the other hand you also want a high level of quantity / low level of investment / low level of work.
Because these are competing values, your challenge is to choose a balance between them.<br />
            Our product / service can assist you and maximize both sides by increasing your effectiveness as a business,
            therefore allowing you to increase your resources to obtain both priorities to a high level.
          </p>
          <div style={ctdiv}>
            <div><h3>TradOff Chart</h3></div>
            <div style={topdiv}></div>
            <div style={bottomdiv}></div>
          </div>
          <div className={style.gtdiv}>
            <div style={gtdivinner}>
              <label style={{ position: 'absolute', left: '-52px' }}>{routes.formvalues.val1}</label>
              <label style={{ position: 'absolute', right: '-52px', bottom: '0' }}>{routes.formvalues.val2}</label>
              <input accept="image/*" ref={(i) => this.filei1 = i} onChange={(event) => this.loadFile(event, 1)} style={{ position: "absolute", top: "150px", left: "-70px" }} type="file" id="file1" title="Logo 1" />
              <img id="output1" style={img1s} ref={(c) => this.outputd1 = c} />
              <input accept="image/*" ref={(i) => this.filei2 = i} onChange={(event) => this.loadFile(event, 2)} style={{ position: "absolute", right: "-60px", zIndex: "999999" }} type="file" id="file2" title="Logo 2" />
              <img id="output2" style={img2s} ref={(c) => this.outputd2 = c} />
              <div style={rbddiv}></div>
              <div style={gtddiv1}></div>
              <div style={gtddiv2}></div>
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={svgstyle}>
                <path xmlns="http://www.w3.org/2000/svg" style={pathcss} id="curve" d="M0,1 C266,26 465,104 380,720" ></path>
              </svg>
              <svg width="100%" height="66%" xmlns="http://www.w3.org/2000/svg" style={svgstyle2}>
                <path xmlns="http://www.w3.org/2000/svg" style={pathcss} id="curve" d="M0,10 C216,26 265,104 280,230" ></path>
              </svg>

            </div>
          </div>
          <div>
            <button ref={(b) => this.pdfButton = b} style={subbutton} onClick={() => this.exportPDF()}>Export PDF</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    routes: state.routes,
    isWindow: state.isWindow,
    formvalues: state.formvalues
  }),
  dispatch => ({
    actions: bindActionCreators(RouteAction, dispatch)
  })
)(InfoGraphView);
