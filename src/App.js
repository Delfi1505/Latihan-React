import React, { Component } from 'react';
import './App.css';
import Alert from './Component/Alert';
import Media from './Component/Media';
// import element Alert yang telah dibuat

class App extends Component {
  constructor() {
    super();
    this.state = {
      type: "success",
      header: "React JS itu",
      content: "seru dan menyenangkan"
    }
  }
   // fungsi untuk mengubah tipe
   changeTypeAlert = (event) => {
    this.setState({ type: event.target.value });
  }
  // fungsi untuk mengubah header
  changeHeaderAlert = (event) => {
    this.setState({ header: event.target.value });
  }
  // fungsi untuk mengubah content
  changeContentAlert = (event) => {
    this.setState({ content: event.target.value });
  }

  render() {
    return (
      <div className="App container col-sm-6">
        <Alert type={this.state.type} header={this.state.header}>
          {this.state.content}
        </Alert>
        <hr />
        <h4>Alert Control</h4>
        <b className="text-left">Tipe Alert</b>
        <select className="form-control" name="type" value={this.state.type}
          onChange={this.changeTypeAlert}>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
          <option value="info">Info</option>
        </select>
        <b className="text-left">Header Alert</b>
        <input
          type="text" name="header" className="form-control" value={this.state.header}
          onChange={this.changeHeaderAlert} />
        <b className="text-left">Content Alert</b>
        <input
          type="text" name="content" className="form-control" value={this.state.content}
          onChange={this.changeContentAlert} />
        <Alert type="danger" header="Fatal Error">
          Ini adalah alert dengan tipe danger
        </Alert>
        <Alert type="success" header="Berhasil">
          Ini adalah alert dengan tipe success
        </Alert>
        <Alert type="warning" header="Warning">
          Ini adalah alert dengan tipe warning
        </Alert>
        <Media image="wonu.jpg" title="Wonu memohon">
          memohon agar cepat kaya
        </Media>
        <Media image="wonwoo.jpg" title="Wonu tersenyum">
          tersenyum karena barusan dapat uang
        </Media>
      </div>
    );
  }
}

export default App;