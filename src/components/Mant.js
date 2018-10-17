import React, { Component } from 'react'
import './mants.css'

class Mant extends Component {
  constructor () {
    super()

    this.state = {
      count: 0,
      select: '',
      selectSE: '',
      selectCE: '',
      selectALI: '',
      selectAIE: '',
      conteoEE: 0,
      conteoSE: 0,
      conteoCE: 0,
      conteoALI: 0,
      conteoAIE: 0,
      resultEE: 0,
      resultSE: 0,
      resultCE: 0,
      resultALI: 0,
      resultAIE: 0,
      result: 0
    }

    this.handleResultClick = this.handleResultClick.bind(this)
    this.handleInputChanged = this.handleInputChanged.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleResultClick (e) {
    e.preventDefault()
    this.setState({
      resultEE: this.state.select * this.state.conteoEE,
      resultSE: this.state.selectSE * this.state.conteoSE,
      resultCE: this.state.selectCE * this.state.conteoCE,
      resultALI: this.state.selectALI * this.state.conteoALI,
      resultAIE: this.state.selectAIE * this.state.conteoAIE,
      result: (this.state.select * this.state.conteoEE) + (this.state.selectSE * this.state.conteoSE) + (this.state.selectCE * this.state.conteoCE) + 
      (this.state.selectALI * this.state.conteoALI) + (this.state.selectAIE * this.state.conteoAIE)
    })
  }
  handleInputChanged (e) {
    if (e.target.id === "conteoEE") {
      this.setState({
        conteoEE: e.target.value
      })
    } else if (e.target.id === "conteoSE") {
      this.setState({
        conteoSE: e.target.value
      })
    } else if (e.target.id === "conteoCE") {
      this.setState({
        conteoCE: e.target.value
      })
    } else if (e.target.id === "conteoALI") {
      this.setState({
        conteoALI: e.target.value
      })
    } else if (e.target.id === "conteoAIE") {
      this.setState({
        conteoAIE: e.target.value
      })
    }
  }
  handleChange (e) {
    if (e.target.id === "rsimple" || e.target.id === "rpromedio" || e.target.id === "rcomplejo") {
      this.setState({
        select: e.target.value
      })
    } else if (e.target.id === "rsimpleSE" || e.target.id === "rpromedioSE" || e.target.id === "rcomplejoSE" ) {
      this.setState({
        selectSE: e.target.value
      })
    } else if (e.target.id === "rsimpleCE" || e.target.id === "rpromedioCE" || e.target.id === "rcomplejoCE" ) {
      this.setState({
        selectCE: e.target.value
      })
    } else if (e.target.id === "rsimpleALI" || e.target.id === "rpromedioALI" || e.target.id === "rcomplejoALI") {
      this.setState({
        selectALI: e.target.value
      })
    } else if (e.target.id === "rsimpleAIE" || e.target.id === "rpromedioAIE" || e.target.id === "rcomplejoAIE") {
      this.setState({
        selectAIE: e.target.value
      })
    }
  }
  render () {
    return (
      <div className="Content">
        <header class='Header-Container'>
          <table >
            <tr>
              <th>Valor de dominio de  información</th>
              <th>Conteo</th>
              <th>Simple</th>
              <th>Promedio</th>
              <th>Complejo</th>
              <th>Resultado</th>
            </tr>
            <tr>
              <td>Entradas externas (EE)</td>
              <td> <input type="number" id="conteoEE" value={this.state.conteoEE} onChange={ this.handleInputChanged }/></td>
              <td>  <input type="radio" id="rsimple" value="3" checked={this.state.select === "3"} onChange={this.handleChange} /> X3</td>
              <td>  <input type="radio" id="rpromedio" value="4" checked={this.state.select === "4"} onChange={this.handleChange}/> X4</td>
              <td> <input type="radio" id="rcomplejo" value="6" checked={this.state.select === "6"} onChange={this.handleChange} /> X6</td>
              <td> <input type="text" id="resultEE" value={ this.state.resultEE } /></td>
            </tr>
            <tr>
              <td>Salidas externas (SE)</td>
              <td> <input type="number" id="conteoSE" value={this.state.conteoSE} onChange={ this.handleInputChanged }/></td>
              <td>  <input type="radio" id="rsimpleSE" value="4" checked={this.state.selectSE === "4"} onChange={this.handleChange} />  X4</td>
              <td>  <input type="radio" id="rpromedioSE" value="5" checked={this.state.selectSE === "5"} onChange={this.handleChange} /> X5</td>
              <td> <input type="radio" id="rcomplejoSE" value="7" checked={this.state.selectSE === "7"} onChange={this.handleChange} /> X7</td>
              <td> <input type="text" id="resultSE" value={this.state.resultSE} /></td>
            </tr>
            <tr>
              <td>Consultas externas (CE)</td>
              <td> <input type="number" id="conteoCE" value={this.state.conteoCE} onChange={ this.handleInputChanged } /></td>
              <td>  <input type="radio" id="rsimpleCE" value="3" checked={this.state.selectCE === "3"} onChange={this.handleChange} /> X3</td>
              <td>  <input type="radio" id="rpromedioCE" value="4" checked={this.state.selectCE === "4"} onChange={this.handleChange} /> X4</td>
              <td> <input type="radio" id="rcomplejoCE" value="6" checked={this.state.selectCE === "6"} onChange={this.handleChange} /> X6</td>
              <td> <input type="text" id="resultCE" value={this.state.resultCE} /></td>
            </tr>
            <tr>
              <td>Archivos lógicos internos (ALI)</td>
              <td> <input type="number" id="conteoALI" value={this.state.conteoALI} onChange={ this.handleInputChanged } /></td>
              <td>  <input type="radio" id="rsimpleALI" value="7" checked={this.state.selectALI === "7"} onChange={this.handleChange} /> X7</td>
              <td>  <input type="radio" id="rpromedioALI" value="10" checked={this.state.selectALI === "10"} onChange={this.handleChange} /> X10</td>
              <td> <input type="radio" id="rcomplejoALI" value="15" checked={this.state.selectALI === "15"} onChange={this.handleChange} /> X15</td>
              <td> <input type="text" id="resultALI" value={this.state.resultALI} /></td>
            </tr>
            <tr>
              <td>Archivos de interfaz externos (AIE)</td>
              <td> <input type="number" id="conteoAIE" value={this.state.conteoAIE} onChange={ this.handleInputChanged } /></td>
              <td>  <input type="radio" id="rsimpleAIE" value="5" checked={this.state.selectAIE === "5"} onChange={this.handleChange} /> X5</td>
              <td>  <input type="radio" id="rpromedioAIE" value="7" checked={this.state.selectAIE === "7"} onChange={this.handleChange} /> X7</td>
              <td> <input type="radio" id="rcomplejoAIE" value="10" checked={this.state.selectAIE === "10"} onChange={this.handleChange} /> X10</td>
              <td> <input type="text" id="resultAIE" value={this.state.resultAIE} /></td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <button type="button" onClick={this.handleResultClick}>Resultado  </button>
              <td> <input type="text" id="result" value={this.state.result} /></td>  
            </tr>
          </table>
        </header>
      </div>
    );
  }
}
export default Mant
