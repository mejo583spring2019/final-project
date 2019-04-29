const React = require("react");
let CanvasJS = require("./canvasjs.min");
CanvasJS = CanvasJS.Chart ? CanvasJS : window.CanvasJS;

/** Class for the CanvasJS Component */
class CanvasJSChart extends React.Component {
  static _cjsContainerId = 0

  /** constructor for CanvasJS charts
   * @param {any} props
   */
  constructor(props) {
    super(props);
    this.options = props.options ? props.options : {};
    this.containerProps = props.containerProps ? props.containerProps : {
      width: "100%", position: "relative",
    };
    this.containerProps.height = props.containerProps &&
      props.containerProps.height ?
      props.containerProps.height : this.options.height ?
        this.options.height + "px" : "400px";
    this.chartContainerId = "canvasjs-react-chart-container-" +
      CanvasJSChart._cjsContainerId++;
  }

  /** Mounts the chart component into the App */
  componentDidMount() {
    // Create Chart and Render
    this.chart = new CanvasJS.Chart(this.chartContainerId, this.options);
    this.chart.render();

    if (this.props.onRef) {
      this.props.onRef(this.chart);
    }
  }

  /** Determines if the component should update
   * @param {any} nextProps
   * @param {any} nextState
   * @return {any}
   */
  shouldComponentUpdate(nextProps, nextState) {
    // Check if Chart-options has changed and determine if
    // component has to be updated
    return !(nextProps.options === this.options);
  }

  /** Updates the chart and then renders */
  componentDidUpdate() {
    // Update Chart Options & Render
    this.chart.options = this.props.options;
    this.chart.render();
  }

  /** Unmounts the component */
  componentWillUnmount() {
    // Destroy chart and remove reference
    this.chart.destroy();
    if (this.props.onRef) {
      this.props.onRef(undefined);
    }
  }

  /**
   * @return {any} JSX content
   */
  render() {
    // return React.createElement('div', { id: this.chartContainerId, style:
    // this.containerProps });
    return <div id={this.chartContainerId} style={this.containerProps} />;
  }
}

const CanvasJSReact = {
  CanvasJSChart: CanvasJSChart,
  CanvasJS: CanvasJS,
};

export default CanvasJSReact;
